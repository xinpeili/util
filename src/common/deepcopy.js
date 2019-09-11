// 对象深拷贝,同时对于Date,Regexp,Map,Set等其他类型可以拷贝,但注意并不一定是深拷贝

function deepClone(obj) {
	var _out = new obj.constructor();
	var getType = function(n) {
		return Object.prototype.toString.call(n).slice(8, -1);
	};
	for (var _key in obj) {
		if (obj.hasOwnProperty(_key)) {
			_out[_key] =
				getType(obj[_key]) === 'Object' || getType(obj[_key]) === 'Array' ? deepClone(obj[_key]) : obj[_key];
		}
	}
	return _out;
}

export default deepClone;
