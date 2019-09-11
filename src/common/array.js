// 一些数组的辅助方法

// 数组去重
export const array_unique = arr => {
	return Array.from(new Set(arr));
};

// 返回一个数组,其元素是在a数组中,而不再b数组中
export const array_diff = (a, b) => a.concat(b).filter(v => a.includes(v) && !b.includes(v));

// 对数组元素逐一过滤,predicate断言为false的被去除,返回新数组
export const array_remove = (arr, predicate) => {
	let i = -1;
	const result = [];
	while (i++ < arr.length - 1) {
		if (!predicate(arr[i], i)) result.push(arr[i]);
	}
	return result;
};
