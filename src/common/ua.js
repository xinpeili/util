export const isWechat = ua => {
	return /MicroMessenger/i.test(ua);
};

export const isIos = ua => {
	return /ip(hone|od|ad)/i.test(ua);
};

export const isAndroid = ua => {
	return /android/i.test(ua);
};
