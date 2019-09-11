// 一些正则和类型判断

export const isFunction = value => {
	return typeof value === 'function';
};

export const isObject = value => {
	return value && typeof value === 'object' && value.constructor === Object;
};

export const isString = value => {
	return typeof value === 'string' || value instanceof String;
};

export const isArray = value => {
	return value && typeof value === 'object' && value.constructor === Array;
};

export const isRegex = value => {
	return value && typeof value === 'object' && value.constructor === RegExp;
};

export const isEmpty = value => {
	return (
		(isString(value) && value === '') ||
		(isArray(value) && value.length === 0) ||
		(isObject(value) && Object.keys(value).length === 0)
	);
};

export const isEmail = str => {
	return /^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/i.test(str);
};

export const isTelePhone = str => {
	return /^1[34578][0-9]{9}$/.test(str);
};

// 数字,非负,包含小数

export const isNumber = s => {
	return /((^[1-9]+\d*$)|(^[1-9]+\d*\.\d+$)|(^0\.\d+$))/.test(s);
};
