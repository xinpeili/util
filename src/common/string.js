// 一行代码实现一个简单的模板字符串替换

// render("hello {{name}} age {{age}} ",{name:'su',age:18})

export const render = (tpl, context) => {
	return tpl.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
};
