import{d as h,u as f,a as b,c as w,j as g,_ as x,r as o,b as v,e as L,f as s,w as _,g as i}from"../index46729.js";import{c as y,a as V,L as C,F}from"./index.esm46729.js";import{I as S}from"./InputTextWithValidation46729.js";import{u as T,s as $,e as B}from"./helpers46729.js";const P=h({name:"ForgotPwdView",setup(){const e=f(),a=b(),{showLoader:c,hideLoader:m}=T(),l=y({email:V().required("L'email è obbligatoria").email("L'email non è valida").label("Email")}),d=w(()=>e.user);return{schema:l,currentUser:d,onSubmit:async function(n,p){c();const r={email:n.email};await e.resetPassword(r).then(async t=>{$(a,{message:t.message}),g.push({name:"login"})}).catch(t=>{m(),B(a,t)})}}},components:{Logo:C,InputTextWithValidation:S,Form:F}});const E={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},I={class:"m-2 text-center"},k=i("h1",{class:"mb-3 mt-0 text-center"},"Password dimenticata?",-1),U=i("p",{class:"font-normal mb-4"}," Ti verrà inviata un'email con le istruzioni per reimpostare la password. ",-1);function W(e,a,c,m,l,d){const u=o("Logo"),n=o("InputTextWithValidation"),p=o("Button"),r=o("Form"),t=o("Card");return v(),L("div",E,[s(t,{class:"py-4 px-3"},{content:_(()=>[i("div",I,[s(u)]),k,U,s(r,{"validation-schema":e.schema,onSubmit:e.onSubmit,class:"flex flex-column"},{default:_(()=>[s(n,{name:"email",label:"Email*",type:"text"}),s(p,{label:"Conferma password",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const A=x(P,[["render",W]]);export{A as default};
