export default class asyncQueue {
	constructor(tasks) {
		this.tasks = tasks;
		this.run();
	}
	push(task) {
		this.tasks.push(task);
		this.run();
	}
	async run() {
		if (this.runing) {
			return;
		}
		this.runing = true;
		let item;
		while ((item = this.tasks.shift())) {
			try {
				await item();
			} catch (e) {
				// ignore error
			}
		}
		this.runing = false;
	}
}
