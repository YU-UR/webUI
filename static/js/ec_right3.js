 //=========全国刑事犯罪年度曲线=======================
var ec_right3 =echarts.init(document.getElementById("line_time"),'macarons');

const data4 = null
$.ajax({
	url: '/line_time',
	type: 'GET',
	async: false,
	success: function(resp) {
		window.data4 = resp
	}
})
console.log(window.data4.y)
console.log(window.data4.q)

var ec_right3_option = {
        // 给echarts图设置背景色
        // backgroundColor: '#FBFBFB',  // -----------> // 给echarts图设置背景色
        color: ['#ff0000'],
        tooltip: {
            trigger: 'axis'
        },

		grid:{
                    x:40,
                    y:30,
                    x2:5,
                    y2:20

                },
        calculable: true,
        xAxis: [
			{
             type: 'category',
             data: window.data4.y,
//             ['2018', '2019', '2020'],
             axisLabel: {
			 color: "#55ffff" //刻度线标签颜色
			}
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
			color: "#7FFF00" //刻度线标签颜色
			},
			scale:true,
            min:140
        }],
        series: [{
            name: '人次',
            type: 'line',
            data: window.data4.q,
//            [800, 300, 500, 800, 300, 600],

        }]
    };

ec_right3.setOption(ec_right3_option);
