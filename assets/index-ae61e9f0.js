import{d as h,u as c,i as a,c as n,A as g,S as s,f,h as m,k as p,F as b,t as l,o as u,j as y}from"./index-bc1efc92.js";import{g as d}from"./index-0fa819ad.js";const x=l('<section class="text-gray-700 flex flex-col justify-start items-stretch text-left space-y-4">'),w=l('<img class="absolute h-full w-1/3 left-2/3 inset-0 pointer-events-none -z-10 object-cover grayscale opacity-0"style="mask-image:linear-gradient(115deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%);">'),_=l('<div class="absolute inset-0 pointer-events-none -z-10"style=background-size:50px;background-image:url(/noise.png);background-repeat:repeat>'),$=l("<p class=mr-36> "),v=r=>{u(()=>{d.fromTo(r.children,{opacity:0},{opacity:1,y:-16,duration:.5,stagger:1.5/r.children.length})})},S=r=>{u(()=>{r.onload=()=>d.fromTo(r,{opacity:0},{opacity:1,duration:2})})};function z(){const[r]=h(y);return(()=>{const i=x();return c(v,i,()=>!0),a(i,n(b,{get each(){return r()},children:(e,k)=>n(g,{get href(){return e.slug},class:"relative pt-4 pb-3 text-gray-700 px-4 flex flex-col justify-between items-start overflow-hidden bg-primary",style:"background: linear-gradient(115deg, rgba(215,216,255,1) 0%, rgba(164,185,255,1) 100%)",get children(){return[n(s,{get when(){return e.imageSrc},get children(){const t=w();return c(S,t,()=>!0),f(()=>m(t,"src",e.imageSrc)),t}}),_(),n(g,{get href(){return e.slug},class:"pb-4 text-3xl no-underline hover:underline mr-36",get children(){return e.title}}),n(s,{get when(){return e.startYear},get children(){const t=$(),o=t.firstChild;return a(t,()=>e.startYear,o),a(t,n(s,{get when(){return e.endYear=="Current"},children:"+"}),o),a(t,n(s,{get when(){return e.endYear&&e.endYear!="Current"},get children(){return["- ",p(()=>e.endYear)]}}),null),t}})]}})})),i})()}export{z as default};