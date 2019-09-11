export default url => {
	return new Promise((resovle, reject) => {
		const img = new Image();
		img.crossOrigin = '';
		img.onload = () => {
			resovle(img);
		};
		img.onerror = e => {
			reject(e);
		};
		img.src = url;
	});
};
