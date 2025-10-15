//中国地图开始
var china_map = echarts.init(document.getElementById('china_map'), 'infographic');
//var mydata = [{'name':'上海','value':318},{'name':'云南','value':162}];

//
const datas = null
$.ajax({
	url: '/china_map',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.datas = resp
	}

})

//console.log(window.datas.data)


var map_option = {
	//backgroundColor: '#FFFFFF',
	title: {
		text: '2020年犯罪人口来源',
		textStyle: {
			color: '#fff'
		},
		subtext: '单位：万人',
		x: 'center'
	},
	tooltip: {
		trigger: 'item'
	},
	visualMap: {
		show: true,
		x: 'left',
		y: 'bottom',
		textStyle:{
			fontSize: 13,
			color: '#fff'
		},
		// layoutCenter:['30%','30%'],
		splitList: [{
				start: 800,
				end: 1000
			},
			{
				start: 600,
				end: 800
			}, {
				start: 400,
				end: 600
			},
			{
				start: 200,
				end: 400
			}, {
				start: 0,
				end: 200
			},
		],
		color: ['#ff0000', '#ff00ff', '#ffff00', '#aaff7f', '#55ffff']
		//			'#ff0',
	},
	series: [{
		name: '犯罪人口来源',
		type: 'map',
		map: 'china',
		roam: true,
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false
			}
		},
		data: window.datas.data
		//			console.log(window.datas)
		//			data:[{'name':'上海','value': 56.7},{'name':'云南','value': 90.987}]
	}]
};
china_map.setOption(map_option);
//中国地图结束