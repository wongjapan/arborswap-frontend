(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[4],{844:function(e,t,n){"use strict";var c,o=n(6),i=n(41),r=n(4),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j},926:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var c,o,i=n(10),r=n(6),j=n(0),a=n(9),l=n(3),b=n(4),d=n(19),s=n(99),O=n(37),x=n(62),u=n(389),p=n(29),h=n(463),g=n(116),f=n(25),v=n(50),y=n(98),m=n(844),B=n(174),T=n(233),I=n(234),k=n(259),S=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var E=Object(b.e)(l.o)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function N(){var e,t=Object(f.a)().account,n=Object(d.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),b=r[0],N=r[1],C=Object(j.useState)(a.d),A=Object(i.a)(C,2),w=A[0],K=A[1],q=Object(j.useState)(null),L=Object(i.a)(q,2),X=L[0],D=L[1],J=Object(g.b)(null!==w&&void 0!==w?w:void 0,null!==X&&void 0!==X?X:void 0),M=Object(i.a)(J,2),P=M[0],F=M[1],G=Object(v.h)();Object(j.useEffect)((function(){F&&G(F)}),[F,G]);var R=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&F&&a.e.equal(F.reserve0.raw,a.e.BigInt(0))&&a.e.equal(F.reserve1.raw,a.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),W=Boolean(V&&a.e.greaterThan(V.raw,a.e.BigInt(0))),Y=Object(j.useCallback)((function(e){b===o.TOKEN0?K(e):D(e)}),[b]),_=Object(S.jsx)(s.b,{padding:"45px 10px",children:Object(S.jsx)(l.Bb,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.Sb)(Object(S.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=b===o.TOKEN0?X:w)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(S.jsx)(k.a,{children:Object(S.jsxs)(I.a,{children:[Object(S.jsx)(I.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(S.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(S.jsx)(E,{endIcon:Object(S.jsx)(l.C,{}),onClick:function(){H(),N(o.TOKEN0)},children:w?Object(S.jsxs)(p.d,{children:[Object(S.jsx)(x.a,{currency:w}),Object(S.jsx)(l.Bb,{ml:"8px",children:w.symbol})]}):Object(S.jsx)(l.Bb,{ml:"8px",children:n("Select a Token")})}),Object(S.jsx)(O.b,{children:Object(S.jsx)(l.a,{})}),Object(S.jsx)(E,{endIcon:Object(S.jsx)(l.C,{}),onClick:function(){H(),N(o.TOKEN1)},children:X?Object(S.jsxs)(p.d,{children:[Object(S.jsx)(x.a,{currency:X}),Object(S.jsx)(l.Bb,{ml:"8px",children:X.symbol})]}):Object(S.jsx)(l.Bb,{as:p.d,children:n("Select a Token")})}),W&&Object(S.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(S.jsx)(l.Bb,{textAlign:"center",children:n("Pool Found!")}),Object(S.jsx)(m.a,{to:"/pool",children:Object(S.jsx)(l.Bb,{textAlign:"center",children:n("Manage this pool.")})})]}),w&&X?P===g.a.EXISTS?W&&F?Object(S.jsx)(u.a,{pair:F}):Object(S.jsx)(s.b,{padding:"45px 10px",children:Object(S.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(S.jsx)(l.Bb,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(S.jsx)(m.a,{to:"/add/".concat(Object(B.a)(w),"/").concat(Object(B.a)(X)),children:Object(S.jsx)(l.Bb,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(S.jsx)(s.b,{padding:"45px 10px",children:Object(S.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(S.jsx)(l.Bb,{textAlign:"center",children:n("No pool found.")}),Object(S.jsx)(m.a,{to:"/add/".concat(Object(B.a)(w),"/").concat(Object(B.a)(X)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(S.jsx)(s.b,{padding:"45px 10px",children:Object(S.jsx)(O.a,{gap:"sm",justify:"center",children:Object(S.jsx)(l.Bb,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(S.jsx)(s.b,{padding:"45px 10px",children:Object(S.jsx)(O.a,{gap:"sm",justify:"center",children:Object(S.jsxs)(l.Bb,{textAlign:"center",children:[n("Loading"),Object(S.jsx)(T.a,{})]})})}):null:_]})]})})}}}]);
//# sourceMappingURL=4.49ebbf0e.chunk.js.map