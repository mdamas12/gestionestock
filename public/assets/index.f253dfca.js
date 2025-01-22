import{_ as E,J as D,U as V,S as m,f as a,L as s,F as v,R as d,ab as k,O as _}from"./index.f0b3f861.js";import{Q as u,a as c}from"./QCard.c64cd85c.js";import{Q as y,a as b,b as g,c as h}from"./QCardActions.a653b8a3.js";import{Q as w,a as C}from"./QPopupProxy.04d329ab.js";import{Q as f}from"./scroll.86f6f8b4.js";import{Q as T}from"./QPage.6b2bbe8b.js";import{api as p}from"./axios.91f4ec08.js";import"./QItem.1ba1bb97.js";const Q={data(){return{token:"Bearer "+localStorage.getItem("authToken"),equipments_list:[],EquipmentData:[],dialogVisible:!1,isEditMode:!1,DialogTechnical:!1,diagolo_diagnostic:!1,diagolo_report:!1,TechnicalList:[],searchQuery:"",selectedDate:"",asign:"",diagnostic:"",report:"",columns:[{name:"date",label:"Fecha",align:"left",field:t=>t.date},{name:"name",label:"Name",align:"left",field:t=>t.name},{name:"code",label:"codigo",align:"left",field:t=>t.code},{name:"description",label:"Description",align:"left",field:t=>t.description},{name:"user_id",label:"Asignado A",align:"left",field:t=>t.user?t.user.name:""},{name:"diagnostic",label:"diagnostico ",align:"left",field:t=>t.diagnostic},{name:"report",label:"Reporte ",align:"left",field:t=>t.report},{name:"status",label:"Estado",align:"left",field:t=>t.status},{name:"actions",label:"Actions",align:"center"}],columns_technical:[{name:"name",label:"Nombre",align:"left",field:t=>t.name},{name:"email",label:"Email",align:"left",field:t=>t.email},,{name:"actions",label:"Actiones",align:"center"}],pagination:{rowsPerPage:5}}},computed:{},methods:{openDatePicker(){this.$refs.datePopup.show()},closeDatePicker(){this.$refs.datePopup.hide()},loadEquipment(){var t,e;try{p.get("/api/equipments/bytechnical",{headers:{Authorization:this.token}}).then(o=>{console.log(o.data.data),this.equipments_list=o.data.data})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al recibir Equipos."})}},openCreateDialog(){this.isEditMode=!1,this.EquipmentData={},this.dialogVisible=!0,this.EquipmentData.user_id=this.equipments_list[0].user.id,this.EquipmentData.technical=this.equipments_list[0].user.name},saveEquipment(){var o,n;let t=this.EquipmentData.user_id?"assigned":"pending",e={date:this.selectedDate,name:this.EquipmentData.name,code:this.EquipmentData.code,description:this.EquipmentData.description,user_id:this.EquipmentData.user_id,status:t};try{p.post("/api/equipments/create",e,{headers:{Authorization:this.token}}).then(i=>{this.$q.notify({type:"positive",message:"Soporte tecnico creado"}),this.loadEquipment(),this.dialogVisible=!1})}catch(i){this.$q.notify({type:"negative",message:((n=(o=i.response)==null?void 0:o.data)==null?void 0:n.message)||"Error al obtener clientes"})}},Asignar(){},deleteEquipment(){},StatusbyEquipment(){},OpenSearchTechnical(){this.asign="istoSave",this.loadTechnical(),this.DialogTechnical=!0},OpenSearchTechnicalAsign(t){this.equipment_id=t.id,this.loadTechnical(),this.DialogTechnical=!0},loadTechnical(){var t,e;try{p.get("/api/users/get-technical",{headers:{Authorization:this.token}}).then(o=>{this.TechnicalList=o.data.data})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},SelectTechnical(t){var e,o;if(this.asign=="toSave")this.EquipmentData.user_id=t.id,this.EquipmentData.technical=t.name;else try{let n={user_id:t.id};p.put("/api/equipments/asign/"+this.equipment_id,n,{headers:{Authorization:this.token}}).then(i=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"Servicio Asignado"})})}catch(n){this.$q.notify({type:"negative",message:((o=(e=n.response)==null?void 0:e.data)==null?void 0:o.message)||"Error al obtener clientes"})}this.DialogTechnical=!1},DiagnosticEquipment(t){this.equipment_id=t.id,this.diagolo_diagnostic=!0},saveDiagnostic(){var t,e;try{let o={diagnostic:this.diagnostic};p.put("/api/equipments/diagnostic/"+this.equipment_id,o,{headers:{Authorization:this.token}}).then(n=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"Diagnostico procesado"}),this.diagolo_diagnostic=!1})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},ReportEquipment(t){this.equipment_id=t.id,this.diagolo_report=!0},saveReport(){var t,e;try{let o={report:this.report};p.put("/api/equipments/report/"+this.equipment_id,o,{headers:{Authorization:this.token}}).then(n=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"reporte procesado"}),this.diagolo_report=!1})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al guardar reporte"})}},deleteEquipment(t){var e,o;try{p.delete("/api/equipments/delete/"+t.id,{headers:{Authorization:this.token}}).then(n=>{this.loadEquipment(),this.$q.notify({type:"positive",message:"Soporte tecnico Eliminado"})})}catch(n){this.$q.notify({type:"negative",message:((o=(e=n.response)==null?void 0:e.data)==null?void 0:o.message)||"Error al eliminar soporte"})}}},mounted(){this.loadEquipment()}},S={class:"text-h6"},x={class:"q-pa-md"},A={class:"q-pa-md flex row"};function U(t,e,o,n,i,r){return D(),V(v,null,[e[22]||(e[22]=m("h5",{class:"q-ml-md"},"Mis Equipos",-1)),a(T,{class:"custon-page"},{default:s(()=>[a(d,{onClick:r.openCreateDialog,label:"Nuevo Equipo",color:"primary",class:"q-mb-md"},null,8,["onClick"]),a(u,{modelValue:i.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=l=>i.searchQuery=l),label:"Buscar Equipo",debounce:"300",class:"q-mb-md",onKeydown:e[1]||(e[1]=k(l=>t.searchBranch(),["enter"]))},null,8,["modelValue"]),a(y,{rows:i.equipments_list,columns:i.columns,"row-key":"id",pagination:i.pagination,onRequest:r.loadEquipment,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[a(b,{props:l},{default:s(()=>[a(d,{flat:"",label:"Diagnostico",color:"green",onClick:q=>r.DiagnosticEquipment(l.row)},null,8,["onClick"]),a(d,{flat:"",label:"Completar",color:"blue",onClick:q=>r.ReportEquipment(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),a(g,{modelValue:i.dialogVisible,"onUpdate:modelValue":e[10]||(e[10]=l=>i.dialogVisible=l)},{default:s(()=>[a(c,{style:{width:"80%",height:"80%"}},{default:s(()=>[a(f,null,{default:s(()=>[m("div",S,_(i.isEditMode?"Editar Soporte":"Crear Soporte Tecnico"),1),m("div",x,[a(u,{modelValue:i.selectedDate,"onUpdate:modelValue":e[2]||(e[2]=l=>i.selectedDate=l),label:"Selecciona una fecha",readonly:"",outlined:"",class:"q-mb-md"},{append:s(()=>[a(d,{flat:"",round:"",icon:"event",onClick:r.openDatePicker},null,8,["onClick"])]),_:1},8,["modelValue"]),a(w,{ref:"datePopup","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[a(C,{modelValue:i.selectedDate,"onUpdate:modelValue":e[3]||(e[3]=l=>i.selectedDate=l),mask:"DD-MM-YYYY",color:"primary",onInput:r.closeDatePicker},null,8,["modelValue","onInput"])]),_:1},512)]),a(u,{modelValue:i.EquipmentData.name,"onUpdate:modelValue":e[4]||(e[4]=l=>i.EquipmentData.name=l),label:"Nombre",required:""},null,8,["modelValue"]),a(u,{modelValue:i.EquipmentData.code,"onUpdate:modelValue":e[5]||(e[5]=l=>i.EquipmentData.code=l),label:"codigo",required:""},null,8,["modelValue"]),a(u,{modelValue:i.EquipmentData.description,"onUpdate:modelValue":e[6]||(e[6]=l=>i.EquipmentData.description=l),label:"Descripcion",required:""},null,8,["modelValue"]),m("div",A,[a(u,{readonly:"",modelValue:i.EquipmentData.technical,"onUpdate:modelValue":e[7]||(e[7]=l=>i.EquipmentData.technical=l),label:"Tecnico",class:"q-mr-md col-8"},null,8,["modelValue"])])]),_:1}),a(h,null,{default:s(()=>[a(d,{flat:"",label:"Cancel",onClick:e[8]||(e[8]=l=>{i.dialogVisible=!1})}),a(d,{flat:"",label:"Guardar",color:"primary",onClick:e[9]||(e[9]=l=>r.saveEquipment())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(g,{modelValue:i.DialogTechnical,"onUpdate:modelValue":e[11]||(e[11]=l=>i.DialogTechnical=l)},{default:s(()=>[a(c,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[a(y,{rows:i.TechnicalList,columns:i.columns_technical,"row-key":"id",pagination:i.pagination,onRequest:r.loadTechnical,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[a(b,{props:l},{default:s(()=>[a(d,{flat:"",label:"Seleccionar",color:"primary",onClick:q=>r.SelectTechnical(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1})]),_:1},8,["modelValue"]),a(g,{modelValue:i.diagolo_diagnostic,"onUpdate:modelValue":e[15]||(e[15]=l=>i.diagolo_diagnostic=l)},{default:s(()=>[a(c,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[a(f,null,{default:s(()=>[e[20]||(e[20]=m("div",{class:"text-h6"},"Disagnostico del equipo",-1)),a(u,{type:"text",modelValue:i.diagnostic,"onUpdate:modelValue":e[12]||(e[12]=l=>i.diagnostic=l),label:"Diagnostico",required:""},null,8,["modelValue"])]),_:1}),a(h,null,{default:s(()=>[a(d,{flat:"",label:"Cancel",onClick:e[13]||(e[13]=l=>{i.diagolo_diagnostic=!1})}),a(d,{flat:"",label:"Guardar",color:"primary",onClick:e[14]||(e[14]=l=>r.saveDiagnostic())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(g,{modelValue:i.diagolo_report,"onUpdate:modelValue":e[19]||(e[19]=l=>i.diagolo_report=l)},{default:s(()=>[a(c,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[a(f,null,{default:s(()=>[e[21]||(e[21]=m("div",{class:"text-h6"},"Reporte del equipo",-1)),a(u,{type:"text",modelValue:i.report,"onUpdate:modelValue":e[16]||(e[16]=l=>i.report=l),label:"Diagnostico",required:""},null,8,["modelValue"])]),_:1}),a(h,null,{default:s(()=>[a(d,{flat:"",label:"Cancel",onClick:e[17]||(e[17]=l=>{i.diagolo_report=!1})}),a(d,{flat:"",label:"Guardar",color:"primary",onClick:e[18]||(e[18]=l=>r.saveReport())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var Y=E(Q,[["render",U]]);export{Y as default};
