
let data = {
	year: new Date().getFullYear(),
	htmlHead: {
		title: "我的家"
	}
}

export default {
	getData(){
		return data;
	},
	// setHtmlHead(options){
	// 	data.htmlHead = _.extend(data.htmlHead, options)
	// },
	setHtmlTitle(val){
		data.htmlHead.title = !!val ? val : data.htmlHead.title
	}
}
