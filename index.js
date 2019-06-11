

var app = new Vue({
	el: "#app",
	data: {
		chosen: 0,
		isDetail: true,
		all: [
			{
				date: "6/18",
				wk: "（二）",
				timetails: [
					{ time: "04:30",sth: ["機場接送"],cost: 0, },
					{ time: "05:00",sth: ["報到掛行李","第一行廈seven領wifi機","吃早餐"],cost: 0, },
					{ time: "06:45",sth: ["起飛"],cost: 0, },
					{ time: "10:05",sth: ["抵達入境領行李"],cost: 0, },
					{ time: "11:00",sth: ["入境大廳左側JTB櫃檯買太宅府悠遊卡", "用剛剛買的悠遊卡搭巴士或接駁車到國內線搭地鐵2站到博多"],cost: 1340, },
					{ time: "11:30",sth: ["走路到博多Nest飯店放行李"],cost: "2 Chome-11-27 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011日本", },
					{ time: "12:00",sth: ["焦貴說到博多車站吃肯德基"],cost: 700, },
					{ time: "13:00",sth: ["搭地鐵到天神站，轉西鐵電車到西鐵二日市站（往大牟田）"],cost: 0, },
					{ time: "13:24",sth: ["二日市站太宅府（13:29到)"],cost: 2000, },
					{ time: "晚餐",sth: ["回程：天神屋台晚餐"],cost: 0, },
					{ time: "",sth: ["晚餐後行程未定"],cost: 0, },
				],
				plays: [
					{
						place: "博多車站",
						views:[
							{where: "天神地下街", ctn: "10:00～20:00" , link:"https://gojp.tw/2015-12-30-163/", cmmt:"中餐在這好了", img:"https://img.gojp.tw/pixnet/abbb0162157c1df4220e9c9c9da72a5d.jpg"},
						]
					},
					{
						place: "太宰府天滿宮",
						views:[
							{where: "太宰府天滿宮表參道", ctn: "" , link:"", cmmt:"就跟淺草一樣/梅枝餅", img:"https://dg63mrbespfka.cloudfront.net/2017/07/sando1-430x265.jpg"},
							{where: "太宰府天滿宮", ctn: "" , link:"https://tw.bring-you.info/dazaifushi", cmmt:"花不多時間吧", img:"https://tw.bring-you.info/imgs/2017/12/dazaifushi-16.jpg"},
							{where: "暖暮拉麵", ctn: "" , link:"", cmmt:"我們有吃過了", img:"https://pic.pimg.tw/nikitarh/1516460678-3957683917_n.jpg"},
						]
					},
					{
						place: "博多-天神屋台",
						views:[
							{where: "中洲屋台", ctn: "福岡博多天神的屋台，就類似於台灣夜市的小攤販一樣， 佇立在夜晚燈紅的街道上，擁有200家店舖營業，是許多福岡縣民或是觀光客夜晚覓食的好去處" , link:"https://zh.compathy.net/magazine/2017/07/05/fukuokatenjinyatai/", cmmt:"晚餐", img:"https://compathy-magazine-assets.compathy.net/uploads/2017/07/17417935940_e876f16f9b_z-640x427.jpg"},
							{where: "博多運河城", ctn: "免稅店/10-21" ,img:"https://dg63mrbespfka.cloudfront.net/2018/08/Fukuoka_Spot11-430x250.JPG", link:"", cmmt:""},
						]
					},
				],
			},
			{
				date: "6/19",
				wk: "（三）",
				timetails: [
					{ time: "08:00",sth: ["早餐"],cost: 700, },
					{ time: "09:00",sth: ["時代租車博多車站博多口店取車"],cost: 9130, },
					{ time: "11:00",sth: ["JR長崎車站購買一日電車券"],cost: 500, },
					{ time: "11:30",sth: ["Dormy Inn飯店停車，寄行李"],cost: "7-24 Douza-machi, 長崎, 長崎, 日本, 850-0841	250", },
					{ time: "12:00",sth: ["長崎新地中華街吃午餐"],cost: 1200, },
					{ time: "13:00",sth: ["焦貴的阪本龍馬行程"],cost: 0, },
					{ time: "18:00",sth: ["四海樓晚餐", "https://venuslin.tw/shikairou/"],cost: 1300, },
					{ time: "19:30",sth: ["飯店開車到稻佐山夜景"],cost: 25, },
					{ time: "21:00",sth: ["回飯店泡溫泉	"],cost: 0, },
					{ time: "21:30",sth: ["飯店免費拉麵宵夜	"],cost: 0, },
				],
				plays: [
					{
						place: "",
						views:[
							{where: "", ctn: "" , link:"", cmmt:"", img:""},
						]
					},
				],

			},
			{
				date: "6/20",
				wk: "（四）",
				timetails: [
					{ time: "08:00",sth: ["早餐"],cost: 700,},
					{ time: "09:00",sth: ["取車出發往柳川免費停車場 ","No. 1 Free Parking (Tachibana Street) Mitsuhashimachi Fujiyoshi 536-7 (MAPCODE: 69 875 543*27)"],cost: 0,},
					{ time: "11:00",sth: ["柳川觀光案內短程游船10分鐘(option)","https://matcha-jp.com/tw/4888	100"],cost: 0,},
					{ time: "11:30",sth: ["午餐鰻魚飯 ","https://matcha-jp.com/tw/4888?page=2	"],cost: 2500,},
					{ time: "12:00",sth: ["出發往熊本水稻町飯店 GR飯店 水道町 "],cost: "日本〒860-0802 Kumamoto, Chuo Ward, Chuogai, 2−22",},
					{ time: "13:00",sth: ["停車寄行李	"],cost: 262.5,},
					{ time: "13:30",sth: ["走路15分鐘熊本城	","城采苑，熊本熊辦公室	"],cost: 0,},
					{ time: "18:00",sth: ["晚餐吃豬排飯 ","http://gtchengintpep.pixnet.net/blog/post/221534610-%E6%9C%89%E4%B8%80%E7%A8%AE%E5%AF%A6%E5%8A%9B%E5%8F%AB%22%E5%BF%85%E5%90%83%22%E6%97%A5%E6%9C%AC%E7%86%8A%E6%9C%AC%E3%80%90%E9%B9%BF%E5%85%92%E5%B3%B6%E5%85%AD%E7%99%BD%E9%BB%91	1800"],cost: 0,},
					{ time: "",sth: ["晚餐後行程未定"],cost: 0,},
				],
				plays: [
					{
						place: "",
						views:[
							{where: "", ctn: "" , link:"", cmmt:"", img:""},
						]
					},
				],

			},

			{
				date: "6/21",
				wk: "（五）",
				timetails: [
					{ time: "08:00",sth: ["早餐"],cost: 0,},
					{ time: "09:00",sth: ["出發往由布院Mapcode:","269 358 434*71"],cost: 0,},
					{ time: "11:00",sth: ["搶購有名的瑞士捲蛋糕？B Speak(店旁邊有6個停車場）","可以把車停在金鱗湖附近比較便宜Mapcode: ","269 359 527*28","簡易逛街地圖 ","https://gojp.tw/2017-01-30-237/","午餐推薦：蕎麥麵","http://niny.tw/2016-10-21-258/"],cost: 0,},
					{ time: "14:00",sth: ["往別府地獄出發  ","大分県別府市鉄輪５５９−１","七個地獄中挑三個","https://candicecity.com/31830/","看看明礬湯之里有沒有要去 ","https://gooshuo.tw/article/782"],cost: 0,},
					{ time: "18:00",sth: ["晚餐地獄蒸鉄輪工坊 map code:", "46 523 435*17"],cost: 0,},
					{ time: "19:00",sth: ["往飯店出發"],cost: "879-1305, 杵築市, 山香町倉成3003番",},
				],
				plays: [
					{
						place: "",
						views:[
							{where: "", ctn: "" , link:"", cmmt:"", img:""},
						]
					},
				],
			},
			{
				date: "6/22",
				wk: "（六）",
				timetails: [
					{ time: "08:00",sth: ["早餐"],cost: 700,},
					{ time: "09:00",sth: ["出發往唐戶市場 ","Map Code︰16-743-384	"],cost: 0,},
					{ time: "10:30",sth: ["市場旁邊停車場第一個小時免費，之後30分鐘/120日元	30"],cost: 0,},
					{ time: "",sth: ["品嚐新鮮壽司"],cost: 1000,},
					{ time: "11:30",sth: ["開車回司門港 九州鐵紀念館西停車場"],cost: 250,},
					{ time: "15:00",sth: ["開車到民宿"],cost: 0,},
					{ time: "16:30",sth: ["放好行李後加油還車"],cost: 1500,},
					{ time: "17:00",sth: ["前往吃飯地點"],cost: 3000,},
				],
				plays: [
					{
						place: "",
						views:[
							{where: "", ctn: "" , link:"", cmmt:"", img:""},
						]
					},
				],

			},
		],
	},
	mounted: function() {

	},	
	methods: {
		changeDay: function(day){
			if(day == this.chosen){
				this.isDetail = !this.isDetail;
			}else{
				this.isDetail = true;
				this.chosen = day;
			}
		}
	},
	computed:{
	}


})
