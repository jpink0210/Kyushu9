var gp = "http://maps.google.com/?q=";
var gg = 'http://www.qmo.tw/wp-content/uploads/2018/08/googlepic.jpg';
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
					{ time: "12:00",sth: ["[午餐]博多(Hakata)車站"],cost: 0, },
					{ time: "13:00",sth: ["搭地鐵到天神站，轉西鐵電車到西鐵二日市站（往大牟田）"],cost: 0, },
					{ time: "13:24",sth: ["二日市站太宅府（13:29到)"],cost: 2000, },
					{ time: "甜點",sth: ["天神經過買"],cost: 0, },
					{ time: "",sth: ["[晚餐]博多運河城"],cost: 0, },
					{ time: "",sth: ["[宵夜]中洲屋台"],cost: 0, },
				],
				plays: [
					{
						place: "博多車站",
						views:[
							{where: "牛腸鍋おおやま", ctn: "想一嚐福岡的地道料理的話，就可以試試位於博多DEITOS商場1樓的牛腸鍋おおやま了。" , link:"https://gojp.tw/2015-12-30-163/", cmmt:"中餐首選", img:"https://pic.pimg.tw/tloveq/1470058306-2542981132_n.png"},
							{where: "", ctn: "個人牛腸鍋為主，人數多的話也能直接依人數做加大，每個人多加1,380yen即可" , link:"https://tenjo.tw/hakatamotsunabeooyama/", cmmt:"圖片連結", img:"https://img.tenjo.tw/uploads/20181002152507_52.jpg"},
							{where: "達摩拉麵", ctn: "這個才是福岡人的排隊拉麵，一蘭一風堂什麼的，福岡人都沒再吃的拉，本地人都吃達摩" , link:"https://tw.bring-you.info/fukuoka-daruma-ramen", cmmt:"次選", img:"https://tw.bring-you.info/imgs/2018/04/fukuoka-ramen-19.jpg"},
							{where: "博多純情らーめんshinshin拉麵", ctn: "" , link:"https://ikachalife.com/33299", cmmt:"備案", img:"https://farm5.staticflickr.com/4757/39231165825_5d68d074b8_c.jpg"},
							{where: "博多の石畳tabelog3.58", ctn: "招牌就是巧克力蛋糕博多の石畳了!巧克力慕斯、巧克力海綿蛋糕、生奶油、巧克力粉，像階梯般的層層疊疊" , link:"", cmmt:"1700", img:"http://img.drshelly.tw/uploads/20180424175106_87.jpg"},
						]

					},
					{
						place: "太宰府天滿宮",
						views:[
							{where: "太宰府天滿宮表參道", ctn: "" , link:"", cmmt:"梅枝餅", img:"https://dg63mrbespfka.cloudfront.net/2017/07/sando1-430x265.jpg"},
							{where: "太宰府天滿宮", ctn: "" , link:"https://tw.bring-you.info/dazaifushi", cmmt:"散步行程", img:"https://tw.bring-you.info/imgs/2017/12/dazaifushi-16.jpg"},
							{where: "暖暮拉麵", ctn: "" , link:"", cmmt:"滷肉飯才是本體", img:"https://pic.pimg.tw/nikitarh/1516460678-3957683917_n.jpg"},
						]
					},
					{
						place: "博多 - 天神地下街",
						views:[
							{where: "RINGO 蘋果派", ctn: "連結地圖" , link:"http://maps.google.com/?q=日本〒810-0001 Fukuoka, Chūō-ku, Tenjin, 2-chōme−6, 2号229", cmmt:"400¥/per", img:"https://ringo-applepie.com/wp-content/themes/ringo/assets/img/background_product.jpg"},
							{where: "THE BAKE 起司塔", ctn: "在對面" , link:"", cmmt:"台灣有分店", img:"https://cheesetart.com/wp-content/uploads/2019/06/%E3%83%95%E3%82%99%E3%83%A9%E3%83%83%E3%82%AF%E3%83%98%E3%82%9A%E3%83%83%E3%83%8F%E3%82%9A%E3%83%BC.jpg"},
							{where: "鳴竹鯛燒本舖 鯛魚燒", ctn: "連結地圖" , link:"http://maps.google.com/?q=福岡県福岡市中央区天神2-9-101", cmmt:"10:00-23:00", img:"https://pic.pimg.tw/ayin13/1518830709-825556776_n.jpg"},
						]
					},
					{
						place: "博多 - 中洲屋台",
						views:[
							{where: "中洲屋台", ctn: "福岡博多天神的屋台，就類似於台灣夜市的小攤販一樣， 佇立在夜晚燈紅的街道上，擁有200家店舖營業，是許多福岡縣民或是觀光客夜晚覓食的好去處" , link:"https://zh.compathy.net/magazine/2017/07/05/fukuokatenjinyatai/", cmmt:"晚餐", img:"https://compathy-magazine-assets.compathy.net/uploads/2017/07/17417935940_e876f16f9b_z-640x427.jpg"},
							{where: "博多運河城", ctn: "Montbell" ,img:"https://dg63mrbespfka.cloudfront.net/2018/08/Fukuoka_Spot11-430x250.JPG", link:"免稅店 / 10-21", cmmt:""},
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
					{ time: "21:00",sth: ["回飯店泡溫泉	"],cost: "7-24 Douza-machi, 長崎, 長崎, 日本, 850-0841", },
					{ time: "21:30",sth: ["飯店免費拉麵宵夜	"],cost: 0, },
				],
				plays: [
					{
						place: "博多 - 早餐",
						views:[
							{where: "牛舌定食", ctn: "福岡必吃超值早餐" , link:"https://tw.bring-you.info/hakata-tanya", cmmt:"博多車站B1博多一番街", img:"https://tw.bring-you.info/imgs/2017/11/hakata-tanya-6.jpg"},
							{where: "日式生雞蛋拌飯", ctn: "〒812-0012 福岡県福岡市博多区博多駅中央街１−1" , link:"https://getlostfine.blogspot.com/2018/09/fukuokauchinotamago.html", cmmt:"我覺得很值得嘗試", img:"https://1.bp.blogspot.com/-9L--tpoXVIY/W6eOucFNj2I/AAAAAAAAh-0/8CfxxEbOBygpLNwYknmmvu-kYvjXeTCMgCLcBGAs/s400/20180714_110617.jpg"},
							{where: "むつか堂吐司專賣店", ctn: "連結地圖" , link:"http://maps.google.com/?q=福岡市中央区薬院２−１５–２", cmmt:"營業時間: 10:00〜20:00 公休日: 週日", img:"https://img.sakehero.com/uploads/20170318171418_68.jpg"},
						]
					},
					{
						place: "龍馬行程",
						views:[
						]
					},
					{
						place: "思案橋/觀光通站/築町站",
						views:[
							{where: "思案橋", ctn: "元祖吉宗茶碗蒸、思案橋拉麵、鶴茶庵土耳其飯這幾間長崎有名的餐廳都在這喔!" , link:"https://www.google.com/search?q=%E6%80%9D%E6%A1%88%E6%A9%8B", cmmt:"", img: gg},
							{where: "吉宗茶碗蒸", ctn: "日本第一好吃茶碗蒸" , link:"https://candicecity.com/35038/", cmmt:"(觀光通站)", img:"https://candicecity.com/wp-content/uploads/2019/02/PA211613.jpg"},
							{where: "土耳其飯ツル茶ん", ctn: "創立於1925年的「鶴茶庵」，是九州現存最老的喫茶西餐廳喔！其歷史不久後就要是間百年老店了。" , link:"https://tw.bring-you.info/nagasaki-tsuruchan-turkish-rice", cmmt:"龍馬土耳其飯！長崎新地中華街(築町站)", img:"https://tw.bring-you.info/imgs/2017/12/tsuruchan-turkish-rice-9.jpg"},
							
						]
					},
					{
						place: "JR長崎站",
						views:[
							{where: "購物中心 Amu Plaza", ctn: "各種長崎伴手禮、長崎海綿蛋糕老字號店鋪「福砂屋」、「松翁軒」、「文明堂」在這裡也都有設櫃。" , link:"https://www.google.com/search?q=購物中心+Amu+Plaza", cmmt:"必買", img: gg},
						]
					},
					{
						place: "大浦天主堂站/石橋站",
						views:[
							{where: "大浦天主堂", ctn: "這裡可以沿著大浦天主堂商店街一路上坡逛上大浦天主教堂，沿途有四海樓 強棒麵、岩崎本舗 角煮饅頭等長崎必吃美食，還有和泉屋、文明堂等長崎蛋糕名店。" , link:"", cmmt:"", img:"https://1.bp.blogspot.com/-Q_W2DPFSp_M/WVRytcO8gRI/AAAAAAAABRI/pPwZxpCx3tY9saC1Ce9Qjc7LOTbZoLp8ACLcBGAs/s1600/035A2294-1.JPG"},
							{where: "哥拉巴公園", ctn: " 大浦天主教堂旁的哥拉巴公園，有日本最古老的木造洋館，這是 19 世紀蘇格蘭商人哥拉巴在長崎居住時建造的住宅，來到這裡，可以從山丘上眺望長崎港灣美景。" , link:"", cmmt:"", img:"https://ikidane-nippon.com/upload/spot/216/6373.jpg"},
							{where: "四海樓", ctn: "" , link:"https://venuslin.tw/shikairou/", cmmt:"大浦天主堂站", img:"https://img.venuslin.tw/uploads/20180406124444_10.jpg"},
						]
					},
					{
						place: "稻佐山夜景",
						views:[
							{where: "", ctn: " 標高 333 公尺的稻佐山公園，有著與神戶、函館並稱日本三大夜景的稻佐山展望台，2012 年與摩納哥、香港被選為世界新三或許飄兒更愛繁華城市夜景多一些吧!" , link:"https://www.google.com/search?q=稻佐山夜景", cmmt:"", img:"https://img.banbi.tw/20180308234201_14.jpg"},
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
					{ time: "",sth: ["晚餐後行程未定","PARCO百貨是 中繼點 在鶴屋百貨邊，上下是上下通町商店街"],cost: 0,},
					{ time: "",sth: ["飯店"],cost: "GR 飯店水道町日本〒860-0802 Kumamoto, Chuo Ward, Chuogai, 2−22",},
				],
				plays: [
					{
						place: "柳川",
						views:[
							{where: "本吉屋 蒸籠鰻魚飯", ctn: "因為是人氣名店，不排隊就吃不到，所以建議10:30一開門時就來" , link:"", cmmt:"", img:"https://resources.matcha-jp.com/resize/720x2000/2017/08/15-33574.jpeg"},
							{where: "万榮堂", ctn: "如果因為本吉屋大排長龍，不想排隊的話，可以試試新開的「万榮堂」吃鰻魚飯，不僅不用排隊，還可以最佳俯看視角欣賞柳川。" , link:"", cmmt:"", img:"https://resources.matcha-jp.com/resize/720x2000/2017/08/15-33586.jpeg"},
							{where: "柳川遊船", ctn: "9:30-16:30 (每隔半小時一次運行)" , link:"", cmmt:"70 min", img:"https://2.bp.blogspot.com/-tAYYVsHOi4I/WwZv9U6yyYI/AAAAAAAAKPY/VzM9ufkKRns0lEqI5D2Lmmq4DjqO9E5HQCLcBGAs/s640/DSC_0757.JPG"},
						]
					},
					{
						place: "熊本城",
						views:[
							{where: "熊本城散步路線", ctn: "須戶口門散步至 → 櫻之馬場城彩苑 → 上階梯到熊本城城牆外圍 → 二之丸廣場欣賞天守閣 → 沿著城牆參觀修復中的各個櫓 → 加藤神社 → 不走回頭路，沿著下坡往東十八間櫓方向回熊本市中心" , link:"", cmmt:"", img:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/kivcgopy0qvac6cpdx3f/%E7%86%8A%E6%9C%AC%E5%9F%8E%E9%98%BF%E8%98%87%E5%B1%B1%E7%86%8A%E6%9C%AC%E7%86%8A%E9%83%A8%E9%95%B7%E8%BE%A6%E5%85%AC%E5%AE%A4%E7%A7%81%E4%BA%BA%E5%9C%98%E4%B8%80%E6%97%A5%E9%81%8A.jpg"},
							{where: "城彩苑", ctn: "熊本城西南側的「城彩苑」，這裡的「櫻花小路」是由 20 幾家商店組成，整個街道充滿日本老街的傳統氛圍，店舖販售著熊本當地的特產美食與伴手禮，想吃什麼買什麼來這就都不會失望。" , link:"", cmmt:"一定要吃到的うにコロッケ(海膽可樂餅)，是在「天草海食」買的，裡面滿滿的新鮮海膽，吃來非常濃郁!", img:"http://www.sakuranobaba-johsaien.jp/wp-content/uploads/2015/09/sakura.png"},
							{where: "鶴屋百貨", ctn: "熊本部長辦公室 / 東館1F，可以買到熊本拉花咖啡，一定要買熱的才有拉花喔!" , link:"", cmmt:"(6/20 15:00 有表演) / 蜂楽饅頭 / PARCO百貨" , img:""},
							{where: "上通町商店街", ctn: "" , link: gp + "上通町商店街", cmmt:"蜂楽饅頭 / 菅乃屋", img: gg},
							{where: "下通町商店街", ctn: "" , link:gp + "下通町商店街", cmmt:"馬桜 / 菅乃屋 / 31冰淇淋", img: gg},
							{where: "勝烈亭豬排", ctn: "" , link:gp+"熊本市中央区新市街 8-18", cmmt:"", img:"https://img.gojp.tw/pixnet/0a14fa14f799cf612ce87743b0bd8644.jpg"},
							{where: "黑亭拉麵(熊本拉麵)", ctn: "" , link:"http://maps.google.com/?q=〒860-0051 熊本県熊本市西区二本木２丁目１−23", cmmt:"其實有點遠,不太能去", img:"https://margaret.tw/wp-content/uploads/nEO_IMG_DSC05383.jpg"},
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
					{ time: "17:00",sth: ["前往吃飯地點","福岡博多串燒推介","https://tw.seeing-japan.com/7132"],cost: 3000,},
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
