(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b47fe7e"],{"07ac":function(e,t,i){var n=i("23e7"),c=i("6f53").values;n({target:"Object",stat:!0},{values:function(e){return c(e)}})},"0e30":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),c={class:"detailer"},a={class:"text"},o=["href"];function l(e,t,i,l,u,s){var v=Object(n["D"])("contents");return Object(n["w"])(),Object(n["h"])("div",c,[Object(n["i"])("div",null,[Object(n["l"])(v,{movie:u.movie},null,8,["movie"])]),Object(n["i"])("div",a,[Object(n["i"])("h1",null,Object(n["G"])(u.movie.filmName),1),Object(n["i"])("h3",null,"评分:"+Object(n["G"])(u.movie.score),1),Object(n["i"])("h5",null,"类型:"+Object(n["G"])(u.movie.typeV),1),Object(n["i"])("p",null,"导演:"+Object(n["G"])(u.movie.director),1),Object(n["i"])("p",null,"主演:"+Object(n["G"])(u.movie.actV),1),Object(n["i"])("p",null,"时长:"+Object(n["G"])(u.movie.duration)+"分钟",1),Object(n["i"])("p",null,"语言:"+Object(n["G"])(u.movie.languageV),1),Object(n["i"])("p",null,"语言:"+Object(n["G"])(u.movie.languageV),1),Object(n["i"])("p",null,"上映时间:"+Object(n["G"])(u.movie.releaseDate),1),Object(n["i"])("p",null,"简介:"+Object(n["G"])(u.movie.synopsis),1),Object(n["i"])("a",{href:u.mvlink},"片源:"+Object(n["G"])(u.mvname),9,o)])])}i("b64b"),i("07ac");var u=i("bc3a"),s=i.n(u),v=i("cc0f"),b={name:"Detailer",components:{contents:v["default"]},data:function(){return{movie:[],id:"",movieLink:[],mvname:"",mvlink:""}},mounted:function(){this.id=this.$route.query.movieId,this.mvDetail()},methods:{mvDetail:function(){var e=this;s()({method:"get",url:"http://localhost:8888/filmsdata/byid",params:{id:this.id}}).then((function(t){e.movie=t.data,e.movieLink=t.data.linksV,console.log(e.movieLink),e.mvname=Object.keys(t.data.linksV),e.mvlink=Object.values(t.data.linksV)}))}}},m=(i("ec63"),i("d959")),r=i.n(m);const d=r()(b,[["render",l],["__scopeId","data-v-69d46539"]]);t["default"]=d},"6f53":function(e,t,i){var n=i("83ab"),c=i("e330"),a=i("df75"),o=i("fc6a"),l=i("d1e7").f,u=c(l),s=c([].push),v=function(e){return function(t){var i,c=o(t),l=a(c),v=l.length,b=0,m=[];while(v>b)i=l[b++],n&&!u(c,i)||s(m,e?[i,c[i]]:c[i]);return m}};e.exports={entries:v(!0),values:v(!1)}},8695:function(e,t,i){},ec63:function(e,t,i){"use strict";i("8695")}}]);
//# sourceMappingURL=chunk-4b47fe7e.b78af413.js.map