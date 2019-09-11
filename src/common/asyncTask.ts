// 限制异步任务的并发执行数量,执行错误的忽略掉并继续执行,任务可以实时添加

interface taskItem {
	no: number;
	task: Function | null;
}

interface taskResult {
	no: number;
	res: any;
	err: any;
}

export default class AsyncTask {
	private tasks: Array<Function> = [];
	private iterator: Function;
	private callback: Function;
	private results: Array<taskResult> = [];
	private index: number = 0;
	private threadpool: Array<boolean>;
	private stoped: boolean = false;

	constructor(arr: Array<Function>, limit: number, iterator: Function, callback: Function = () => {}) {
		this.iterator = iterator;
		this.callback = callback;
		this.tasks.push(...arr);
		this.threadpool = new Array(limit).fill(false);
		this.runThread();
	}

	push(tasks: Array<Function>) {
		this.tasks.push(...tasks);
		this.runThread();
	}

	stop() {
		this.stoped = true;
	}

	private runThread() {
		for (let i = 0, l = this.threadpool.length; i < l; i++) {
			const status = this.threadpool[i];
			if (!status) {
				this.thread(i);
			}
		}
	}

	private getOne(): taskItem {
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

	private async thread(id: number) {
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

	private taskDone() {
		if (this.stoped) {
			return;
		}
		if (this.threadpool.every(status => !status)) {
			this.callback(this.results);
		}
	}
}
