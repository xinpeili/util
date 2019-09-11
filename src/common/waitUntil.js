export const sleep = async ms => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
};
// 新增特性:传入的参数可以是async函数
export default async (c, fun, fall = () => {}, dur = 50, maxTimes = 20) => {
	let times = 0;
	const funwarp = async () => {
		const ret = await c();
		times++;
		if (ret) {
			return await fun(ret, times);
		} else if (times < maxTimes) {
			await sleep(dur);
			return await funwarp();
		} else {
			return await fall(times);
		}
	};
	return await funwarp();
};
