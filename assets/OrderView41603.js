import{o as B,x as C,a as I,c as F,_ as P,r as p,b as x,e as V,g as o,f as s,H as A,I as J,J as Te,i as z,K as Se,w as k,h as M,n as X,t as O,L as Z,M as H,N as ne,u as Oe}from"../index41603.js";import{u as ee,a as R,b as le,f as W,c as se,d as Fe,e as te,g as Ue,h as Ae,i as ae,j as Ne}from"./NewOrderDialog.vue_vue_type_style_index_0_lang41603.js";import{s as q,e as L,p as Le,D as K,a as ie,b as Me}from"./helpers41603.js";import{u as re}from"./loader41603.js";const Pe={props:["location_permalink","time_slot"],setup(n,t){B(()=>{l.value=Object.assign({},n.time_slot)});const l=C({}),e=ee(),g=R(),{showLoader:b,hideLoader:i}=re(),c=I(),h=F(()=>e.allOpenTickets),u=F(()=>g.paymentStatus),_=F(()=>g.paymentModeList),a=async function(m){const T={code:m.query.toUpperCase(),location_permalink:n.location_permalink};await e.fetchAllOpenTickets(T)},f=async function(){var T;const m={id:n.location_permalink,order_id:l.value.id,status:(T=l.value)==null?void 0:T.status,payment_method:l.value.payment_mode,open_ticket_codes:[],api_version:"v2"};if(l.value.open_ticket_codes&&l.value.open_ticket_codes.length>0){let w=[];l.value.open_ticket_codes.forEach(v=>{w.push(v.code)}),m.open_ticket_codes=w}S(m)},S=async function(m){b(),await g.updateOrder(m).then(()=>{i(),q(c,{message:"Stato aggiornato correttamente",error:!1}),t.emit("closeDialog",!0)}).catch(T=>{i(),L(c,T)})};return{form:l,open_tickets:h,paymentList:u,paymentModeList:_,changeStatus:f,fetchAllOpenTickets:a}}},je={key:0,class:"formgrid grid flex-column mt-3"},ze={class:"field col-12"},Be=o("label",{for:"status"},"Stato pagamento",-1),Ie={class:"field col-12"},Re=o("label",{for:"spayment_modetatus"},"Modalità pagamento",-1),Ee={key:0,class:"field col-12 flex flex-column"},qe=o("label",{for:"user_zip"},"Codice biglietto",-1),Je={class:"flex align-items-center justify-content-end mt-3"};function $e(n,t,l,e,g,b){const i=p("Dropdown"),c=p("AutoComplete"),h=p("Button");return x(),V(J,null,[e.form?(x(),V("div",je,[o("div",ze,[Be,s(i,{modelValue:e.form.status,"onUpdate:modelValue":t[0]||(t[0]=u=>e.form.status=u),options:e.paymentList,optionLabel:"name",optionValue:"id",class:"w-full"},null,8,["modelValue","options"])]),o("div",Ie,[Re,s(i,{modelValue:e.form.payment_mode,"onUpdate:modelValue":t[1]||(t[1]=u=>e.form.payment_mode=u),options:e.paymentModeList,optionLabel:"label",optionValue:"id",class:"w-full"},null,8,["modelValue","options"])]),e.form.payment_mode=="voucher"?(x(),V("div",Ee,[qe,s(c,{modelValue:e.form.open_ticket_codes,"onUpdate:modelValue":t[2]||(t[2]=u=>e.form.open_ticket_codes=u),suggestions:e.open_tickets,class:"uppercase w-full",onComplete:t[3]||(t[3]=u=>e.fetchAllOpenTickets(u)),emptySearchMessage:"Nessun risultato",emptySelectionMessage:"Nessun risultato",optionLabel:"code",optionValue:"code",multiple:""},null,8,["modelValue","suggestions"])])):A("",!0)])):A("",!0),o("div",Je,[s(h,{label:"Annulla",text:"",onClick:t[4]||(t[4]=u=>n.$emit("closeDialog",!1))}),s(h,{label:"Conferma",onClick:t[5]||(t[5]=u=>e.changeStatus())})])],64)}const Ge=P(Pe,[["render",$e]]),Ke={props:["filters"],setup(n,t){B(()=>{v.value=!0,r.value={first:0,rows:f.value.rows,sortField:null,sortOrder:null},r.value.page=0,n.filters.location_permalink&&G()});const l=R(),e=le(),g=F(()=>l.responseOrders),b=F(()=>l.status),i=Te();F(()=>i.cancelDialog);const c=F(()=>i.submitDialog),h=F(()=>l.paymentStatus),{showLoader:u,hideLoader:_}=re(),a=I(),f=C(),S=C(),m=C(),T=C(),w=C(),v=C(!0),r=C(),D=C(0),j=C([]),Y=C([]),$=C(!1),Q=C();function G(){v.value=!0;let d=new Map;for(const y in n.filters)y=="date"?W(n.filters.date)=="Invalid DateTime"?d.set("date",se(n.filters.date)):d.set("date",W(n.filters.date)):n.filters.location_permalink&&d.set("location_permalink",n.filters.location_permalink),y=="course"&&n.filters.course.id!="-1"&&d.set("course",n.filters.course.id),y=="hour"&&n.filters.hour!="Tutti gli orari"&&d.set("hour",n.filters.hour),y=="name"&&d.set("name",n.filters.name);setTimeout(()=>{ce(d)},Math.random()*1e3+250)}const ce=async function(d){await l.fetchAllOrders(d).then(()=>{v.value=!1}).catch(y=>{v.value=!1,L(a,y)})},de=d=>{m.value.toggle(d),Q.value.toggle(d)},ue=(d,y)=>{if(d>=(d+y)/2)return"green";if(d<=(d+y)/3)return"red"},me=function(d,y){y&&(m.value.note=y,m.value.toggle(d))},_e=async function(d,y){const U={id:d.id,check_in:y,location_permalink:n.filters.location_permalink};await l.checkInOrder(U).then(()=>{oe(d,y,"check_in"),q(a,{message:"Check-in registrato correttamente",error:!1})}).catch(N=>{L(a,N)})},fe=async function(d,y){const U={id:d.id,no_show:y,location_permalink:n.filters.location_permalink};await l.noShowOrder(U).then(()=>{oe(d,y,"no_show"),q(a,{message:"No-show registrato correttamente",error:!1})}).catch(N=>{L(a,N)})},oe=function(d,y,U){d&&d.order_item_tickets.forEach(N=>{N[U]=y})},pe=async function(d,y,U){const N={id:d,check_in:y,location_permalink:n.filters.location_permalink};await l.checkInTicket(N).then(()=>{if(q(a,{message:"Check-in registrato correttamente",error:!1}),!y)U.check_in=!1;else{let E=!0;U.order_item_tickets.forEach(Ve=>{Ve.check_in==!1&&(E=!1)}),E&&(U.check_in=!0)}}).catch(E=>{L(a,E)})},he=async function(d,y,U){const N={id:d,no_show:y,location_permalink:n.filters.location_permalink};await l.noShowTicket(N).then(()=>{q(a,{message:"No-show registrato correttamente",error:!1}),y||(U.check_in=!1)}).catch(E=>{L(a,E)})},ve=function(d){const y={course_name:d.course_name,start_at:d.start_at};t.emit("updateFilters",y),e.setNewOrderDialogVisibility(!0)},ye=function(d){$.value=!0,T.value=d},ke=function(d){d&&G(),$.value=!1},ge=function(d){return d!=null&&d.created_by?d.created_by:""},be=function(d){let y="https://kalata-biglietteria-v2.tandu.it/VIC_2023357405.pdf";var U=window.open(y,"_blank");if(U){var N=document.createElement("button");N.textContent="Print PDF",N.onclick=function(){U&&U.print()},window.document.body.appendChild(N)}else alert("Popup blocked! Please allow popups to open the PDF.");setTimeout(()=>{debugger;N.click()},3e3)},xe=function(d){let y=0;if(d&&d.order_item_tickets){d.order_item_tickets.forEach(N=>{N.check_in&&(y+=1)});let U=d.order_item_tickets.length;if(y!=U&&y!=0)return y+"/"+U}},we=function(d,y){Q.value.data=y,Q.value.toggle(d)},Ce=function(d,y){w.value=y.id;let U="Sei sicuro di voler eliminare questa prenotazione?";i.setDialog("Elimina prenotazione","Elimina","Annulla",U),i.setDynamicDialogVisibility(!0)},De=function(){if(u(),w.value){const d={id:w.value,location_permalink:n.filters.location_permalink};l.deleteOrder(d).then(()=>{_(),q(a,{message:"La prenotazione è stata eliminata correttamente",error:!1}),G()}).catch(y=>{_(),L(a,y)})}};return z(c,d=>{De()}),z(n.filters,()=>{n.filters.location_permalink&&G()}),{dt:f,responseOrders:g,loading:v,totalRecords:D,lazyParams:r,currentOrder:S,status:b,expandedRows:j,expandedRows1:Y,op:m,dialogStore:e,paymentList:h,visibleDialog:$,currentTimeSlot:T,visibleMenu:Q,loadLazyData:G,toggle:de,getProgressClass:ue,showNotes:me,checkAll:_e,noShowAll:fe,openDialog:ve,checkInSingleTicket:pe,noShowSingleTicket:he,prettyPaymentStatus:Le,openPaymentStatusDialog:ye,onClosePaymentStatusDialog:ke,getRowClass:ge,printPDF:be,showLabelCheckbox:xe,confirmDeleteOrder:Ce,showMenu:we,formatDataFromUnixTimestamps:Fe}},components:{PaymentStatusDialog:Ge}};const We={class:"order-table"},He={style:{width:"15rem"}},Qe={class:"m-0 text-right",style:{"font-size":"12px"}},Xe={style:{width:"15rem"}},Ye={class:"m-0 text-right",style:{"font-size":"12px"}},Ze={key:0},et=o("div",{class:"flex justify-content-center w-full"},"Check-in",-1),tt={class:"flex justify-content-center"},ot={class:"flex flex-column",style:{"margin-top":"8px"}},nt={class:"text-sm",style:{"min-height":"15px"}},lt=o("div",{class:"flex justify-content-center w-full"},"No-show",-1),st={class:"flex justify-content-center"},at={class:"flex flex-column",style:{"margin-top":"8px"}},it=o("span",{class:"text-sm",style:{"min-height":"15px"}},null,-1),rt={class:"overlay-menu"},ct=["onClick"],dt=o("i",{class:"pi pi-print mr-3"},null,-1),ut=["disabled","onClick"],mt=o("i",{class:"pi pi-pencil mr-3"},null,-1),_t=["disabled","onClick"],ft=o("i",{class:"pi pi-trash mr-3"},null,-1),pt={key:0},ht={key:1},vt=o("div",{class:"flex justify-content-center w-full"},"Check-in",-1),yt={class:"flex justify-content-center"},kt=o("div",{class:"flex justify-content-center w-full"},"No-show",-1),gt={class:"flex justify-content-center"},bt=o("div",{class:"flex justify-content-center w-full"},"PDF",-1),xt={class:"flex justify-content-center"},wt={key:0,class:"flex mx-4"},Ct=o("div",null,[o("div",{class:"p-0 m-0 flex align-items-center"},[o("p",{style:{width:"2rem",height:"5px"},class:"mr-2 web my-0"}),o("span",{class:"text-sm"},"WEB")]),o("div",{class:"p-0 m-0 flex align-items-center justify-content-between"},[o("p",{style:{width:"2rem",height:"5px"},class:"mr-2 kalata"}),o("span",{class:"text-sm"},"KALATA")])],-1),Dt=[Ct],Vt=o("iframe",{id:"iFramePdf",src:"https://s3-eu-central-1.amazonaws.com/kalata-production/production/uploads/tickets/VIC_2023357405.pdf",style:{display:"none"}},null,-1);function Tt(n,t,l,e,g,b){const i=p("Column"),c=p("ProgressBar"),h=p("Button"),u=p("Badge"),_=p("Checkbox"),a=p("OverlayPanel"),f=p("DataTable"),S=p("PaymentStatusDialog"),m=p("Dialog"),T=Se("tooltip");return x(),V("div",We,[s(f,{value:e.responseOrders.time_slots,totalRecords:e.responseOrders.total,lazy:!0,paginator:!1,ref:"dt",loading:e.loading,stripedRows:"",expandedRows:e.expandedRows,"onUpdate:expandedRows":t[1]||(t[1]=w=>e.expandedRows=w)},{empty:k(()=>[M(" Nessuna prenotazione trovata. ")]),expansion:k(w=>[s(f,{value:w.data.orders,class:"m-4 mx-4",expandedRows:e.expandedRows1,"onUpdate:expandedRows":t[0]||(t[0]=v=>e.expandedRows1=v),rowClass:e.getRowClass},{empty:k(()=>[M(" Nessuna prenotazione trovata. ")]),expansion:k(v=>[s(f,{value:v.data.order_item_tickets,class:"m-4 mx-5"},{default:k(()=>[s(i,{header:"Codice biglietto",field:"code"}),s(i,{header:"Tipo biglietto",field:"type"},{body:k(({data:r})=>[s(u,{value:r.ticket_name,class:X([r.ticket_name,"px-3 border-round-lg"])},null,8,["value","class"])]),_:1}),s(i,{header:"Prezzo"},{body:k(({data:r})=>[r.ticket_price?(x(),V("span",pt," € "+O(r.ticket_price),1)):(x(),V("span",ht,"-"))]),_:1}),s(i,null,{header:k(()=>[vt]),body:k(({data:r})=>[o("div",yt,[s(_,{modelValue:r.check_in,"onUpdate:modelValue":D=>r.check_in=D,binary:!0,onChange:D=>e.checkInSingleTicket(r.id,r.check_in,v.data),class:"check_in"},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:2},1024),s(i,null,{header:k(()=>[kt]),body:k(({data:r})=>[o("div",gt,[s(_,{modelValue:r.no_show,"onUpdate:modelValue":D=>r.no_show=D,binary:!0,onChange:D=>e.noShowSingleTicket(r.id,r.no_show,v.data),class:"no_show"},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:2},1024),s(i,{field:"tickets_url"},{header:k(()=>[bt]),body:k(({data:r})=>[o("div",xt,[Z(s(h,{link:"",icon:"pi pi-print",href:r.tickets_url,target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:""},null,8,["href"]),[[T,"Stampa PDF",void 0,{top:!0}]])])]),_:1})]),_:2},1032,["value"])]),default:k(()=>[s(i,{header:"Codice",field:"code"}),s(i,{header:"Acquirente"},{body:k(({data:v})=>[M(O(v.user_name)+" "+O(v.user_surname),1)]),_:1}),s(i,{header:"Q.ta",field:"quantity"}),s(i,{header:"Pagamento"},{body:k(({data:v})=>[v.status?(x(),V("span",Ze,[s(u,{value:e.prettyPaymentStatus(v.status),class:X([v.status,"px-3 border-round-lg"])},null,8,["value","class"])])):A("",!0)]),_:1}),s(i,null,{header:k(()=>[et]),body:k(({data:v})=>[o("div",tt,[o("div",ot,[s(_,{modelValue:v.check_in,"onUpdate:modelValue":r=>v.check_in=r,binary:!0,onChange:r=>e.checkAll(v,v.check_in),class:"check_in"},null,8,["modelValue","onUpdate:modelValue","onChange"]),o("span",nt,O(e.showLabelCheckbox(v)),1)])])]),_:1}),s(i,null,{header:k(()=>[lt]),body:k(({data:v})=>[o("div",st,[o("div",at,[s(_,{modelValue:v.no_show,"onUpdate:modelValue":r=>v.no_show=r,binary:!0,onChange:r=>e.noShowAll(v,v.no_show),class:"no_show"},null,8,["modelValue","onUpdate:modelValue","onChange"]),it])])]),_:1}),s(i,{header:"",style:{"padding-right":"0",width:"6rem"}},{body:k(({data:v})=>[Z(s(h,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",icon:"pi pi-comment",text:"",rounded:"",onClick:r=>e.showNotes(r,v.notes),disabled:!v.notes},null,8,["onClick","disabled"]),[[T,"Note",void 0,{top:!0}]]),s(a,{ref:"op"},{default:k(()=>[M(O(e.op.note),1)]),_:1},512),s(h,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",icon:"pi pi-ellipsis-v",text:"",rounded:"",onClick:r=>e.showMenu(r,v)},null,8,["onClick"]),s(a,{ref:"visibleMenu"},{default:k(()=>[o("ul",rt,[o("li",{onClick:r=>e.printPDF(e.visibleMenu.data.tickets_url)},[dt,M("Stampa PDF ")],8,ct),o("li",{disabled:!e.visibleMenu.data.can_change_status,onClick:r=>e.openPaymentStatusDialog(e.visibleMenu.data)},[mt,M("Cambia stato ")],8,ut),o("li",{disabled:!e.visibleMenu.data.can_cancel,onClick:r=>e.confirmDeleteOrder(r,e.visibleMenu.data)},[ft,M("Elimina ")],8,_t)])]),_:2},1536)]),_:1}),s(i,{expander:"",class:"pl-0 ml-0"})]),_:2},1032,["value","expandedRows","rowClass"]),w.data.orders&&w.data.orders.length>0?(x(),V("div",wt,Dt)):A("",!0)]),default:k(()=>[s(i,{header:"Percorso",field:"course_name",filterMatchMode:"contains",ref:"course_name"},null,512),s(i,{header:"Orario",field:"start_at",filterMatchMode:"contains",ref:"start_at"},null,512),s(i,{header:"Posti prenotati",ref:"availabe_tickets",field:"availabe_tickets"},{body:k(({data:w})=>[o("div",He,[o("p",Qe,O(w.confirmed_seats)+"/"+O(w.remaing_seats+w.confirmed_seats),1),s(c,{value:w.confirmed_seats*100/(w.remaing_seats+w.confirmed_seats),showValue:!1,style:{height:"10px"},class:X(["available-progress",e.getProgressClass(w.confirmed_seats,w.remaing_seats)])},null,8,["value","class"])])]),_:1},512),s(i,{header:"Check-in",ref:"confirmed_tickets",field:"confirmed_tickets"},{body:k(({data:w})=>[o("div",Xe,[o("p",Ye," 0 /"+O(w.confirmed_seats),1),s(c,{value:w.availabe_tickets,showValue:!1,style:{height:"10px"},class:"check-in-progress"},null,8,["value"])])]),_:1},512),s(i,null,{body:k(({data:w})=>[Z(s(h,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-0 text-primary",icon:"pi pi-calendar",text:"",rounded:"",onClick:v=>e.openDialog(w)},null,8,["onClick"]),[[T,"Prenota",void 0,{top:!0}]])]),_:1}),s(i,{expander:"",style:{width:"5rem"}})]),_:1},8,["value","totalRecords","loading","expandedRows"]),s(m,{visible:e.visibleDialog,"onUpdate:visible":t[3]||(t[3]=w=>e.visibleDialog=w),modal:"",header:"Stato pagamento",style:{width:"35rem"}},{default:k(()=>[s(S,{location_permalink:l.filters.location_permalink,time_slot:e.currentTimeSlot,onCloseDialog:t[2]||(t[2]=w=>e.onClosePaymentStatusDialog(w))},null,8,["location_permalink","time_slot"])]),_:1},8,["visible"]),Vt])}const St=P(Ke,[["render",Tt]]),Ot={props:["filters"],setup(n,t){B(()=>{f();let r=K.now();l.value=n.filters,l.value.date=r.toFormat("dd/MM/yyyy"),T()});const l=C({}),e=te(),g=R(),b=I(),i=C([]),c=C(),h=F(()=>e.allLocations),u=F(()=>g.getCalendar),_=function(){},a=async function(r){await g.fetchCalendar(r).then(()=>{}).catch(D=>{L(b,D)})},f=async function(){await e.fetchAllLocations().then(()=>{S()}).catch(r=>{L(b,r)})},S=function(){if(n.filters.location_permalink){const r=h.value.find(D=>D.permalink===n.filters.location_permalink);i.value=r.courses}},m=function(r){let D={};D.month=K.fromJSDate(new Date(r)).month,D.year=K.fromJSDate(new Date(r)).year,D.location_permalink=n.filters.location_permalink,c.value={month:D.month,year:D.year},a(D)},T=function(){let r=K.now(),D={location_permalink:"",month:"",year:""};D.location_permalink=n.filters.location_permalink,D.month=r.month+"",D.year=r.year+"",a(D)},w=function(r){if(u.value.web_dates&&u.value.web_dates.length!=0){let D=r.month+1;D=r.month<10?"0"+D:D;let j=r.day<10?"0"+r.day:r.day,Y=r.year+"-"+D+"-"+j;return u.value.web_dates.find($=>$==Y)}},v=function(r){let D={location_permalink:n.filters.location_permalink,month:r.month,year:r.year};a(D)};return z(n.filters,()=>{if(c.value){let r={location_permalink:n.filters.location_permalink,month:c.value.month,year:c.value.year};a(r)}else T()}),{form:l,courses:i,locations:h,calendar:u,resetField:_,getCourses:S,onDateChange:m,getDayFromDate:w,onMonthChange:v}}},Ft={class:"flex calendar-filter"},Ut={key:0,class:"special-day"};function At(n,t,l,e,g,b){const i=p("Calendar");return x(),V("div",Ft,[s(i,{modelValue:e.form.date,"onUpdate:modelValue":t[0]||(t[0]=c=>e.form.date=c),inline:"",onDateSelect:t[1]||(t[1]=c=>e.onDateChange(c)),onMonthChange:t[2]||(t[2]=c=>e.onMonthChange(c))},{date:k(c=>[e.getDayFromDate(c.date)?(x(),V("div",Ut,[o("span",null,O(c.date.day),1)])):(x(),V(J,{key:1},[M(O(c.date.day),1)],64))]),_:1},8,["modelValue"])])}const Nt=P(Ot,[["render",At]]),Lt={props:["filters"],setup(n,t){B(()=>{l.value=Object.assign({},n.filters),l.value.date=K.now().toFormat("dd/MM/yyyy"),b.value=ie(8,20),b.value.unshift("Tutti gli orari"),l.value.hour="Tutti gli orari"});const l=C({}),e=C([]),g=te();I();const b=C([]),i=R(),c=F(()=>g.allLocations),h=F(()=>i.responseOrders),u=function(){l.value.name=null,l.value.course=e.value[0].name,l.value.hour=b.value[0],t.emit("onSubmit",l.value)},_=function(){if(e.value=[],l.value.location_permalink){const a=c.value.find(f=>f.permalink===l.value.location_permalink);e.value=a.courses,e.value[0].id!="-1"&&e.value.unshift({id:"-1",name:"Tutti i percorsi"}),l.value.course=e.value[0].name}};return z(c,()=>{n.filters.location_permalink&&c.value&&(l.value=Object.assign({},n.filters),l.value.hour||(l.value.hour="Tutti gli orari"),_())}),z(n.filters,()=>{n.filters.location_permalink&&c.value&&l.value.location_permalink&&l.value.location_permalink!=n.filters.location_permalink&&(l.value=Object.assign({},n.filters),l.value.hour||(l.value.hour="Tutti gli orari"),_())}),z(h,()=>{}),{form:l,courses:e,hours:b,locations:c,responseOrders:h,resetField:u,getCourses:_}}},Mt={class:"formgrid grid px-0 align-items-center"},Pt={key:0,class:"field col-4 flex flex-column"},jt=o("label",{for:"typology"},"Filtra per percorso",-1),zt={key:1,class:"field col-3 flex flex-column"},Bt=o("label",{for:"typology"},"Filtra per orario (dalle)",-1),It=o("div",{class:"col-12"},null,-1),Rt={class:"field col-4 flex flex-column"},Et=o("label",{for:"typology"},"Filtra per nome acquirente",-1),qt={class:"flex col-12 justify-content-end pt-1"};function Jt(n,t,l,e,g,b){const i=p("Dropdown"),c=p("InputText"),h=p("Button"),u=p("AccordionTab"),_=p("Accordion");return x(),H(_,{activeIndex:0},{default:k(()=>[s(u,{header:"FILTRI"},{default:k(()=>[o("div",Mt,[e.form.location_permalink?(x(),V("div",Pt,[jt,s(i,{modelValue:e.form.course,"onUpdate:modelValue":t[0]||(t[0]=a=>e.form.course=a),options:e.courses,optionLabel:"name",optionValue:"name",placeholder:""},null,8,["modelValue","options"])])):A("",!0),e.responseOrders?(x(),V("div",zt,[Bt,s(i,{modelValue:e.form.hour,"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.hour=a),options:e.hours,placeholder:""},null,8,["modelValue","options"])])):A("",!0),It,o("div",Rt,[Et,s(c,{modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.name=a),placeholder:""},null,8,["modelValue"])])]),o("div",qt,[s(h,{label:"Ricerca",class:"mr-2",onClick:t[3]||(t[3]=a=>n.$emit("onSubmit",e.form))}),s(h,{label:"Annulla",class:"p-button-outlined",onClick:t[4]||(t[4]=a=>e.resetField())})])]),_:1})]),_:1})}const $t=P(Lt,[["render",Jt]]),Gt={props:["form","price","index","ticket"],setup(n,t){const l=C(0),e=function(){l.value++,b()},g=function(){l.value>0&&l.value--,b()},b=function(){const i={counter:l.value,price:n.price,index:n.index,ticket:n.ticket};t.emit("changeCounter",i)};return{counter:l,decrement:g,increment:e}}},Kt={class:"btn-plus-min flex align-items-center"},Wt={class:"counter"};function Ht(n,t,l,e,g,b){const i=p("Button");return x(),V("div",Kt,[s(i,{icon:"pi pi-minus",rounded:"",outlined:"",severity:"secondary",onClick:e.decrement,disabled:e.counter===0},null,8,["onClick","disabled"]),o("div",Wt,O(e.counter),1),s(i,{icon:"pi pi-plus",rounded:"",outlined:"",severity:"secondary",onClick:e.increment},null,8,["onClick"])])}const Qt=P(Gt,[["render",Ht]]),Xt={props:["tickets","form"],setup(n){const t=C(0),l=C([]),e=C(!1),g=C(),b=R(),i=I(),c=F(()=>b.getDiscount),h=function(f){l.value[f.index]={partial_total:f.price*f.counter,ticket:f.ticket,quantity:f.counter},t.value=0,l.value.forEach(S=>{S.partial_total==0&&l.value.splice(l.value.indexOf(S)),t.value+=S.partial_total})},u=function(){_()},_=async function(){let f=[];l.value.forEach(m=>{f.push({id:m.ticket.id,quantity:m.quantity})});const S={discount_code:g.value,location_permalink:n.form.location_permalink,tickets:f};await b.cost(S).then(()=>{}).catch(m=>{L(i,m)})};return{total:t,partialTotals:l,showDiscount:e,discountCode:g,discount:c,onChangeCounter:h,applyDiscount:u,checkDisabled:function(){return!l.value||l.value.length==0}}},components:{PlusMinusButton:Qt}},Yt={key:0,class:"flex justify-content-between align-items-center"},Zt={class:"flex align-items-center col-9"},eo={class:"col-4 pl-0"},to={class:"text-right col-2"},oo={class:"col-3 flex justify-content-end"},no=o("hr",{class:"mt-3"},null,-1),lo={class:"col-12 m-0 py-0 flex flex-column align-items-start"},so={class:"flex align-items-center justify-content-between py-0"},ao={class:"col-9 flex"},io=o("b",null,"Totale",-1),ro=[io],co={key:0,class:"text-right col-4"},uo={class:"line-through text-sm mr-2"},mo={class:"font-bold"},_o={key:1,class:"col-2 text-right font-bold"},fo={class:"col-3 flex justify-content-end"};function po(n,t,l,e,g,b){const i=p("PlusMinusButton"),c=p("Button"),h=p("InputText"),u=p("InputGroup");return x(),V(J,null,[(x(!0),V(J,null,ne(l.tickets,(_,a)=>{var f,S,m;return x(),V("div",{key:_.id},[((f=_.course)==null?void 0:f.id)==((S=l.form.course)==null?void 0:S.id)?(x(),V("div",Yt,[o("div",Zt,[o("b",eo,O(_.name),1),o("div",to,"€ "+O((m=_.price)==null?void 0:m.toFixed(2)),1)]),o("div",oo,[s(i,{onChangeCounter:t[0]||(t[0]=T=>e.onChangeCounter(T)),price:_.price,index:a,ticket:_},null,8,["price","index","ticket"])])])):A("",!0)])}),128)),no,o("div",lo,[s(c,{label:"Codice sconto",link:"",onClick:t[1]||(t[1]=_=>e.showDiscount?e.showDiscount=!1:e.showDiscount=!0),class:"p-0"}),e.showDiscount?(x(),H(u,{key:0,class:"discount"},{default:k(()=>[s(h,{placeholder:"Inserisci codice",modelValue:e.discountCode,"onUpdate:modelValue":t[2]||(t[2]=_=>e.discountCode=_)},null,8,["modelValue"]),s(c,{label:"Applica",onClick:e.applyDiscount},null,8,["onClick"])]),_:1})):A("",!0)]),o("div",so,[o("div",ao,[o("div",{class:X(["pl-0",e.discount&&e.discount.total_amount?"col-2":"col-4"])},ro,2),e.discount&&e.discount.total_amount?(x(),V("div",co,[o("span",uo,"€ "+O(e.total.toFixed(2)),1),o("span",mo,"€ "+O(e.discount.total_amount.toFixed(2)),1)])):(x(),V("div",_o,"€ "+O(e.total.toFixed(2)),1))]),o("div",fo,[s(c,{label:"Prosegui",onClick:t[3]||(t[3]=_=>n.$emit("nextTab",e.partialTotals)),disabled:e.checkDisabled()},null,8,["disabled"])])])],64)}const ho=P(Xt,[["render",po]]),vo={props:["location_permalink"],setup(n){B(()=>{u()});const t=ee(),l=Ue(),e=R(),g=C({}),b=F(()=>l.allCountries),i=F(()=>t.allOpenTickets),c=F(()=>e.paymentStatus),h=F(()=>e.paymentModeList),u=async function(){await l.fetchAllCountries().then(()=>{g.value.country_id=88,g.value.status={id:"to_pay",name:"Da pagare"}})};return{form:g,countries:b,paymentList:c,paymentModeList:h,open_tickets:i,fetchAllOpenTickets:async function(a){const f={code:a.query.toUpperCase(),location_permalink:n.location_permalink};await t.fetchAllOpenTickets(f)}}}},yo={key:0,class:"formgrid grid"},ko={class:"field col-6"},go=o("label",{for:"user_name"},"Nome",-1),bo={class:"field col-6"},xo=o("label",{for:"user_surname"},"Cognome",-1),wo={class:"field col-6"},Co=o("label",{for:"user_email"},"Email",-1),Do={class:"field col-6"},Vo=o("label",{for:"user_phone"},"Telefono",-1),To={class:"field col-6"},So=o("label",{for:"country_id"},"Nazione",-1),Oo={class:"field col-6"},Fo=o("label",{for:"user_zip"},"Cap",-1),Uo={class:"field col-6"},Ao=o("label",{for:"status"},"Stato pagamento",-1),No={class:"field col-6"},Lo=o("label",{for:"spayment_modetatus"},"Modalità pagamento",-1),Mo={key:0,class:"field col-6 flex flex-column"},Po=o("label",{for:"user_zip"},"Codice biglietto",-1),jo={class:"field col-12"},zo={class:"field flex flex-column"},Bo=o("label",{for:"notes"},"Note",-1),Io={class:"col-12 flex justify-content-end"};function Ro(n,t,l,e,g,b){const i=p("InputText"),c=p("Dropdown"),h=p("AutoComplete"),u=p("Textarea"),_=p("Button");return e.form?(x(),V("div",yo,[o("div",ko,[go,s(i,{type:"text",modelValue:e.form.user_name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.form.user_name=a),class:"w-full"},null,8,["modelValue"])]),o("div",bo,[xo,s(i,{type:"text",modelValue:e.form.user_surname,"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.user_surname=a),class:"w-full"},null,8,["modelValue"])]),o("div",wo,[Co,s(i,{type:"text",modelValue:e.form.user_email,"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.user_email=a),class:"w-full"},null,8,["modelValue"])]),o("div",Do,[Vo,s(i,{type:"text",modelValue:e.form.user_phone,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.user_phone=a),class:"w-full"},null,8,["modelValue"])]),o("div",To,[So,s(c,{modelValue:e.form.country_id,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.country_id=a),options:e.countries,optionLabel:"name",optionValue:"id",class:"w-full"},null,8,["modelValue","options"])]),o("div",Oo,[Fo,s(i,{type:"text",modelValue:e.form.user_zip,"onUpdate:modelValue":t[5]||(t[5]=a=>e.form.user_zip=a),class:"w-full"},null,8,["modelValue"])]),o("div",Uo,[Ao,s(c,{modelValue:e.form.status,"onUpdate:modelValue":t[6]||(t[6]=a=>e.form.status=a),options:e.paymentList,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"])]),o("div",No,[Lo,s(c,{modelValue:e.form.payment_mode,"onUpdate:modelValue":t[7]||(t[7]=a=>e.form.payment_mode=a),options:e.paymentModeList,optionLabel:"label",class:"w-full"},null,8,["modelValue","options"])]),e.form.payment_mode&&e.form.payment_mode.label=="Biglietto a data aperta (voucher)"?(x(),V("div",Mo,[Po,s(h,{modelValue:e.form.open_ticket_codes,"onUpdate:modelValue":t[8]||(t[8]=a=>e.form.open_ticket_codes=a),suggestions:e.open_tickets,class:"uppercase w-full",onComplete:t[9]||(t[9]=a=>e.fetchAllOpenTickets(a)),emptySearchMessage:"Nessun risultato",emptySelectionMessage:"Nessun risultato",optionLabel:"code",optionValue:"id",multiple:""},null,8,["modelValue","suggestions"])])):A("",!0),o("div",jo,[o("div",zo,[Bo,s(u,{modelValue:e.form.notes,"onUpdate:modelValue":t[10]||(t[10]=a=>e.form.notes=a),rows:"5",cols:"30"},null,8,["modelValue"])])]),o("div",Io,[s(_,{label:"Prosegui",onClick:t[11]||(t[11]=a=>n.$emit("nextTab",e.form))})])])):A("",!0)}const Eo=P(vo,[["render",Ro]]),qo={props:["form"],setup(n){B(()=>{u()});const t=C(0),l=C([]),e=C(!1),g=ee(),b=R(),i=I(),c=F(()=>g.allTickets),h=F(()=>b.getCurrentOrder),u=async function(){const m={location_permalink:n.form.location_permalink,api_version:"v2",date:W(n.form.date),course_id:n.form.course.id};await g.fetchAllTickets(m).then(()=>{}).catch(T=>{L(i,T)})},_=function(m){t.value+=1,l.value=Object.assign([],m)},a=function(m){return W(m).includes("Invalid")?se(m):W(m)},f=function(m){S(m)},S=async function(m){var v,r,D;const T=[{start_at:n.form.hour,tickets:[]}];l.value.forEach(j=>{T[0].tickets.push({id:j.ticket.id,quantity:j.quantity})});const w={location_permalink:n.form.location_permalink,country_id:m.country_id,status:m.status.id,user_email:m.user_email,user_name:m.user_name,user_phone:m.user_phone,user_surname:m.user_surname,user_zip:m.user_zip,api_version:"v2",date:n.form.date?a(n.form.date):"",note:m.notes,time_slots:T,payment_method:(v=m.payment_mode)==null?void 0:v.id,course_id:(D=(r=n.form)==null?void 0:r.course)==null?void 0:D.id};await b.createOrder(w).then(()=>{t.value+=1,e.value=!0}).catch(j=>{L(i,j)})};return{tickets:c,active:t,partialTotals:l,showOrderDetail:e,currentOrder:h,formatExplicitDate:Ae,formatDate:ae,onNextTab:_,onConfirmPayment:f}},components:{NewOrderTicketTab:ho,NewOrderFormTab:Eo}},Jo={key:0,class:"info-box"},$o={class:"font-medium"},Go=o("i",{class:"pi pi-map-marker mr-3 font-medium"},null,-1),Ko={class:"font-medium"},Wo=o("i",{class:"pi pi-calendar mr-3 font-medium"},null,-1),Ho={class:"capitalize"},Qo={key:0,class:"flex pb-4"},Xo=o("i",{class:"pi pi-ticket mr-3 font-medium mt-1"},null,-1),Yo={class:"flex flex-column"},Zo={class:"py-5"},en={class:"m-0 text-center font-bold line-height-3"},tn=o("br",null,null,-1),on={class:"flex align-items-center justify-content-center mt-3"};function nn(n,t,l,e,g,b){var a;const i=p("NewOrderTicketTab"),c=p("TabPanel"),h=p("NewOrderFormTab"),u=p("Button"),_=p("TabView");return x(),V(J,null,[l.form?(x(),V("div",Jo,[o("p",$o,[Go,M(" "+O((a=l.form.course)==null?void 0:a.name),1)]),o("p",Ko,[Wo,o("span",Ho,O(e.formatDate(l.form.date)),1),M(" - "+O(l.form.hour),1)]),e.partialTotals&&e.partialTotals.length>0?(x(),V("div",Qo,[Xo,o("div",Yo,[(x(!0),V(J,null,ne(e.partialTotals,f=>{var S;return x(),V("p",{class:"p-0 m-0 pb-1 font-medium",key:f.id},O((S=f.ticket)==null?void 0:S.name)+" x "+O(f.quantity)+" "+O(f.price),1)}),128))])])):A("",!0)])):A("",!0),s(_,{activeIndex:e.active,"onUpdate:activeIndex":t[3]||(t[3]=f=>e.active=f)},{default:k(()=>[s(c,{header:"Seleziona i biglietti",disabled:e.showOrderDetail},{default:k(()=>[s(i,{tickets:e.tickets,form:l.form,onNextTab:t[0]||(t[0]=f=>e.onNextTab(f))},null,8,["tickets","form"])]),_:1},8,["disabled"]),s(c,{header:"Inserisci i dati",disabled:e.showOrderDetail},{default:k(()=>[s(h,{onNextTab:t[1]||(t[1]=f=>e.onConfirmPayment(f)),location_permalink:l.form.location_permalink},null,8,["location_permalink"])]),_:1},8,["disabled"]),e.showOrderDetail?(x(),H(c,{key:0,header:"Ordine completato"},{default:k(()=>[o("div",Zo,[o("div",en,[M(" Ordine "+O(e.currentOrder.reservation_number)+" registrato correttamente!",1),tn,M(" Ti abbiamo inoltrato la conferma via mail. ")]),o("div",on,[s(u,{label:"Stampa biglietti",outlined:"",onClick:t[2]||(t[2]=f=>n.$emit("closeDialog",f))})])])]),_:1})):A("",!0)]),_:1},8,["activeIndex"])],64)}const ln=P(qo,[["render",nn]]),sn={props:["filters"],setup(n){B(()=>{_(),g.value=ie(8,20),t.value=Object.assign({},n.filters),t.value.hour=Me(g.value)});const t=C({}),l=Ne(),e=I(),g=C(),b=C(!1),i=le(),c=C(!1),h=F(()=>l.allCourses),u=F(()=>i.showNewOrderDialog),_=async function(){const m={location_permalink:n.filters.location_permalink,api_version:"v2"};await l.fetchAllCourses(m).then(()=>{}).catch(T=>{L(e,T)})},a=function(){t.value={}},f=function(m){i.setNewOrderDialogVisibility(m)},S=function(){c.value=t.value.open_ticket};return z(n.filters,()=>{if((n.filters.location_permalink!=t.value.location_permalink||!t.value.course)&&_(),t.value.date=n.filters.date,t.value.location_permalink=n.filters.location_permalink,n.filters.hour&&n.filters.hour!="Tutti gli orari"&&(t.value.hour=n.filters.hour),n.filters.course&&!n.filters.course.id){let m=h.value.find(T=>T.name===n.filters.course.name);m&&(t.value.course=m)}}),z(h,()=>{t.value.course=h.value[0]}),{courses:h,form:t,hours:g,disableForm:c,visible:b,onCloseDialog:a,updateDialog:f,onChecked:S,dialogVisible:u,dialogStore:i}},components:{NewOrderDialog:ln}},an=o("h2",{class:"mt-1"},"Nuova prenotazione",-1),rn={class:"formgrid grid px-0 align-items-center mt-4"},cn={key:0,class:"field flex flex-column w-full col-12"},dn=o("label",{for:"typology"},"Scegli il percorso",-1),un={key:1,class:"field flex flex-column w-full col-12"},mn=o("label",{for:"typology"},"Seleziona l'orario",-1),_n={class:"flex justify-content-end align-items-center mt-2"},fn={class:"flex align-items-center justify-content-between w-full"},pn=o("h2",null,"Nuova prenotazione",-1);function hn(n,t,l,e,g,b){const i=p("Dropdown"),c=p("Button"),h=p("NewOrderDialog"),u=p("Dialog"),_=p("Card");return x(),H(_,{class:"mt-4"},{content:k(()=>[an,o("div",rn,[l.filters.location_permalink?(x(),V("div",cn,[dn,s(i,{modelValue:e.form.course,"onUpdate:modelValue":t[0]||(t[0]=a=>e.form.course=a),options:e.courses,optionLabel:"name",disabled:e.disableForm},null,8,["modelValue","options","disabled"])])):A("",!0),l.filters.location_permalink?(x(),V("div",un,[mn,s(i,{modelValue:e.form.hour,"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.hour=a),options:e.hours,disabled:e.disableForm},null,8,["modelValue","options","disabled"])])):A("",!0)]),o("div",_n,[s(c,{label:"Prenota",disabled:!e.form.course||!e.form.hour,onClick:t[2]||(t[2]=a=>e.updateDialog(!0))},null,8,["disabled"])]),s(u,{visible:e.dialogVisible,"onUpdate:visible":t[5]||(t[5]=a=>e.dialogVisible=a),modal:"",header:"Nuova prenotazione",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"},closable:!1},{header:k(()=>[o("div",fn,[pn,s(c,{icon:"pi pi-times",text:"",rounded:"",onClick:t[3]||(t[3]=a=>e.updateDialog(!1))})])]),default:k(()=>[s(h,{form:e.form,onCloseDialog:t[4]||(t[4]=a=>e.onCloseDialog())},null,8,["form"])]),_:1},8,["visible"])]),_:1})}const vn=P(sn,[["render",hn]]),yn={setup(){B(()=>{b.value&&(n.value.location_permalink=b.value.location.permalink,c())});const n=C({}),t=C(),l=Oe(),e=te(),g=I(),b=F(()=>l.currentUser),i=F(()=>e.allLocations),c=async function(){await e.fetchAllLocations().then(()=>{}).catch(u=>{L(g,u)})};return{filters:n,orderTable:t,user:b,locations:i,fetchAllLocations:c,formatDate:ae,onUpdateFilters:function(u){n.value.hour=u.start_at,n.value.course={name:u.course_name},u.course&&(n.value.course={id:u.course}),n.value.name=u.name,u.hour&&(u.hour.start_at?n.value.hour=u.hour.start_at:n.value.hour=u.hour)}}},components:{CalendarFilter:Nt,OrderTable:St,OrderFilter:$t,NewOrderCard:vn}};const kn={class:"flex justify-content-between align-items-center"},gn={class:"field flex flex-column mt-3"},bn={key:0,style:{color:"#495057"}},xn=o("i",{class:"pi pi-calendar mr-2 text-xl"},null,-1),wn={class:"capitalize text-xl"},Cn={class:"flex gap-4"},Dn={key:0,class:"col-3 mt-3"},Vn={class:"col-9 mt-3"};function Tn(n,t,l,e,g,b){const i=p("Dropdown"),c=p("CalendarFilter"),h=p("NewOrderCard"),u=p("OrderFilter"),_=p("OrderTable");return x(),V("div",null,[o("div",kn,[o("div",gn,[s(i,{modelValue:e.filters.location_permalink,"onUpdate:modelValue":t[0]||(t[0]=a=>e.filters.location_permalink=a),options:e.locations,optionLabel:"name",optionValue:"permalink",placeholder:"Filtra per location",class:"location"},null,8,["modelValue","options"])]),e.filters&&e.filters.date?(x(),V("div",bn,[xn,o("span",wn,O(e.formatDate(e.filters.date)),1)])):A("",!0)]),o("div",Cn,[e.filters.location_permalink?(x(),V("div",Dn,[s(c,{filters:e.filters},null,8,["filters"]),s(h,{filters:e.filters},null,8,["filters"])])):A("",!0),o("div",Vn,[s(u,{filters:e.filters,onOnSubmit:t[1]||(t[1]=a=>e.onUpdateFilters(a))},null,8,["filters"]),e.filters.date?(x(),H(_,{key:0,filters:e.filters,ref:"orderTable",class:"mt-4",onUpdateFilters:t[2]||(t[2]=a=>e.onUpdateFilters(a))},null,8,["filters"])):A("",!0)])])])}const An=P(yn,[["render",Tn]]);export{An as default};
