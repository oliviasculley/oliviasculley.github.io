import{d as p,u as i,i as l,c as a,A as c,S as g,f,h as m,F as h,t as n,o as u,p as b}from"./index-bc1efc92.js";import{g as d}from"./index-0fa819ad.js";const y=n('<section class="text-gray-700 flex flex-col justify-start items-stretch text-left space-y-4">'),x=n('<img class="absolute h-full w-1/3 left-2/3 inset-0 pointer-events-none -z-10 object-cover grayscale opacity-0"style="mask-image:linear-gradient(115deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%);">'),_=n('<div class="absolute inset-0 pointer-events-none -z-10"style=background-size:50px;background-image:url(/noise.png);background-repeat:repeat>'),$=n("<p>"),v=n('<div class="flex flex-col text-left mr-36">'),S=t=>{u(()=>{d.fromTo(t.children,{opacity:0},{opacity:1,y:-16,duration:.5,stagger:.15})})},w=t=>{u(()=>{t.onload=()=>d.fromTo(t,{opacity:0},{opacity:1,duration:2})})};function A(){const[t]=p(b);return(()=>{const s=y();return i(S,s,()=>!0),l(s,a(h,{get each(){return t()},children:(e,k)=>a(c,{get href(){return e.slug},class:"relative pt-4 pb-3 text-gray-700 px-4 flex flex-col justify-between items-start overflow-hidden bg-primary",style:"background: linear-gradient(115deg, rgba(215,216,255,1) 0%, rgba(164,185,255,1) 100%)",get children(){return[a(g,{get when(){return e.imageSrc},get children(){const r=x();return i(w,r,()=>!0),f(()=>m(r,"src",e.imageSrc)),r}}),_(),a(c,{get href(){return e.slug},class:"pb-4 text-3xl no-underline hover:underline mr-36",get children(){return e.title}}),(()=>{const r=v();return l(r,a(g,{get when(){return e.description},get children(){const o=$();return l(o,()=>e.description),o}})),r})()]}})})),s})()}export{A as default};