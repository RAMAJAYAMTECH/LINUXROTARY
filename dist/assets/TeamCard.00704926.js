import{S as L,i as M,s as v,e as g,a as w,b as d,c as t,E as _,d as G,f as r,n as b,g as H}from"./index.1b65baca.js";import{s as h}from"./_source_url.505bb45e.js";function T(n){let l;return{c(){l=g("span"),t(l,"class","small text-uppercase text-muted")},m(e,a){G(e,l,a),l.innerHTML=n[1]},p(e,a){a&2&&(l.innerHTML=e[1])},d(e){e&&H(l)}}}function k(n){let l,e,a,c,o,m,f,i=n[5]==1&&T(n);return{c(){l=g("div"),e=g("div"),a=g("img"),o=w(),m=g("h5"),i&&i.c(),d(a.src,c=h+"/images/"+n[2])||t(a,"src",c),t(a,"alt",""),t(a,"width","120"),t(a,"class","img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"),t(m,"class","mb-0"),t(e,"class","pres-detail rounded-5 shadow-lg py-5 px-4 mx-4 mx-md-0"),_(e,"glass",n[3]),t(l,"class",f="col-xl-"+n[4]+" col-sm-6 mb-5")},m(s,u){G(s,l,u),r(l,e),r(e,a),r(e,o),r(e,m),m.innerHTML=n[0],i&&i.m(e,null)},p(s,[u]){u&4&&!d(a.src,c=h+"/images/"+s[2])&&t(a,"src",c),u&1&&(m.innerHTML=s[0]),s[5]==1?i?i.p(s,u):(i=T(s),i.c(),i.m(e,null)):i&&(i.d(1),i=null),u&8&&_(e,"glass",s[3]),u&16&&f!==(f="col-xl-"+s[4]+" col-sm-6 mb-5")&&t(l,"class",f)},i:b,o:b,d(s){s&&H(l),i&&i.d()}}}function q(n,l,e){let{name:a}=l,{post:c}=l,{img:o}=l,{isGlass:m=!1}=l,{cols:f=2}=l,{type:i=1}=l;return n.$$set=s=>{"name"in s&&e(0,a=s.name),"post"in s&&e(1,c=s.post),"img"in s&&e(2,o=s.img),"isGlass"in s&&e(3,m=s.isGlass),"cols"in s&&e(4,f=s.cols),"type"in s&&e(5,i=s.type)},[a,c,o,m,f,i]}class y extends L{constructor(l){super(),M(this,l,q,k,v,{name:0,post:1,img:2,isGlass:3,cols:4,type:5})}}export{y as T};