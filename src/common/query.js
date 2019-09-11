/**
 *
 * 类似于 php 中的 http_build_query 和jQuery中的$.param
 */
const buildQuery = params => {
	if (!params) {
		return '';
	}
	var esc = encodeURIComponent;
	return Object.keys(params)
		.map(k => esc(k) + '=' + esc(params[k]))
		.join('&');
};

/**
 *
 * 类似于nodejs中querystring模块中的parse,在nodejs中最好不要使用此方法,使用querystring.parse
 *
 * 注意 传入的 str 不要 decodeURIComponent
 */
const parseQuery = str => {
	if (!str) {
		return {};
	}
	const pairs = (str[0] === '?' ? str.substr(1) : str).split('&');
	const params = {};
	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i].split('=');
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	}
	return params;
};

export { buildQuery, parseQuery };
