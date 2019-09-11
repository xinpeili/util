export default (sencond, fmt = 'HH:mm:ss') => {
	const minute = sencond % 3600;
	const senc = minute % 60;
	var o = {
		'h+': Math.floor(sencond / 3600),
		'H+': Math.floor(sencond / 3600),
		'm+': Math.floor(minute / 60),
		's+': senc
	};
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return fmt;
};
