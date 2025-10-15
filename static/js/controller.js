//	function get_time(){
//			$.ajax({
//				url:"/time",
//				timeout:10000,
//				success:function(data){
//					$("#time").html(data)
//				},
//				error:function(xhr, type, errorThrown){
//
//				}
//			});
//		}

		function get_c1_data(){
			$.ajax({
				url:"/c1",
				type:'GET',
				success:function(data){
					$(".num h1").eq(0).text(data.n1);
					$(".num h1").eq(1).text(data.n2);
					$(".num h1").eq(2).text(data.n3);
				},
				error:function(xhr, type, errorThrown){

				}
			});
		}
		
//		function get_china_map(){
//			$.ajax({
//				url:"/china_map",
//				type:'GET',
//				async : false,
//				success:function(data){
//
//					//分清是哪一个series
//					console.log(map_option.series[0])
//					map_option.series[0]['data']=data.data
//                    china_map.setOption(map_option)
//                },
//				error:function(xhr, type, errorThrown){
//
//				}
//			});
//		}

//		function get_l1_data(){
//			$.ajax({
//				url:"/pie_fanzui",
//				type:'GET',
//				success:function(data){
//                    console.log(data)
//					//分清是哪一个series
//					ec_left1_Option.legend[0].data = data.arrestType
//					ec_left1_Option.series[0].data = data.data
//					ec_left1.setOption(ec_left1_Option)
//				},
//				error:function(xhr, type, errorThrown){
//
//				}
//			});
//		}
//
//		function get_l2_data(){
//			$.ajax({
//				url:"/l2",
//				success:function(data){
//					//分清是哪一个series
//					ec_left2_Option.xAxis[0].data = data.day
//					ec_left2_Option.series[0].data = data.confirm_add
//					ec_left2_Option.series[1].data = data.suspect_add
//					ec_left2.setOption(ec_left2_Option)
//				},
//				error:function(xhr, type, errorThrown){
//
//				}
//			});
//		}

//调用一次
get_c1_data()
//get_china_map()
//get_time()
//get_l1_data()
//get_l2_data()
//循环调用，实时更新
//		setInterval(get_time,1000)
//		setInterval(get_cl_data,1000)