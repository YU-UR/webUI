var ec_left2 = echarts.init(document.getElementById("scatterplot"),'infographic');
const data5 = null
$.ajax({
	url: '/scatterplot',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.data5 = resp
	}
})
console.log(window.data5.g)
 console.log(window.data5.h)
 console.log(window.data5.w)
 console.log(window.data5.r)
 console.log(window.data5.v)

const dataBJ = window.data5.g;
// const dataBJ =[
// 	[2015, 0.07],
// 	[2016, 0.02],
// 	[2017, 0.08],
// 	[2018, 0.09],
// 	[2019, 0.03],
// 	[2020, 0.02],	
// ];
// // [
//   [1, 55],
//   [2, 25],
//   [3, 56],
//   [4, 33],
// ];
 const dataSH = window.data5.h;
// [
//   [1, 91],
//   [2, 65],
//   [3, 83],
//   [4, 109],
// ];
 const dataGD = window.data5.w
// [
//   [1, 100],
//   [2, 60],
//   [3, 85],
//   [4, 10],
// ];
 const dataJS = window.data5.r
// [
//   [1, 91],
//   [2, 65],
//   [3, 83],
//   [4, 109],
// ];
 const dataZJ = window.data5.v
// [
//   [1, 91],
//   [2, 65],
//   [3, 83],
//   [4, 109],
// ];
const schema = [
  { name: 'date', index: 0, text: '年' },
  { name: 'FZL', index: 1, text: '犯罪率' },
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
var ec_left2_Option = {
  color: ['#dd4444', '#fec42c', '#80F1BE','#55aaff', '#00ff00'],
  legend: {
    top: 10,
    data: ['北京','上海','广东','江苏','浙江'],
    textStyle: {
      fontSize: 10,
	  color: '#fff'
    }
  },
  grid: {
    left: '10%',
    right: 150,
    top: '18%',
    bottom: '10%'
  },
  tooltip: {
    backgroundColor: 'rgba(170, 255, 255, 0.7)',
	axisPointer: {
	  type: 'shadow'
	},
	textStyle : {
	        color: '#ff0000',
	},
    formatter: function (param) {
      var value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + param.seriesName + ' ' + value[0] + '年'
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
    }
  },
  xAxis: {
    type: 'value',
    name: '年份',
    nameGap: 16,
    nameTextStyle: {
      fontSize: 16,
	  color:'#ffffff',
    },
    // max: 31,
	min: 2015,
    splitLine: {
      show: true
    },
	// scale:true,
	// min:26000,
	axisLabel: {
	color: "#ffffff" //刻度线标签颜色
	},
  },
  yAxis: {
    type: 'value',
    name: '犯罪率',
    nameLocation: 'end',
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16,
	  color:'#ffffff',
    },
    splitLine: {
      show: false
    },
	// scale:true,
	// min:26000,
	axisLabel: {
	color: "#ffffff" //刻度线标签颜色
	},
  },
  series: [
    {
      name: '北京',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataBJ
    },
     {
       name: '上海',
       type: 'scatter',
       itemStyle: itemStyle,
       data: dataSH
     },
     {
       name: '广东',
       type: 'scatter',
       itemStyle: itemStyle,
       data: dataGD
     },
     {
       name: '江苏',
       type: 'scatter',
       itemStyle: itemStyle,
       data: dataJS
     },
     {
       name: '浙江',
       type: 'scatter',
       itemStyle: itemStyle,
       data: dataZJ
     },
  ]
};
ec_left2.setOption(ec_left2_Option)