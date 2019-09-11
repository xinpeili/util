export const addEvent = (element, type, handler, opts = false) => {
	if (element.addEventListener) {
		element.addEventListener(type, handler, opts);
	} else if (element.attachEvent) {
		element.attachEvent('on' + type, () => {
			handler.call(element);
		});
	} else {
		element['on' + type] = handler;
	}
};

export const removeEvent = (element, type, handler, opts = false) => {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, opts);
	} else if (element.datachEvent) {
		element.detachEvent('on' + type, handler);
	} else {
		element['on' + type] = null;
	}
};
