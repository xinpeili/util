export default (element, event, fn) => {
	const func = function(e) {
		element.removeEventListener(event, func);
		fn.call(this, e);
	};
	element.addEventListener(event, func);
};
