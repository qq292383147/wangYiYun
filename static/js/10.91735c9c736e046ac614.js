webpackJsonp([10],{"3VRc":function(t,n){},"95wh":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7QTg"),s=e("gyMJ"),a={name:"findSwiper",data:function(){return{swiperList:[],swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}}}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide},methods:{_getFindInfo:function(){s.a.bannerSwiperFn().then(this.getFindInfoSuc)},getFindInfoSuc:function(t){200===t.status&&"OK"===t.statusText&&(t=t.data.banners,this.swiperList=t)}},mounted:function(){this._getFindInfo()}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner-container"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(n,i){return e("swiper-slide",{key:i},[e("router-link",{attrs:{to:"/song/?id="+n.targetId}},[e("img",{staticClass:"banner-img",attrs:{src:n.pic,alt:""}}),t._v(" "),e("span",{staticClass:"title",style:{background:n.titleColor}},[t._v(t._s(n.typeTitle))])])],1)}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var r=e("VU/8")(a,o,!1,function(t){e("3VRc")},"data-v-f0eefcb2",null).exports,c=e("Dd8w"),d=e.n(c),l=e("NYxO"),u=e("Ppka"),p={name:"findIcon",data:function(){return{findIcons:u.b}},components:{icon:e("j0X3").a},computed:{today:function(){return(new Date).getDate()}},mounted:function(){this.iniData()},methods:d()({iniData:function(){this.findIcons=Object(u.b)()},goPage:function(t){"personalFm"===t?this._getPersonalFm():this.$router.push(t)},startPlay:function(t){this.startPlayAll({list:t})},_getPersonalFm:function(){var t=this;s.a.personalFmFn().then(function(n){var e=n.data;if(200===e.code){var i=e.data;t.startPlay(i)}})}},Object(l.b)(["startPlayAll"]))},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container border-bottom"},t._l(t.findIcons,function(n,i){return e("icon",{key:i,attrs:{icons:n,bgcolor:!0},on:{goPage:function(e){return t.goPage(n.linkTo)}}},["每日推荐"===n.text?e("span",{staticClass:"today"},[t._v(t._s(t.today))]):t._e()])}),1)},staticRenderFns:[]};var f=e("VU/8")(p,v,!1,function(t){e("K1vk")},"data-v-08606811",null).exports,h=e("f5+r"),g=function(t,n){for(var e=t.slice(0),i=t.length,s=i-n,a=void 0,o=void 0;--i>s;)a=e[o=Math.floor((i+1)*Math.random())],e[o]=e[i],e[i]=a;return e.slice(s)},m={name:"songList",components:{imgCard:h.a},data:function(){return{songList:[]}},computed:d()({},Object(l.c)({loginState:"LOGIN_STATE"})),methods:{getSongListInfo:function(){var t=this;s.a.recSongListFn().then(function(n){var e=n.data;200===e.code&&(t.songList=g(e.playlists,6))}).catch(function(t){return console.log(t)})},loadGetSongListInfo:function(){var t=this;s.a.dateRecSongListFn().then(function(n){var e=n.data;if(200===e.code){var i=e.recommend;t.songList=g(i,6)}})}},activated:function(){var t=+localStorage.getItem("loginState");this.loginState||t?this.loadGetSongListInfo():this.getSongListInfo()}},w={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wrapper pd23"},[n("div",{staticClass:"title"},[n("div",{staticClass:"recommended"},[this._v("推荐歌单")]),this._v(" "),n("router-link",{staticClass:"square",attrs:{to:"recommend",tag:"div"}},[this._v("歌单广场")])],1),this._v(" "),n("div",{staticClass:"img-col"},this._l(this.songList,function(t,e){return n("img-card",{key:e,attrs:{imgUrl:t.picUrl||t.coverImgUrl,dec:t.name,playCount:t.playCount||t.playcount,albumId:t.id}})}),1)])},staticRenderFns:[]};var _=e("VU/8")(m,w,!1,function(t){e("hKpZ")},"data-v-53914a06",null).exports,y={name:"newDish",components:{imgCard:h.a},data:function(){return{dishList:[],newSongsList:[],type:"dish"}},methods:{_getDishListInfo:function(){var t=this;s.a.newDishFn().then(function(n){var e=n.data;if(200===e.code){var i=e.albums;t.dishList=t.getRandomArrayElements(i,3)}})},_getNewSongsInfo:function(){var t=this;s.a.newSongsFn().then(function(n){var e=n.data;if(200===e.code){var i=e.data;t.newSongsList=t.getRandomArrayElements(i,3)}})},moreNewDish:function(){this.$router.push("/moreNewDish")},moreNewSongs:function(){this.$router.push("/moreNewSongs")},getRandomArrayElements:function(t,n){for(var e=t.slice(0),i=t.length,s=i-n,a=void 0,o=void 0;--i>s;)a=e[o=Math.floor((i+1)*Math.random())],e[o]=e[i],e[i]=a;return e.slice(s)}},created:function(){this._getDishListInfo(),this._getNewSongsInfo()}},S={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper pd23"},[e("div",{staticClass:"title"},[e("div",{staticClass:"recommended"},[e("span",{class:{active:"dish"===t.type},on:{click:function(n){t.type="dish"}}},[t._v("新碟")]),t._v(" "),e("i",{staticStyle:{color:"#ddd"}},[t._v("|")]),t._v(" "),e("span",{class:{active:"newSong"===t.type},on:{click:function(n){t.type="newSong"}}},[t._v("新歌")])]),t._v(" "),e("div",{staticClass:"square"},[e("span",{directives:[{name:"show",rawName:"v-show",value:"dish"===t.type,expression:"type==='dish'"}],on:{click:function(n){return n.stopPropagation(),t.moreNewDish(n)}}},[t._v("更多新碟")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"newSong"===t.type,expression:"type==='newSong'"}],on:{click:function(n){return n.stopPropagation(),t.moreNewSongs(n)}}},[t._v("新歌推荐")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"dish"===t.type,expression:"type==='dish'"}],staticClass:"img-col"},t._l(t.dishList,function(t,n){return e("img-card",{key:n,attrs:{imgUrl:t.picUrl,dec:t.name,dishId:t.id}})}),1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"newSong"===t.type,expression:"type==='newSong'"}],staticClass:"img-col"},t._l(t.newSongsList,function(t,n){return e("img-card",{key:n,attrs:{imgUrl:t.album.blurPicUrl,dec:t.name,albumId:t.id}})}),1)])},staticRenderFns:[]};var b=e("VU/8")(y,S,!1,function(t){e("uKK9")},"data-v-25b96d48",null).exports,I={mixins:[e("8tjg").b],name:"findIndex",components:{swiper:r,icon:f,songList:_,newDish:b}},L={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"wrapper",staticClass:"container"},[n("swiper"),this._v(" "),n("icon"),this._v(" "),n("song-list"),this._v(" "),n("new-dish")],1)},staticRenderFns:[]};var C=e("VU/8")(I,L,!1,function(t){e("G+0h")},"data-v-7b9aee08",null);n.default=C.exports},"G+0h":function(t,n){},K1vk:function(t,n){},hKpZ:function(t,n){},uKK9:function(t,n){}});
//# sourceMappingURL=10.91735c9c736e046ac614.js.map