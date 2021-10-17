(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(31),r=n.n(a),s=n(9),i=n(10),o=n(12),u=n(11),h=n(2),l=n(14),j=n.n(l),b="d05f5f872f0f74667bcdb4179984cab2",m=function(t){return j.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(b,"&language=en-US&page=1&query=").concat(t))},d=n(6),v=n(0),p=function(t){var e=t.items,n=void 0===e?[]:e;return Object(v.jsx)("ul",{children:n.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsxs)(d.b,{to:"/movies/".concat(t.id),children:[t.title," ",t.name]})},t.id)}))})},O=n(21),f=(n(62),function(t){var e=t.title,n=t.overview,c=t.backdrop_path,a=t.release_date,r=t.onGoBack;return Object(v.jsxs)("article",{className:"article-styles",children:[Object(v.jsx)("button",{type:"button",onClick:r,children:"Go back"}),Object(v.jsxs)("h2",{children:[e," (",a,")"]}),Object(v.jsx)("img",{width:"420",src:"https://image.tmdb.org/t/p/w500".concat(c)}),Object(v.jsx)("h3",{children:Object(v.jsx)("b",{children:"Overview : "})}),Object(v.jsx)("span",{children:n})]})}),x=(n(63),function(t){var e=t.items,n=void 0===e?[]:e;return Object(v.jsx)("ul",{className:"cast-ul",children:n.map((function(t){return Object(v.jsxs)("li",{children:[t.name,Object(v.jsx)("p",{children:Object(v.jsxs)("span",{className:"character-style",children:["Character : ",t.character]})}),Object(v.jsx)("img",{width:"80",height:"100",src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path)})]},t.id)}))})}),y=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={cast:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t,e=this;(t=this.props.match.params.movieId,j.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(b)).then((function(t){return t.data}))).then((function(t){return e.setState({cast:t.cast})}))}},{key:"render",value:function(){var t=this.state.cast;return Object(v.jsx)("div",{children:Object(v.jsx)(x,{items:t})})}}]),n}(c.Component),g=function(t){var e=t.items;return e.length>0?Object(v.jsx)("ul",{children:e.map((function(t){return Object(v.jsx)("li",{children:t.content},t.id)}))}):Object(v.jsx)("h2",{children:"We don`t have any reviews for this movie."})},k=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t,e=this;(t=this.props.match.params.movieId,j.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(b)).then((function(t){return t.data}))).then((function(t){return e.setState({reviews:t.results})}))}},{key:"render",value:function(){var t=this.state.reviews;return Object(v.jsx)("div",{children:Object(v.jsx)(g,{items:t})})}}]),n}(c.Component),w=(n(64),function(t){return t.match.params.movieId}),S=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={movie:null},t.handleGoBack=function(){t.props.history.goBack()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;(function(t){return j.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d05f5f872f0f74667bcdb4179984cab2")).then((function(t){return t.data}))})(w(this.props)).then((function(e){return t.setState({movie:e})}))}},{key:"render",value:function(){var t=w(this.props),e=this.state.movie;return Object(v.jsxs)("div",{children:[null===e&&Object(v.jsx)("h1",{children:"This film is not found , try any film"}),e&&Object(v.jsx)(f,Object(O.a)(Object(O.a)({},e),{},{onGoBack:this.handleGoBack})),Object(v.jsx)(d.c,{className:"cast-button-styles",to:"/movies/".concat(t,"/cast"),children:"Cast"}),Object(v.jsxs)(d.c,{className:"reviews-button-styles",to:"/movies/".concat(t,"/reviews"),children:["Reviews"," "]}),Object(v.jsx)(h.a,{path:"/movies/:movieId/reviews",component:k}),Object(v.jsx)(h.a,{path:"/movies/:movieId/cast",component:y})]})}}]),n}(c.Component),N=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={items:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(b)).then((function(t){return t.data})).then((function(e){return t.setState({items:e.results})}))}},{key:"render",value:function(){var t=this.state.items;return Object(v.jsx)("div",{children:Object(v.jsx)(p,{items:t})})}}]),n}(c.Component),C=(n(65),function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={query:"",items:[]},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),m(t.state.query).then((function(e){return t.setState({items:e.data.results})})),t.setState({query:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.query,n=t.items;return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{className:"Searchbar",children:Object(v.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(v.jsx)("input",{value:e,onChange:this.handleChange,className:"SearchForm-input",type:"text",placeholder:"Search images and photos"}),Object(v.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(v.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})}),Object(v.jsx)(p,{items:n})]})}}]),n}(c.Component)),_=(n(66),{color:"red"}),I=function(){return Object(v.jsxs)("div",{className:"div-styles",children:[Object(v.jsx)(d.c,{to:"/ ",className:"Home-styles",activeStyle:_,children:"Home"}),Object(v.jsx)(d.c,{to:"/movies",className:"Movies-styles",activeStyle:_,children:"Movies"})]})},q=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(I,{}),Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:"/",exact:!0,component:N}),Object(v.jsx)(h.a,{path:"/movies/:movieId",component:S}),Object(v.jsx)(h.a,{path:"/movies",component:C}),Object(v.jsx)(h.a,{component:N})," not found"]})]})}}]),n}(c.Component);r.a.render(Object(v.jsx)(d.a,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.095ac314.chunk.js.map