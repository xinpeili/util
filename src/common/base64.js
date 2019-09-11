const base64_encode = Buffer
	? str => {
		return Buffer.from(str).toString('base64');
	  }
	: str => {
		return btoa(str);
	  };

const base64_decode = Buffer
	? str => {
		return Buffer.from(str, 'base64').toString();
	  }
	: str => {
		return atob(str);
	  };

const safe_base64_encode = str => {
	return base64_encode(str)
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
};

const safe_base64_decode = str => {
	return base64_decode(str.replace(/-/g, '+').replace(/_/g, '/'));
};

export { base64_encode, base64_decode, safe_base64_encode, safe_base64_decode };
