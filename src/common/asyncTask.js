// 限制异步任务的并发执行数量,执行错误的忽略掉并继续执行,任务可以实时添加
export default class AsyncTask {
	constructor(arr, limit, iterator, callback = () => {}) {
		this.tasks = [];
		this.results = [];
		this.index = 0;
		this.stoped = false;
		this.iterator = iterator;
		this.callback = callback;
		this.tasks.push(...arr);
		this.threadpool = new Array(limit).fill(false);
		this.runThread();
	}
	push(tasks) {
		this.tasks.push(...tasks);
		this.runThread();
	}
	stop() {
		this.stoped = true;
	}
	runThread() {
		for (let i = 0, l = this.threadpool.length; i < l; i++) {
			const status = this.threadpool[i];
			if (!status) {
				this.thread(i);
			}
		}
	}
	getOne() {
		const index = this.index;
		if (this.tasks[index]) {
			this.index++;
			const item = {
				no: index,
				task: this.tasks[index]
			};
			return item;
		} else {
			return {
				no: index,
				task: null
			};
		}
	}
	async thread(id) {
		this.threadpool[id] = true;
		while (true) {
			if (this.stoped) {
				break;
			}
			const item = this.getOne();
			if (item.task) {
				let res, err;
				try {
					res = await item.task();
					err = null;
				} catch (e) {
					res = null;
					err = e;
				}
				const resItem = {
					no: item.no,
					res,
					err
				};
				this.iterator(err, res, item.no);
				this.results[item.no] = resItem;
			} else {
				break;
			}
		}
		this.threadpool[id] = false;
		this.taskDone();
	}
	taskDone() {
		if (this.stoped) {
			return;
		}
		if (this.threadpool.every(status => !status)) {
			this.callback(this.results);
		}
	}
}
