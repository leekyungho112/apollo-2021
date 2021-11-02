(this["webpackJsonpapollo-2021"]=this["webpackJsonpapollo-2021"]||[]).push([[0],{81:function(e,n,i){"use strict";i.r(n);var t,c,a,d,r,o,s,j,l,b,g,u,m,p,h,x,O,v,f,k,y,L,w,_,z=i(88),M=i(2),$=i.n(M),I=i(60),q=i.n(I),J=i(89),A=i(91),B=new J.a({uri:"https://movieql2.vercel.app",cache:new A.a,resolvers:{Movie:{isLiked:function(){return!1}},Mutation:{toggleLike:function(e,n,i){var t=n.id;i.cache.modify({id:"Movie:".concat(t),fields:{isLiked:function(e){return!e}}})}}}}),C=i(39),E=i(9),F=i(7),N=i(90),S=i(92),U=i(8),D=i(23),G=i(94),H=i(4),K=Object(N.a)(t||(t=Object(F.a)(["\n  mutation toggleLike($id: Int!) {\n    toggleLike(id: $id) @client\n  }\n"]))),P=U.a.div(c||(c=Object(F.a)(["\n  height: 380px;\n  width: 100%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  border-radius: 7px;\n"]))),Q=U.a.div(a||(a=Object(F.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n"])),(function(e){return e.bg})),R=U.a.button(d||(d=Object(F.a)(["\n  background: red;\n"]))),T=function(e){var n=e.id,i=e.image,t=e.isLiked,c=Object(G.a)(K,{variables:{id:parseInt(n)}}),a=Object(D.a)(c,1)[0];return Object(H.jsxs)(P,{children:[Object(H.jsx)(C.b,{to:"/".concat(n),children:Object(H.jsx)(Q,{bg:i})}),Object(H.jsx)(R,{onClick:a,children:t?"Unliked":"liked"})]})},V=Object(N.a)(r||(r=Object(F.a)(["\n  query getMovie($id: Int!) {\n    movie(id: $id) {\n      id\n      title\n      rating\n      language\n      medium_cover_image\n      description_intro\n      genres\n      isLiked @client\n    }\n    suggestions(id: $id) {\n      id\n      medium_cover_image\n      isLiked @client\n    }\n  }\n"]))),W=U.a.div(o||(o=Object(F.a)(["\n  height: 100vh;\n  background-image: linear-gradient(-45deg, #d754ab, #fd723a);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: white;\n"]))),X=U.a.div(s||(s=Object(F.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),Y=U.a.div(j||(j=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n"]))),Z=U.a.div(l||(l=Object(F.a)(["\n  margin-left: 10px;\n  width: 50%;\n"]))),ee=U.a.h1(b||(b=Object(F.a)(["\n  font-size: 40px;\n  margin-bottom: 30px;\n"]))),ne=U.a.div(g||(g=Object(F.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),ie=U.a.span(u||(u=Object(F.a)(["\n  margin-right: 10px;\n"]))),te=U.a.span(m||(m=Object(F.a)([""]))),ce=U.a.p(p||(p=Object(F.a)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 40px;\n"]))),ae=U.a.ul(h||(h=Object(F.a)(["\n  display: flex;\n"]))),de=U.a.li(x||(x=Object(F.a)(["\n  margin-right: 15px;\n"]))),re=U.a.div(O||(O=Object(F.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  width: 40%;\n  height: 60%;\n"])),(function(e){return e.bg})),oe=U.a.div(v||(v=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  width: 100%;\n  height: 20%;\n"]))),se=function(){var e,n,i=Object(E.e)().id,t=Object(S.a)(V,{variables:{id:Number(i)}}),c=t.loading,a=t.data;return Object(H.jsxs)(W,{children:[Object(H.jsx)(X,{children:c?Object(H.jsx)(Y,{children:"loading..."}):a.movie&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(Z,{children:[Object(H.jsxs)(ee,{children:[a.movie.title," ",a.movie.isLiked?"\uc88b\uc544\uc694":"\ubcc4\ub85c\uc785\ub2c8\ub2e4"]}),Object(H.jsxs)(ne,{children:[Object(H.jsx)(ie,{children:a.movie.language}),Object(H.jsx)(te,{children:a.movie.rating})]}),Object(H.jsx)(ce,{children:a.movie.description_intro}),Object(H.jsx)(ae,{children:null===(e=a.movie)||void 0===e?void 0:e.genres.map((function(e,n){return Object(H.jsx)(de,{children:e},n)}))})]}),Object(H.jsx)(re,{bg:a.movie.medium_cover_image})]})}),Object(H.jsx)(oe,{children:null===a||void 0===a||null===(n=a.suggestions)||void 0===n?void 0:n.map((function(e,n){return Object(H.jsx)(T,{isLiked:e.isLiked,id:e.id,image:e.medium_cover_image},n)}))})]})},je=Object(N.a)(f||(f=Object(F.a)(["\n  {\n    movies {\n      id\n      medium_cover_image\n      isLiked @client\n    }\n  }\n"]))),le=U.a.div(k||(k=Object(F.a)(["\n  width: 100%;\n  height: 100vh;\n"]))),be=U.a.div(y||(y=Object(F.a)(["\n  height: 40%;\n  background: teal;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ge=U.a.h1(L||(L=Object(F.a)(["\n  font-size: 48px;\n"]))),ue=U.a.div(w||(w=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n"]))),me=U.a.div(_||(_=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  margin: 0px 25px;\n  position: relative;\n  top: -50px;\n"]))),pe=function(){var e=Object(S.a)(je),n=e.loading,i=e.data;return Object(H.jsxs)(le,{children:[Object(H.jsx)(be,{children:Object(H.jsx)(ge,{children:"Apollo 2021"})}),n?Object(H.jsx)(ue,{children:"Loading..."}):i.movies&&Object(H.jsx)(me,{children:i.movies.map((function(e){return Object(H.jsx)(T,{id:e.id,image:e.medium_cover_image,isLiked:e.isLiked},e.id)}))})]})};var he=function(){return Object(H.jsxs)(C.a,{children:[Object(H.jsx)(E.a,{exact:!0,path:"/",component:pe}),Object(H.jsx)(E.a,{path:"/:id",component:se})]})};q.a.render(Object(H.jsx)($.a.StrictMode,{children:Object(H.jsx)(z.a,{client:B,children:Object(H.jsx)(he,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.61ff99c2.chunk.js.map