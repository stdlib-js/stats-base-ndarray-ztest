"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=q(function(x,g){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),m=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/stats-strided-ztest/dist').ndarray;function f(e){var r,u,v,a,t,i;return t=e[0],i=e[1],v=e[2].get(),r=e[3].get(),a=e[4].get(),u=e[5].get(),c(s(t,0),v,r,a,u,o(t),m(t,0),d(t),i.get()),i}g.exports=f
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
