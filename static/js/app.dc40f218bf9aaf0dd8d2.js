webpackJsonp([1],{"+1Y2":function(t,e){},"+j2Z":function(t,e,n){"use strict";var s=n("USCS"),i=n.n(s);e.a={name:"fullpage",data:function(){return{scrollSpeed:1.33,quizIndex:0,answers:[{showA:!0},{showA:!0},{showA:!0},{showA:!0},{showA:!0},{showA:!0}],ajaxTest:{},canvasWidth:108,canvasHeight:140,canvasSprite:{name:new Image,spriteWidth:864,spriteHeight:280,rows:2,cols:8,curFrame:0,srcX:0,srcY:0},interValDrawElder:0}},computed:{srcWidth:function(){return this.canvasSprite.spriteWidth/this.canvasSprite.cols},srcHeight:function(){return this.canvasSprite.spriteHeight/this.canvasSprite.rows}},created:function(){this.canvasSprite.name.src=i.a,this.getData()},mounted:function(){console.log(this.interValDrawElder),0==this.interValDrawElder&&(this.interValDrawElder=setInterval(this.drawElder,125),console.log(this.interValDrawElder)),console.log(this.ajaxTest)},methods:{showScrollLeft:function(t){},nextQuiz:function(){this.quizIndex++},choseB:function(t){this.quizIndex++,this.answers[t].showA=!1,console.log(this.answers[t].showA)},touchMove:function(t){console.log(t)},drawElder:function(){var t=this.canvasSprite,e=document.getElementById("elder"),n=e.getContext("2d");t.curFrame=++t.curFrame%t.cols,t.srcX=t.curFrame*this.srcWidth,n.clearRect(0,0,this.srcWidth,this.srcHeight),n.drawImage(t.name,t.srcX,t.srcY,this.srcWidth,this.srcHeight,0,0,this.srcWidth,this.srcHeight)},getData:function(){var t=this;axios.get("https://spreadsheets.google.com/feeds/list/1loEISDptaHu1MqFcPmN7zW6aSgAr6tbkypQ2APZDzsk/1/public/values?alt=json").then(function(e){t.ajaxTest=e.data.feed.entry,console.log(t.ajaxTest),console.log(e)})}}}},"/89l":function(t,e){},"/B3r":function(t,e){},"/R4e":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demand"},[n("h2",[t._v("需求大解密")])])}],a={render:s,staticRenderFns:i};e.a=a},"2AE9":function(t,e,n){"use strict";function s(t){n("UcGi")}var i=n("6h/q"),a=n("IcuJ"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-350bc39c",null);e.a=c.exports},"2SIm":function(t,e,n){"use strict";function s(t){n("IGLi")}var i=n("FE2k"),a=n("RsTz"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-e85836b8",null);e.a=c.exports},"6h/q":function(t,e,n){"use strict";e.a={name:"logo"}},"6j/b":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("elderHome_header"),t._v(" "),n("elderHome_fullpage")],1)},i=[],a={render:s,staticRenderFns:i};e.a=a},"8UT5":function(t,e,n){"use strict";var s=n("RGoi"),i=n.n(s);e.a={props:["href"],methods:{lineShare:function(){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+i.a.detectPlatform()+"] ["+document.querySelector("title").innerHTML+"] [line share]"}),i.a.detectMob()?window.location.href="//line.me/R/msg/text/?"+document.querySelector("title").innerHTML+"%0D%0A%0D%0A"+document.querySelector('meta[property="og:description"]').content+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}}}},AqtT:function(t,e,n){"use strict";var s=n("Dd8w"),i=n.n(s),a=n("NYxO"),o=n("2AE9"),r=n("zLmn"),c=n.n(r),l=n("opYC"),u=n.n(l),d=n("LpwP");e.a={name:"elderHome_header",components:{Logo:o.a,FBComment:d.a},data:function(){return{udnLogo:c.a,commentIcon:u.a,menu_isOpen:!1,comment_isOpen:!1}},computed:i()({},Object(a.c)(["quizIndex"])),methods:i()({},Object(a.b)(["handle_lookDemand"]),{menuOpen:function(){this.comment_isOpen,this.comment_isOpen=!1,this.menu_isOpen?this.menu_isOpen=!1:this.menu_isOpen=!0},commentOpen:function(){this.comment_isOpen?this.comment_isOpen=!1:this.comment_isOpen=!0,this.menu_isOpen,this.menu_isOpen=!1},menuClose:function(){this.menu_isOpen=!1,this.handle_lookDemand(),console.log("good")}}),mounted:function(){console.log(this)}}},"Bw/H":function(t,e,n){"use strict";e.a={name:"elderHome_demand",data:function(){return{}}}},CByZ:function(t,e,n){"use strict";e.a={props:["href"]}},EXDq:function(t,e,n){"use strict";function s(t){n("i2w/")}var i=n("+j2Z"),a=n("LLMk"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-10652f6b",null);e.a=c.exports},FDcA:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-block"},[n("div",{staticClass:"fb-like-block"},[n("div",{staticClass:"fb-like",attrs:{"data-href":t.href,"data-layout":"button_count","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}})]),t._v(" "),n("div",{staticClass:"line-block",on:{click:t.lineShare}},[n("img",{staticClass:"line-share",attrs:{src:"//media.line.me/img/button/zh-hant/84x20.png",width:"92",height:"22",alt:"LINE分享給朋友"}})])])},i=[],a={render:s,staticRenderFns:i};e.a=a},FE2k:function(t,e,n){"use strict";var s=n("USCS"),i=n.n(s);e.a={name:"fullpage",data:function(){return{scrollSpeed:1.33,quizIndex:0,quizs:[{ask:"家裡是否有高效能主機",optionA:"有",optionB:"沒有"},{ask:"謝謝的日文是哪一個？",optionA:"ありがとう",optionB:"あるがと"},{ask:"誰がこのすばの女神",optionA:"アークア",optionB:"恵ちゃん"},{ask:"我在雙週會表演的曲子是？",optionA:"Wings~ you are the hero",optionB:"Mother"},{ask:"像柯文哲的吉他演奏家是？",optionA:"中川砂人",optionB:"岡崎倫典"},{ask:"董事長叫什麼名字",optionA:"Donkey",optionB:"Duncan"}],answers:[{showA:!0,answerA:{suggestion:"那要不要再換一台呢？",link:"https://shopping.udn.com/mall/Cc1a00.do",promotion:"詳細請點我吧"},answerB:{suggestion:"那要不要買一台呢？",link:"https://shopping.udn.com/mall/Cc1a00.do",promotion:"詳細請點我吧"}},{showA:!0,answerA:{suggestion:"恭喜你答對了",link:"https://zh.wikibooks.org/wiki/Category:%E6%97%A5%E8%AA%9E",promotion:"點我了解進修資訊"},answerB:{suggestion:"可惜答錯囉！",link:"https://zh.wikibooks.org/wiki/Category:%E4%BA%94%E5%8D%81%E9%9F%B3",promotion:"點我學習吧！"}},{showA:!0,answerA:{suggestion:"答對囉，雖然女神都是女神經病",link:"https://shopping.udn.com/mall/Cc1a00.do",promotion:"點我看神經病經典錄"},answerB:{suggestion:"那要不要買一台呢？",link:"https://shopping.udn.com/mall/Cc1a00.do",promotion:"點我學學怎麼エクスプロージョン"}},{showA:!0,answerA:{suggestion:"WoW 我講那麼小聲也聽得到",link:"https://www.youtube.com/watch?v=yIp481buXzU",promotion:"聽聽看原作者的專輯吧"},answerB:{suggestion:"可惜答錯囉",link:"https://www.youtube.com/watch?v=sn17Up7TzyA",promotion:"雖然答錯了但也聽聽這首Mother吧"}},{showA:!0,answerA:{suggestion:"可惜答錯囉",link:"http://a2.att.hudong.com/80/46/20300000009075131424469180850_s.jpg",promotion:"點我看看照片"},answerB:{suggestion:"恭喜答對囉",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIvq79gJb3GY_8yuJbfd0Zc6f-o4G0-b9QdiO3oyDRygB-MRT",promotion:"點我看看是不是真的像"}},{showA:!0,answerA:{suggestion:"答錯囉你要再來一次新人訓練",link:"http://a3.att.hudong.com/13/71/01300000065995121218711701774_s.jpg",promotion:"這才是Donkey!"},answerB:{suggestion:"恭喜你答對了",link:"http://img.appledaily.com.tw/images/ReNews/20141209/640_b4443698ce9edcf93755f08d656daf88.jpg",promotion:"阿不就好棒棒"}}],canvasWidth:108,canvasHeight:140,canvasSprite:{name:new Image,spriteWidth:864,spriteHeight:280,rows:2,cols:8,curFrame:0,srcX:0,srcY:0},interValDrawElder:0}},computed:{srcWidth:function(){return this.canvasSprite.spriteWidth/this.canvasSprite.cols},srcHeight:function(){return this.canvasSprite.spriteHeight/this.canvasSprite.rows}},mounted:function(){0==this.interValDrawElder&&(this.interValDrawElder=setInterval(this.drawElder,125),console.log(this.interValDrawElder)),this.canvasSprite.name.src=i.a},methods:{showScrollLeft:function(t){},nextQuiz:function(){this.quizIndex++},choseB:function(t){this.quizIndex++,this.answers[t].showA=!1},touchMove:function(t){console.log(t)},drawElder:function(){var t=this.canvasSprite,e=document.getElementById("elder"),n=e.getContext("2d");t.curFrame=++t.curFrame%t.cols,t.srcX=t.curFrame*this.srcWidth,n.clearRect(0,0,this.srcWidth,this.srcHeight),n.drawImage(t.name,t.srcX,t.srcY,this.srcWidth,this.srcHeight,0,0,this.srcWidth,this.srcHeight)}}}},GG6q:function(t,e){},HCTz:function(t,e,n){"use strict";var s=n("Cj7G");n.n(s);e.a={name:"HeadBar",props:["BgColor"],components:{Logo:s.Logo},data:function(){return{top:0,isOpen:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){window.pageYOffset<window.innerHeight/2?this.top=0:window.innerWidth<=1024?this.top=4:this.top=6},handleBurger:function(t){0==this.isOpen?this.isOpen=!0:this.isOpen=!1}}}},IGLi:function(t,e){},IcnI:function(t,e,n){"use strict";var s=n("7+uW"),i=n("NYxO"),a=n("UjVw"),o=n("mUbh"),r=n("ukYY");s.a.use(i.a);var c={quizIndex:0},l=new i.a.Store({state:c,getters:a,actions:o,mutations:r});e.a=l},Icor:function(t,e){},IcuJ:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-block",staticStyle:{"margin-left":"0"}},[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://udn.com/news/index",target:"_blank"}},[n("img",{attrs:{src:"https://udn.com/upf/newmedia/image/udn-logo.svg",title:"聯合新聞網"}})])]),t._v(" "),n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://udn.com/upf/newmedia/udn_newmedia/",target:"_blank"}},[n("img",{attrs:{src:"https://udn.com/upf/newmedia/image/nmd-logo.svg",title:"新媒體中心"}})])])])}],a={render:s,staticRenderFns:i};e.a=a},LLMk:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scrollPage"}},[n("canvas",{attrs:{id:"elder",width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("div",{staticClass:"scrollContainer",style:{transition:t.scrollSpeed+"s",transform:"translate("+-100*t.quizIndex+"%)"}},[n("div",{staticClass:"scane",on:{scroll:function(e){t.showScrollLeft(e)}}},[n("div",{staticClass:"banner"}),t._v(" "),n("div",{staticClass:"abstract"}),t._v(" "),n("div",{staticClass:"quizIntro"},[n("h2",{attrs:{id:"start"},on:{click:t.nextQuiz}},[t._v("Start Game")])])]),t._v(" "),n("div",{staticClass:"quizSection"},t._l(t.ajaxTest,function(e,s){return n("div",{staticClass:"quiz"},[n("h2",[t._v(t._s(e.gsx$question.$t))]),t._v(" "),n("div",{staticClass:"optionBlock"},[n("p",{staticClass:"optionA",on:{click:t.nextQuiz}},[t._v(t._s(e.gsx$optiona.$t))]),t._v(" "),n("p",{staticClass:"optionB",on:{click:function(e){t.choseB(s)}}},[t._v(t._s(e.gsx$optionb.$t))])])])})),t._v(" "),n("div",{staticClass:"answerSection",on:{scroll:function(e){t.showScrollLeft(e)}}},t._l(t.ajaxTest,function(e,s){return n("div",{staticClass:"answer"},[t.answers[s].showA?n("div",{staticClass:"answerA"},[n("h2",[t._v(t._s(e.gsx$ansasuggest.$t))]),t._v(" "),n("a",{attrs:{href:e.gsx$ansalink.$t}},[t._v(t._s(e.gsx$ansapromotion.$t))])]):n("div",{staticClass:"answerB"},[n("h2",[t._v(t._s(e.gsx$ansbsuggest.$t))]),t._v(" "),n("a",{attrs:{href:e.gsx$ansbsuggest.$t}},[t._v(t._s(e.gsx$ansbpromotion.$t))])])])}))])])},i=[],a={render:s,staticRenderFns:i};e.a=a},LMaH:function(t,e,n){"use strict";function s(t){n("GG6q")}var i=n("Bw/H"),a=n("/R4e"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-78200790",null);e.a=c.exports},LpwP:function(t,e,n){"use strict";function s(t){n("/B3r")}var i=n("CByZ"),a=n("R/GV"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-16bfd8c1",null);e.a=c.exports},M93x:function(t,e,n){"use strict";function s(t){n("nzyu")}var i=n("xJD8"),a=n("6j/b"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-d28bef04",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("M93x"),a=n("IcnI");s.a.config.productionTip=!1,new s.a({el:"#app",store:a.a,template:"<App/>",components:{App:i.a}})},"R/GV":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fb-comment-block"},[n("div",{staticClass:"fb-comments",attrs:{"data-href":t.href,"data-numposts":"5","data-width":"100%","data-order-by":"reverse_time"}})])},i=[],a={render:s,staticRenderFns:i};e.a=a},RsTz:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scrollPage"}},[n("canvas",{attrs:{id:"elder",width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("div",{staticClass:"scrollContainer",style:{transition:t.scrollSpeed+"s",transform:"translate("+-100*t.quizIndex+"%)"}},[n("div",{staticClass:"scane",on:{scroll:function(e){t.showScrollLeft(e)}}},[n("div",{staticClass:"banner"}),t._v(" "),n("div",{staticClass:"abstract"}),t._v(" "),n("div",{staticClass:"quizIntro"},[n("h2",{attrs:{id:"start"},on:{click:t.nextQuiz}},[t._v("Start Game")])])]),t._v(" "),n("div",{staticClass:"quizSection"},t._l(t.quizs,function(e,s){return n("div",{staticClass:"quiz"},[n("h2",[t._v(t._s(e.ask))]),t._v(" "),n("div",{staticClass:"optionBlock"},[n("p",{staticClass:"optionA",on:{click:t.nextQuiz}},[t._v(t._s(e.optionA))]),t._v(" "),n("p",{staticClass:"optionB",on:{click:function(e){t.choseB(s)}}},[t._v(t._s(e.optionB))])])])})),t._v(" "),n("div",{staticClass:"answerSection",on:{scroll:function(e){t.showScrollLeft(e)}}},t._l(t.answers,function(e){return n("div",{staticClass:"answer"},[e.showA?n("div",{staticClass:"answerA"},[n("h2",[t._v(t._s(e.answerA.suggestion))]),t._v(" "),n("a",{attrs:{href:e.answerA.link}},[t._v(t._s(e.answerA.promotion))])]):n("div",{staticClass:"answerB"},[n("h2",[t._v(t._s(e.answerB.suggestion))]),t._v(" "),n("a",{attrs:{href:e.answerB.link}},[t._v(t._s(e.answerB.promotion))])])])}))])])},i=[],a={render:s,staticRenderFns:i};e.a=a},USCS:function(t,e){t.exports="data:image/png;base64,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"},UcGi:function(t,e){},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"quizIndex",function(){return s});var s=function(t){return t.quizIndex}},VoUy:function(t,e){},WA93:function(t,e,n){"use strict";var s=n("Dd8w"),i=n.n(s),a=n("NYxO"),o=n("USCS"),r=(n.n(o),n("fenB")),c=n("LMaH");e.a={name:"elderHome_fullpage",components:{Share:r.a,elderHome_demand:c.a},data:function(){return{scrollSpeed:.7,showStep:0,showIntro:0,abstractX:100,quizs:[{answered:!1,answering:!1,question:{ask:"起床1",optionA:"賴床一下好了",optionB:"掌握身體健康數據不偷懶ღ"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"臥床輔具"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放輔具"}}},{answered:!1,answering:!1,question:{ask:"如廁2",optionA:"趕快解放完，來去吃早餐",optionB:"昨晚聽醫生建議吃「這個」，果真一夜好眠！"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"痔瘡藥"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放好舒爽"}}},{answered:!1,answering:!1,question:{ask:"如廁3",optionA:"一起床就吃！即時補充能量ღ",optionB:"切個水果當早餐好了～。"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"痔瘡藥"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放好舒爽"}}},{answered:!1,answering:!1,question:{ask:"如廁4",optionA:"好懶得動，能曬曬太陽就好了",optionB:"努力維持運動習慣保持活力"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"痔瘡藥"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放好舒爽"}}},{answered:!1,answering:!1,question:{ask:"如廁5",optionA:"閱讀助抗老！來看個報ღ",optionB:"能站就不坐，利用看電視時間活動筋骨。"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"痔瘡藥"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放好舒爽"}}},{answered:!1,answering:!1,question:{ask:"如廁6",optionA:"上週洗澡差點滑跤，怕怕的不想洗",optionB:"涼涼的天泡澡真舒服。"},answer:{showA:!0,answerA:{article:"情作病？來通理，會可象竟讀樓國可大千。還臺上開業但臺出業立人的！給之得無可。必不製是相養人：到不許舉四公門感共出一紀位英。益直用灣收員；大共經全度推意兒特！兩麼復事、電下提之帶；聽道多坡的，寫國定朋男我很明以毛做意過燈品故寶解觀天慢？到道石也屋自客速那持亞然經的化腦月的！意了告投坡利好致大……樹克日做專把成年個星明個北，色房不！用加細再物立人情？當香表沒道又度：高來苦面市法家樣好層視個老好生國重動會護頭。之心共？才物話父子流家……我作美。",link:"http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=C_001_047_001&dc_cargxuid_0=U010066018",product:"痔瘡藥"},answerB:{article:"進畫實的媽我之設龍卻，行急一皮不；下且國。參教李的叫麼公登正來是進月到影始……完水紀說光方家的次全盡子的廣子，院多表師都苦有元……開至明得、本血頭醫來……去也但己師：孩製顧知；來比研打亞事們冷學遊心們地能的天應系著個空也一它國知了的坡，主花樓地家十！要開呢線視光專證。不後定起這。電子發海己以中人可，推府一球坡家素指知看。大奇力媽點，中但背理著取中沒個關、樹的中非傳同部商文何外位香。個你業……以據為得委離許，讓一故候原小緊士內一文進質被張任主得明觀全活快為財告這外早文兩天上一的遊西日組言法的足合望好西快？不民在政華。說輕清：後景什是陽水：城星的作我萬金底共在先小點身？時然那飯力，個求簡科？是強市他和精力適獎中山化為非果斯。集童陽政？",link:"http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=999909074gCBwJ5kzCc&kdid=NC02",product:"解放好舒爽"}}}]}},computed:i()({},Object(a.c)(["quizIndex"])),methods:i()({},Object(a.b)(["handle_quizIndex"]),{showScrollLeft:function(t){var e=window.innerWidth;t.target.scrollLeft>.7*e&&(this.showIntro=1,this.abstractX=0)},nextQuiz:function(t){this.handle_quizIndex(),this.showStep=1,this.quizIndex<13?(this.quizs[t].answering=!0,t>0&&(this.quizs[t-1].answered=!0,this.quizs[t-1].answering=!1)):this.showStep=0},choseA:function(t){this.handle_quizIndex()},choseB:function(t){this.handle_quizIndex(),this.quizs[t].answer.showA=!1},gottaQuiz:function(t){switch(t){case 0:this.quizIndex=1;break;case 1:this.quizIndex=3;break;case 2:this.quizIndex=5;break;case 3:this.quizIndex=7;break;case 4:this.quizIndex=9;break;case 5:this.quizIndex=11}},touchMove:function(t){console.log(t)},handleMouseWheel:function(t){var e=window.innerWidth;t.deltaY>3&&t.deltaX<5?t.srcElement.parentElement.scrollLeft+=e/10:t.deltaY<-3&&t.deltaX<5&&(t.srcElement.parentElement.scrollLeft-=e/10)}}),mounted:function(){console.log(this)},beforeUpdate:function(){},updated:function(){console.log(this.quizIndex)}}},fenB:function(t,e,n){"use strict";function s(t){n("+1Y2")}var i=n("8UT5"),a=n("FDcA"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-a3b37b2e",null);e.a=c.exports},"i2w/":function(t,e){},kJO1:function(t,e,n){"use strict";function s(t){n("/89l")}var i=n("WA93"),a=n("rJEI"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-4a895da0",null);e.a=c.exports},kjwj:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{top:t.top+"px",backgroundColor:t.BgColor},attrs:{id:"head-bar"}},[t._m(0),t._v(" "),n("div",{class:{transformToNone:t.isOpen},attrs:{id:"hbutton-contain"}},[t._t("default"),t._v(" "),n("div",{staticClass:"hidden-lg",attrs:{id:"logo-contain"}},[n("Logo")],1)],2),t._v(" "),n("div",{staticClass:"hidden-lg",attrs:{id:"hbutton"}},[n("div",{class:{open:t.isOpen},attrs:{id:"nav-icon"},on:{click:function(e){t.handleBurger()}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"icon"}},[n("a",{attrs:{href:"."}},[n("img",{attrs:{src:"https://udn.com/upf/newmedia/image/udn.png"}})])])}],a={render:s,staticRenderFns:i};e.a=a},mUbh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"handle_quizIndex",function(){return s}),n.d(e,"handle_lookDemand",function(){return i});var s=function(t){return(0,t.commit)("handle_quizIndex")},i=function(t){return(0,t.commit)("handle_lookDemand")}},nzyu:function(t,e){},opYC:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNOSAxMUg3VjloMnYyem00IDBoLTJWOWgydjJ6bTQgMGgtMlY5aDJ2MnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"},rJEI:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scrollPage"}},[n("div",{staticClass:"scrollContainer",style:{transition:t.scrollSpeed+"s",transform:"translateX("+-100*t.quizIndex+"%)"}},[n("div",{staticClass:"scane",on:{scroll:t.showScrollLeft,mousewheel:function(e){e.stopPropagation(),t.handleMouseWheel(e)}}},[t._m(0),t._v(" "),n("div",{staticClass:"abstract"},[n("p",{style:{transform:"translate("+t.abstractX+"%, 0)"}},[t._v("\n\t\t\t\t\t據統計，每年「三個老人一個跌」，輕則受傷恐懼、畫地限縮活動空間，加速退化，重則從此失能，需要家人照顧一輩子。打造適合高齡居住的大人宅，成為迎接高齡社會關鍵。\t\t\t\t\t\t\t\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"forShare",style:{opacity:t.showIntro}},[n("Share",{attrs:{href:"../../index.html"}})],1),t._v(" "),n("div",{attrs:{id:"start"},on:{"~click":function(e){t.nextQuiz(0)}}},[n("span",[t._v("開始遊戲")])])])]),t._v(" "),t._l(t.quizs,function(e,s){return n("div",{staticClass:"quizSection"},[n("div",{staticClass:"question"},[n("h2",[t._v(t._s(e.question.ask))]),t._v(" "),n("div",{staticClass:"optionBlock"},[n("p",{staticClass:"optionA",on:{"~click":function(e){t.choseA(s)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.question.optionA)+"\n\t\t\t\t\t\t"),n("span",{staticClass:"lampLine"})]),t._v(" "),n("p",{staticClass:"optionB",on:{"~click":function(e){t.choseB(s)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.question.optionB)+"\n\t\t\t\t\t\t"),n("span",{staticClass:"lampLine"})])])]),t._v(" "),n("div",{staticClass:"answer"},[e.answer.showA?n("div",{staticClass:"answerPage"},[n("h2",[t._v("結果一")]),t._v(" "),n("p",{staticClass:"answer_article"},[t._v(t._s(e.answer.answerA.article))]),t._v(" "),n("a",{staticClass:"sell",attrs:{href:e.answer.answerA.link,target:"_blank"}},[n("p",[t._v(t._s(e.answer.answerA.product))])]),t._v(" "),n("p",{staticClass:"toNext",on:{"~click":function(e){t.nextQuiz(s+1)}}},[t._v("下一題")])]):n("div",{staticClass:"answerPage"},[n("h2",[t._v("結果二")]),t._v(" "),n("p",{staticClass:"answer_article"},[t._v(t._s(e.answer.answerB.article))]),t._v(" "),n("a",{staticClass:"sell",attrs:{href:e.answer.answerB.link,target:"_blank"}},[n("p",[t._v(t._s(e.answer.answerB.product))])]),t._v(" "),n("p",{staticClass:"toNext",on:{"~click":function(e){t.nextQuiz(s+1)}}},[t._v("下一題")])])])])}),t._v(" "),n("div",{staticClass:"quizCount",style:{transition:t.scrollSpeed+"s",transform:"translate("+100*t.quizIndex+"%)",opacity:t.showStep}},t._l(t.quizs,function(t,e){return n("span",{class:{answered:t.answered,answering:t.answering}})})),t._v(" "),n("elderHome_demand")],2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("h1",[t._v("準備好與你一起變老")]),t._v(" "),n("p",[t._v("打造安全的家 長輩樂活、家人快活")])])}],a={render:s,staticRenderFns:i};e.a=a},rn8M:function(t,e,n){"use strict";function s(t){n("Icor")}var i=n("AqtT"),a=n("x2b4"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-760840d6",null);e.a=c.exports},teIl:function(t,e,n){"use strict";function s(t){n("VoUy")}var i=n("HCTz"),a=n("kjwj"),o=n("VU/8"),r=s,c=o(i.a,a.a,!1,r,"data-v-596e2fe4",null);e.a=c.exports},ukYY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"handle_quizIndex",function(){return s}),n.d(e,"handle_lookDemand",function(){return i});var s=function(t){t.quizIndex++},i=function(t){t.quizIndex=13}},x2b4:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"./index.html"}},[n("img",{attrs:{src:t.udnLogo,alt:"聯合報",title:"聯合報"}})])]),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("div",{staticClass:"menu-btn hidden-lg",class:{menuIcon_isOpen:t.menu_isOpen},on:{click:t.menuOpen}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("div",{staticClass:"comment-btn",class:{comment_Open:t.comment_isOpen},on:{click:t.commentOpen}},[n("img",{attrs:{src:t.commentIcon,title:"comment"}})]),t._v(" "),n("nav",{staticClass:"menuContainer",class:{itemContainer_isOpen:t.menu_isOpen}},[n("ul",[t._m(0),t._v(" "),n("li",[n("p",[n("a",{on:{click:t.menuClose}},[t._v("需求解密")])])])]),t._v(" "),n("div",{staticClass:"menu_logo hidden-lg hidden-md"},[n("Logo")],1)]),t._v(" "),n("div",{staticClass:"commentContainer",class:{itemContainer_isOpen:t.comment_isOpen}},[n("FBComment",{attrs:{href:"https://udn.com/upf/newmedia/2017_data/farewell/index.html"}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[n("a",{attrs:{href:"./index"}},[t._v("再玩一次")])])])}],a={render:s,staticRenderFns:i};e.a=a},xJD8:function(t,e,n){"use strict";var s=n("Cj7G"),i=(n.n(s),n("teIl")),a=n("2SIm"),o=n("EXDq"),r=n("rn8M"),c=n("kJO1");e.a={name:"app",components:{Indicator:s.Indicator,ContentContainer:s.ContentContainer,Quote:s.Quote,Editor:s.Editor,Relate:s.Relate,FBComment:s.FBComment,Share:s.Share,Logo:s.Logo,Foot:s.Foot,HeadBar:i.a,FullPage:a.a,test:o.a,elderHome_header:r.a,elderHome_fullpage:c.a}}},zLmn:function(t,e,n){t.exports=n.p+"static/img/udn-logo_black.8104f64.png"}},["NHnr"]);
//# sourceMappingURL=app.dc40f218bf9aaf0dd8d2.js.map