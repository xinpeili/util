ts:
	cd src/broswer && tsc --strict -t ES2017 -m es2015 ws.ts 
	cd src/common && tsc --strict -t ES2017 -m es2015 asyncTask.ts
	air lint
		
