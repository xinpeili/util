export default size => {
	if (!size || size <= 0) {
		return '0 B';
	}
	const name = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let pos = 0;
	while (size >= 1204) {
		size /= 1024;
		pos++;
	}
	return size.toFixed(2) + ' ' + name[pos];
};
