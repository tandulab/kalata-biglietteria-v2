import{d as b,u as g,a as v,c as C,_ as L,r as n,b as y,e as P,f as o,w as _,g as p}from"../index58380.js";import{c as x,a as u,b as V,L as $}from"./index.esm58380.js";import{F as S}from"./vee-validate.esm58380.js";import{P as B}from"./PasswordWithValidation58380.js";import{u as F,s as k,e as f}from"./helpers58380.js";const U=b({name:"ChangePwdView",setup(){const s=g(),r=v(),{showLoader:l,hideLoader:e}=F(),w=x({password:u().required("La password è obbligatoria").min(8,"La password deve essere di almeno 8 caratteri"),password_confirmation:u().oneOf([V("password")],"Le password devono corrispondere").required("La conferma password è obbligatoria")}),t=C(()=>s.user),d=async function(a,i){l();const m={id:t.value.id,user:{password_confirmation:a.password_confirmation,password:a.password}};await s.changePassword(m).then(async()=>{k(r,{message:"Password aggiornata correttamente",error:!1}),e(),c()}).catch(h=>{e(),f(r,h)})};async function c(){const a={email:t.value.email,password:t.value.password};await s.login(a).then(async()=>{e()}).catch(i=>{e(),f(r,i)})}return{schema:w,currentUser:t,onSubmit:d}},components:{Logo:$,PasswordWithValidation:B,Form:S}});const W={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},q={class:"m-2 text-center"},N=p("h1",{class:"mb-3 mt-0 text-center"},"Cambia la password",-1),T=p("p",{class:"font-normal mb-4"},"Inserisci una nuova password di minimo 8 caratteri",-1);function j(s,r,l,e,w,t){const d=n("Logo"),c=n("PasswordWithValidation"),a=n("Button"),i=n("Form"),m=n("Card");return y(),P("div",W,[o(m,{class:"py-4 px-3"},{content:_(()=>[p("div",q,[o(d)]),N,T,o(i,{"validation-schema":s.schema,onSubmit:s.onSubmit,class:"flex flex-column"},{default:_(()=>[o(c,{name:"password",label:"Password*",type:"password"}),o(c,{name:"password_confirmation",label:"Conferma password*",type:"password"}),o(a,{label:"Conferma password",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const D=L(U,[["render",j]]);export{D as default};
