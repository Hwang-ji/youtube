(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},50:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),p=a(0),h=function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;console.log(e),t(e)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(p.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(p.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){i()},children:Object(p.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})},_=a(7),m=a.n(_),j=function(e){var t=e.video;return Object(p.jsxs)("section",{className:m.a.detail,children:[Object(p.jsx)("iframe",{className:m.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{children:t.snippet.title}),Object(p.jsx)("h3",{children:t.snippet.channelTitle}),Object(p.jsx)("pre",{className:m.a.description,children:t.snippet.description})]})},b=a(3),v=a.n(b),x=function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(p.jsxs)("div",{className:v.a.video,children:[Object(p.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:v.a.metadata,children:[Object(p.jsx)("p",{className:v.a.title,children:a.title}),Object(p.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})},O=a(21),f=a.n(O),g=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(p.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(p.jsx)(x,{video:e,onVideoClick:a,display:n},e.id)}))})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1];return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:function(e){_(null),t.search(e).then((function(e){return s(e)}))}}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(j,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(g,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),I=a(9),S=a(22),C=a(23),P=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:26}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:26,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),J=a(24),R=new P(a.n(J).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyCaTJTMXOp02lzDPd9JPhh2P30SEJreGqQ"}}));s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{youtube:R})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[50,1,2]]]);
//# sourceMappingURL=main.c682d119.chunk.js.map