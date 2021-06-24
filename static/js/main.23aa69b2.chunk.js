(this["webpackJsonpmsu-movies-react-redux"]=this["webpackJsonpmsu-movies-react-redux"]||[]).push([[0],{24:function(e,t,n){e.exports={position:"Loader_position__2kpVN",lds_ellipsis:"Loader_lds_ellipsis__mYKGY","lds-ellipsis1":"Loader_lds-ellipsis1__Yznjw","lds-ellipsis2":"Loader_lds-ellipsis2__1xLeC","lds-ellipsis3":"Loader_lds-ellipsis3__19TEU"}},34:function(e,t,n){},35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(20),r=n.n(s),a=(n(34),n(19)),o=(n(35),n(12)),l=n(3),u=n(6),d=n.n(u),j=n(13),m=n(11),b=n(4),v=n(16),p=n(28),O=n(29),g=function(){function e(){Object(p.a)(this,e)}return Object(O.a)(e,null,[{key:"getMoviesList",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,fetch("https://yts.mx/api/v2/list_movies.json?query_term=".concat(t,"&page=").concat(n));case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c,i,s,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t),c="https://yts.mx/api/v2/movie_suggestions.json?movie_id=".concat(t),e.next=4,Promise.all([fetch(n),fetch(c)]);case 4:if(i=e.sent,e.prev=5,s=Object(m.a)(i,2),r=s[0],a=s[1],!r.ok||!a.ok){e.next=9;break}return e.abrupt("return",Promise.all([r.json(),a.json()]));case 9:return e.abrupt("return");case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=Object(v.b)("movies/getMoviesList",function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,c=t.page,i=void 0===c?1:c,e.next=3,g.getMoviesList(n,i);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(v.b)("movies/getMoviesDetails",function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getMovieDetails(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(v.c)({name:"movies",initialState:{list:[],currentPage:1,totalPages:0,searchedMovie:"",isLoading:!1,curretMovieDetails:{},curretMovieSuggestions:[]},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.isLoading=!0})).addCase(x.fulfilled,(function(e,t){e.list=t.payload.data.movies,e.searchedMovie=t.meta.arg.title,e.totalPages=t.payload.data.movie_count,e.currentPage=t.meta.arg.page,e.isLoading=!1})).addCase(f.pending,(function(){})).addCase(f.fulfilled,(function(e,t){var n=Object(m.a)(t.payload,2),c=n[0],i=n[1];e.curretMovieDetails=c.data.movie,e.curretMovieSuggestions=i.data.movies}))}}).reducer,_=n(0),N=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],i=t[1],s=Object(b.b)(),r=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(x({title:n,page:1}));case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"webflow-style-input",children:[Object(_.jsx)("input",{onChange:function(e){i(e.target.value)},className:"",type:"text",placeholder:"Movie"}),Object(_.jsx)("button",{type:"submit",onClick:r,children:"\u2192"})]})},y=n(24),M=n.n(y),S=function(){return Object(_.jsx)("div",{className:M.a.position,children:Object(_.jsxs)("div",{className:M.a.lds_ellipsis,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})})},k=n.p+"static/media/empty.817176e3.png",w=function(e){var t=e.preloader,n=e.img,i=Object(c.useState)(!1),s=Object(m.a)(i,2),r=s[0],a=s[1],o=new Image;return o.src=n,o.onload=function(){a(!0)},r?Object(_.jsx)("img",{src:n,alt:n}):Object(_.jsx)("img",{src:t,alt:n})},D=function(e){var t=e.genre,n=e.title,c=e.year,i=e.rating,s=e.bg,r=e.id,a=null===t||void 0===t?void 0:t.slice(0,3),l=n.length>20?n.slice(0,16)+"...":n;return Object(_.jsxs)("div",{className:"card",children:[Object(_.jsx)("h2",{className:"card-title",children:l}),Object(_.jsx)(w,{preloader:k,img:s}),Object(_.jsxs)("div",{className:"card-desc",children:[Object(_.jsx)("h2",{children:n}),"Rating - ",i,Object(_.jsx)("br",{}),a?a.map((function(e){return Object(_.jsx)("div",{children:e},e)})):"",Object(_.jsx)("br",{}),c,Object(_.jsx)("div",{className:"card-link",children:Object(_.jsx)(o.b,{to:"/movie/".concat(r),children:"More"})})]})]})},C=function(){var e=Object(b.c)((function(e){return e.reducer.list})),t=Object(b.c)((function(e){return e.reducer.isLoading})),n=Object(b.b)();return Object(c.useEffect)((function(){n(x({title:"",page:1}))}),[]),Object(_.jsx)("div",{className:"cards-inner",children:Object(_.jsxs)("div",{className:"cards",children:[t?Object(_.jsx)(S,{}):null,e?e.map((function(e){return Object(_.jsx)(D,{genre:e.genres,title:e.title,year:e.year,rating:e.rating,bg:e.large_cover_image,id:e.id},e.id)})):"Empty result"]})})},L=n(14),P=function(){var e,t,n=Object(b.b)(),c=Object(b.c)((function(e){return e.reducer.searchedMovie})),i=Object(b.c)((function(e){return e.reducer.currentPage})),s=Object(b.c)((function(e){return Math.ceil(e.reducer.totalPages/20)}));s<=10?(e=1,t=s):i<=6?(e=1,t=10):i+4>=s?(e=s-9,t=s):(e=i-5,t=i+4);var r=Object(L.a)(Array(t+1-e).keys()).map((function(t){return e+t})).map((function(e){return Object(_.jsx)("li",{children:Object(_.jsx)("span",{onClick:function(){return function(e){n(x({title:c,page:e}))}(e)},className:i===e?"active":"",children:e})},e)}));return Object(_.jsxs)("ul",{className:"pagination",children:[Object(_.jsx)("li",{children:Object(_.jsx)("span",{onClick:function(){n(x({title:c,page:1}))},children:"To start"})}),Object(_.jsx)("li",{children:Object(_.jsx)("span",{onClick:function(){if(1===i||i<1)return!1;n(x({title:c,page:i-1}))},children:"Prev"})}),r,Object(_.jsx)("li",{children:Object(_.jsx)("span",{onClick:function(){if(i>s||i===s)return!1;n(x({title:c,page:i+1}))},children:"Next"})}),Object(_.jsx)("li",{children:Object(_.jsx)("span",{onClick:function(){n(x({title:c,page:s}))},children:"To end"})})]})},T=n(9),I=n.n(T),J=function(e){var t=e.id,n=localStorage.getItem("comments")||[],i=n.length>0?JSON.parse(n):[],s=Object(c.useState)(i),r=Object(m.a)(s,2),a=r[0],o=r[1],l=Object(c.useState)(""),u=Object(m.a)(l,2),d=u[0],j=u[1],b=a.find((function(e){return e.id==t}))||{id:t,comments:[]};return Object(_.jsxs)("div",{className:"comments",children:[Object(_.jsxs)("div",{className:"webflow-style-input",children:[Object(_.jsx)("input",{onChange:function(e){j(e.target.value)},type:"text"}),Object(_.jsx)("button",{className:"send-comment-button",onClick:function(){return function(e){var n={id:t,comments:[].concat(Object(L.a)(b.comments),[{id:Math.floor(1e3*Math.random()),text:e,date:(new Date).toJSON().slice(0,10).replace(/-/g,"/")}])},c=a.filter((function(e){return e.id!=t}));o([].concat(Object(L.a)(c),[n])),localStorage.setItem("comments",JSON.stringify([].concat(Object(L.a)(c),[n]))),j("")}(d)},children:"Send"})]}),b?b.comments.map((function(e){return Object(_.jsxs)("div",{className:"comment",children:[Object(_.jsxs)("div",{className:"comment-header",children:[Object(_.jsxs)("div",{children:[" ",e.date," "]}),Object(_.jsx)("div",{onClick:function(){return function(e){var n=a.filter((function(e){return e.id!=t}))||{id:t,comments:[]},c=b.comments.filter((function(t){return t.id!=e}));o([].concat(Object(L.a)(n),[{id:t,comments:c}])),localStorage.setItem("comments",JSON.stringify([].concat(Object(L.a)(n),[{id:t,comments:c}])))}(e.id)},className:"close-span",children:"X"})," "]}),"comment #",e.id,Object(_.jsx)("div",{children:e.text})]},e+Math.random())})):"No comments"]})},E=function(e){var t=e.movieSuggestions;return Object(_.jsx)("div",{className:I.a.movieSuggestions,children:t.map((function(e){return Object(_.jsx)(F,{title:e.title,medium_cover_image:e.medium_cover_image,id:e.id},e.id)}))})},F=function(e){var t=e.title,n=e.medium_cover_image,c=e.id;return console.log(Object(l.e)().pathname.split("/")),Object(_.jsx)("div",{className:I.a.movieSuggestionsCard,children:Object(_.jsxs)(o.b,{to:"/movie/".concat(c),children:[Object(_.jsx)("img",{src:n,alt:""}),Object(_.jsx)("div",{children:t})]})})},R=Object(l.f)((function(e){var t=e.match.params.id,n=Object(b.b)(),i=Object(b.c)((function(e){return e.reducer.curretMovieDetails})),s=Object(b.c)((function(e){return e.reducer.curretMovieSuggestions}));console.log(s),Object(c.useEffect)((function(){n(f(t))}),[t]);var r=i.background_image,a=i.date_uploaded,o=i.description_full,l=i.download_count,u=i.genres,d=i.large_cover_image,j=i.rating,m=i.runtime,v=i.title,p=i.year;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:I.a.wrapper,style:{backgroundImage:"url(".concat(r,")")},children:Object(_.jsxs)("div",{className:I.a.container,children:[Object(_.jsx)("div",{className:I.a.img,children:Object(_.jsx)(w,{img:d,preloader:k})}),Object(_.jsxs)("div",{className:I.a.movieInfo,children:[Object(_.jsx)("div",{className:I.a.title,children:v}),Object(_.jsx)("div",{children:p}),Object(_.jsx)("div",{className:I.a.genresWrapper,children:u?u.map((function(e){return Object(_.jsxs)("span",{children:[e,"/"]},e)})):""}),Object(_.jsxs)("div",{className:I.a.rating,children:[Object(_.jsx)("img",{src:"https://yts.mx/assets/images/website/logo-imdb.svg",alt:"imdb"}),Object(_.jsxs)("span",{children:["\u2605 ",j]})]})]}),Object(_.jsx)(E,{movieSuggestions:s})]})}),Object(_.jsxs)("div",{className:I.a.synopsis,children:[Object(_.jsx)("h3",{children:"Synopsis"}),Object(_.jsx)("span",{children:o}),Object(_.jsxs)("div",{className:I.a.movieTechData,children:[Object(_.jsxs)("div",{children:["Download count: ",l]}),Object(_.jsxs)("div",{children:["Runtime: ",m]}),Object(_.jsxs)("div",{children:["Uploaded date: ",a]})]})]}),Object(_.jsx)("div",{children:Object(_.jsx)(J,{id:t})})]})}));var U=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(N,{}),Object(_.jsx)(C,{}),Object(_.jsx)(P,{})]})},W=function(e){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"head",children:Object(_.jsx)(o.b,{className:"header-link",to:"/",children:"Movies"})}),Object(_.jsx)(l.a,{exact:!0,path:"/",component:U}),Object(_.jsx)(l.a,{exact:!0,path:"/Movies-yts-react-redux",component:U}),Object(_.jsx)(l.a,{exact:!0,path:"/movie/:id?",component:function(){return Object(_.jsx)(R,Object(a.a)({},e))}})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))},z=Object(v.a)({reducer:{reducer:h}});r.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(o.a,{children:Object(_.jsx)(b.a,{store:z,children:Object(_.jsx)(W,{})})})}),document.getElementById("root")),q()},9:function(e,t,n){e.exports={wrapper:"MovieDetails_wrapper__3Rz4h",container:"MovieDetails_container__2drJg",img:"MovieDetails_img__3TkMj",movieInfo:"MovieDetails_movieInfo__9UUjZ",title:"MovieDetails_title__3-mTs",rating:"MovieDetails_rating__3To5o",movieSuggestions:"MovieDetails_movieSuggestions__rWASM",movieSuggestionsCard:"MovieDetails_movieSuggestionsCard__1qlKt",synopsis:"MovieDetails_synopsis__NVqz5",movieTechData:"MovieDetails_movieTechData__3gE48",genresWrapper:"MovieDetails_genresWrapper__ReDrJ"}}},[[47,1,2]]]);
//# sourceMappingURL=main.23aa69b2.chunk.js.map