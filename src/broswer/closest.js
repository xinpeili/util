// jquery 中的 closest 很好用,向上查找父级

// closest 在IE中不支持 https://caniuse.com/#search=closest

export default (node, parent) => {
	while (node) {
		if (node === parent) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
};
