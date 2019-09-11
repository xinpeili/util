// IE10,IE11, 不支持`location.origin`, 最好使用此方法拼接路径

export default path => {
	let origin = location.origin ? location.origin : location.protocol + '//' + location.host;
	return `${origin}${path}`;
};
