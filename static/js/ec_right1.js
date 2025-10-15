//违法犯罪人员年龄分析占比，带边框效果的饼图
var pie_age =echarts.init(document.getElementById("pie_age"),'infographic');

const data2 = null
$.ajax({
	url: '/pie_age',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.data2 = resp
	}
})

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: window.data2.crimeType,
//        ['18-30','31-40','41-50','51-60','65岁以上','未标明'],
        textStyle: {color: '#fff'}
    },
	color: ['#5500ff','#ff55ff','#ff0000'],
    series: [
        {
            name:'违法犯罪人员年龄分布',
            type:'pie',
            radius: ['35%', '60%'],
            center: ['45%', '33%'],
            avoidLabelOverlap: false,
            // padAngle: 20,
            itemStyle: {
                borderRadius: 10,
				borderColor: '#00005e',
				borderWidth: 3
            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: window.data2.data,
//            [
//                {value:335, name:'18-30'},
//                {value:310, name:'31-40'},
//                {value:234, name:'41-50'},
//                {value:135, name:'51-60'},
//                {value:135, name:'65岁以上'},
//                {value:1548, name:'未标明'}
//            ]
        }
    ]
};
pie_age.setOption(option);
//----------------------违法犯罪人员年龄分析占比end---------------