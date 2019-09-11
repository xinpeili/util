// 节流 让连续高频事件不会积压，使其有节奏的执行，  适用于  mousemove window对象的resize和scroll 事件

export default (fn, wait) => {
	let isThrottled = false,
		lastArgs = null;
	return function wrapper() {
		if (isThrottled) {
			lastArgs = arguments;
		} else {
			fn.apply(this, arguments);
			isThrottled = setTimeout(() => {
				isThrottled = false;
				if (lastArgs) {
					wrapper.apply(this, lastArgs);
					lastArgs = null;
				}
			}, wait);
		}
	};
};
