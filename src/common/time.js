export const isDate = n => {
	return Object.prototype.toString.call(n).slice(8, -1) === 'Date';
};

/**
 * return d2-d1 in millseconds
 * @param {*} d1
 * @param {*} d2 defaults to now
 */
export const timeDiff = (d1, d2 = new Date()) => {
	const t1 = isDate(d1) ? +d1 : /^\d+$/.test(d1) ? +new Date(Number(d1)) : +new Date(d1.replace(/-/g, '/'));
	const t2 = isDate(d2) ? +d2 : /^\d+$/.test(d2) ? +new Date(Number(d2)) : +new Date(d2.replace(/-/g, '/'));
	return t2 - t1;
};
