"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=d(function(D,q){
var g=require('@stdlib/ndarray-base-numel-dimension/dist'),l=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),i=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/stats-strided-ztest/dist').ndarray;function f(e){var r,u,v,n,t,a;return t=e[0],a=e[1],v=i(e[2]),r=i(e[3]),n=i(e[4]),u=i(e[5]),o(g(t,0),v,r,n,u,c(t),l(t,0),m(t),a.get()),a}q.exports=f
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
