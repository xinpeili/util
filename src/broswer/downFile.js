// 兼容IE,Chrome,Firefox,Safari,注意 appendChild 这一步不能缺,否则Firefox不兼容

/**
 *
 *
 *  例子1:
 *  var blob = new Blob([res.data], {type: "application/vnd.ms-excel"}),
    fileName = '下载.xls';
    downFile(blob, fileName);

    例子2:

    fetch('/files/bin/http.xz').then(res=>res.blob()).then(res=>{console.log(res);downFile(res,"http.xz")})

 */

export default (blob, fileName) => {
	if (window.navigator.msSaveOrOpenBlob) {
		return navigator.msSaveBlob(blob, fileName);
	}
	const link = document.createElement('a');
	link.style.display = 'none';
	link.href = window.URL.createObjectURL(blob);
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	setTimeout(function() {
		document.body.removeChild(link);
		window.URL.revokeObjectURL(link.href);
	}, 200);
};
