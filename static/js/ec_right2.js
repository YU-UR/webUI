 //=========青年刑事犯罪年度变化=======================
var ec_right2 =echarts.init(document.getElementById("bar_data"),'infographic');

const data3 = null
$.ajax({
	url: '/bar_data',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.data3 = resp
	}
})
//console.log(window.data3.year)
//console.log(window.data3.a)
//console.log(window.data3.b)
//console.log(window.data3.c)

var ec_right2_option  = {
  tooltip: {
    trigger: 'axis',
    backgroundColor : 'rgba(0, 255, 255, 0.7)',
    axisPointer: {
      type: 'shadow'
    },
    textStyle : {
            color: '#aa0000',
    }
  },

  legend: {
    textStyle: {color: '#fff'},
	orient: 'vertical',
	// x: 'right',
	top: '0%',
	left: '0%',
    left: 'right',
    },
//  grid: {
//    left: '3%',
//    right: '4%',
//    bottom: '0%',
////    containLabel: true
//  },
  grid: {
      x:0,
      y:0,
      x2:0,
      y2:0
  },
  xAxis: [
    {
        type: 'category',
        data: window.data3.year,
//      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
	    axisLabel: {
			color: "#ffffff" //刻度线标签颜色
		},
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: { textStyle: { color: '#fff' } },
      scale:true,
      min:26000,
	  axisLabel: {
	  color: "#7FFF00" //刻度线标签颜色
	  },
    }
  ],
dataZoom: [{  // 缩放
    show: false, // 是否展示
    type: 'slider', // 滑动条型数据区域缩放组件提供了数据缩略图显示
    startValue: 0, // 开始索引
    endValue: 6 // 结束索引
    }, {
              /*
                  平移：在坐标系中滑动拖拽进行数据区域平移。
                  缩放：
                      PC端：鼠标在坐标系范围内滚轮滚动（MAC触控板类同）
                      移动端：在移动端触屏上，支持两指滑动缩放。
              */
    type: 'inside'
}],
  series: [
    {
		name: '<18',
		type: 'bar',
		textStyle: {
				color: '#fff'
			},
		emphasis: {
			focus: 'series'
		},
		data: window.data3.a,
		color:'#ff0000',
//      [320, 332, 301, 334, 390, 330, 320]
		markLine: {
		  lineStyle: {
		    type: 'dashed',
			color:'#ffff00',
		  },
		  data: [[{ type: 'min' }, { type: 'max' }]]
		},	
    },
    {
      name: '18-25',
      type: 'bar',
      data: window.data3.b,
	  color:'#00ffff',
//      [862, 518, 964, 026, 679, 600, 700],
      emphasis: {
        focus: 'series'
      },
	  itemStyle: {
	  	normal: {
	  		// borderRadius: 10,
			borderRadius: [10,10,0,0],
	  		// color:'rgba(255, 85, 255, 0.2)'
	  	}
	  },
      // markLine: {
      //   lineStyle: {
      //     type: 'dashed'
      //   },
      //   data: [[{ type: 'max' }, { type: 'min' }]]
      // }
    },
//     {
//      name: '>25',
//      type: 'bar',
//      emphasis: {
//        focus: 'series'
//      },
//      data: window.data3.c,
////      [320, 332, 301, 334, 390, 330, 320]
//    }
  ]
};

ec_right2.setOption(ec_right2_option)
//=========青年刑事犯罪年度变化=======================

