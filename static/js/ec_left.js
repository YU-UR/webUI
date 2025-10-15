//2023逮捕罪名分布，带边框效果的饼图
//var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'macarons'); 
var ec_left1 =echarts.init(document.getElementById("pie_fanzui"),'infographic');

const data1 = null
$.ajax({
	url: '/pie_fanzui',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.data1 = resp
	}
})
//console.log(window.datas)
//console.log(window.data1.data)
//console.log(window.datas.arrestType)

var ec_left1_Option = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: window.data1.arrestType,
//        ['卖淫嫖娼','经侦嫌疑','重点人口','刑贞重点','吸毒人口'],
        textStyle: {color: '#fff'}
    },
    
	label: {
	     normal: {
	          textStyle: {
	                color: 'red'  // 改变标示文字的颜色
	          }
	     }
	},
	color: ['#ffaa7f','#ff00ff','#ff0000','#55ff00','#ffff00','#0055ff'],
    series: [{
            name: '违法犯罪人员分析',
            type: 'pie',
            radius : '55%',
            center: ['58%', '48%'],
            data: window.data1.data,
//            [
//                {value:335, name:'卖淫嫖娼'},
//                {value:310, name:'经侦嫌疑'},
//                {value:234, name:'重点人口'},
//                {value:135, name:'刑贞重点'},
//                {value:1548, name:'吸毒人口'}
//            ],
          
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
    ]
};
ec_left1.setOption(ec_left1_Option);
//----------------------2023逮捕罪名分布end---------------
