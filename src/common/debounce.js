// 一个防抖函数
// 事件连续高频触发时不会多次执行，   文本输入keydown 事件，keyup 事件，例如做autocomplete

export default (func, delay) => {
	let inDebounce;
	return function() {
		const context = this;
		const args = arguments;
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => func.apply(context, args), delay);
	};
};
