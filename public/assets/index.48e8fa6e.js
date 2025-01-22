import{_ as g,J as h,U as x,S as u,f as t,L as r,F as f,R as d,O as y}from"./index.6588ad1a.js";import{Q as b,a as v,b as k,c as D}from"./QCardActions.061aa7e7.js";import{a as C,Q as p}from"./QCard.613286a3.js";import{Q as V}from"./scroll.8eca6a3c.js";import{Q as _}from"./QPage.ef8fdd8a.js";import{api as m}from"./axios.95274087.js";import"./QItem.3f39de37.js";const T={data(){return{token:"Bearer "+localStorage.getItem("authToken"),searchQuery:"",taxe:[],taxes:[],taxes_list:[],dialogVisible:!1,isEditMode:!1,taxeData:{},columns:[{name:"name",label:"Name",align:"left",field:a=>a.name},{name:"percentage",label:"Porcentaje",align:"left",field:a=>a.percentage},{name:"actions",label:"Actiones",align:"center"}],pagination:{rowsPerPage:5}}},computed:{},methods:{loadTaxes(){var a,e;try{m.get("/api/taxes",{headers:{Authorization:this.token}}).then(l=>{this.taxes_list=l.data.data})}catch(l){this.$q.notify({type:"negative",message:((e=(a=l.response)==null?void 0:a.data)==null?void 0:e.message)||"Error al recibir taxes."})}},openCreateDialog(){this.isEditMode=!1,this.taxeData={},this.dialogVisible=!0},editTaxe(a){this.taxe=a,this.isEditMode=!0,this.taxeData={...a},this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveTaxe(){var e,l,n,s;let a={name:this.taxeData.name,percentage:this.taxeData.percentage};if(this.isEditMode)try{m.put("/api/taxes/"+this.taxeData.id,a,{headers:{Authorization:this.token}}).then(i=>{this.loadTaxes(),this.$q.notify({type:"positive",message:"Impuesto actualizado"})})}catch(i){this.$q.notify({type:"negative",message:((l=(e=i.response)==null?void 0:e.data)==null?void 0:l.message)||"Error al Actualizar Sucursal"})}else try{m.post("/api/taxes/",a,{headers:{Authorization:this.token}}).then(i=>{this.loadTaxes(),this.$q.notify({type:"positive",message:"Impuesto creado"})})}catch(i){this.$q.notify({type:"negative",message:((s=(n=i.response)==null?void 0:n.data)==null?void 0:s.message)||"Error al Actualizar Sucursal"})}this.closeDialog()},deleteTaxe(a){var e,l;try{m.delete("/api/taxes/"+a.id,{headers:{Authorization:this.token}}).then(n=>{this.loadTaxes(),this.$q.notify({type:"positive",message:"impuesto ha sido eliminado"})})}catch(n){this.$q.notify({type:"negative",message:((l=(e=n.response)==null?void 0:e.data)==null?void 0:l.message)||"Error al Eliminar impuesto"})}}},mounted(){this.loadTaxes()}},Q={class:"text-h6"};function q(a,e,l,n,s,i){return h(),x(f,null,[e[4]||(e[4]=u("h5",{class:"q-ml-md"},"Impuestos",-1)),t(_,{class:"custon-page"},{default:r(()=>[t(d,{onClick:i.openCreateDialog,label:"Nuevo Impuesto",color:"primary",class:"q-mb-md"},null,8,["onClick"]),t(b,{rows:s.taxes_list,columns:s.columns,"row-key":"id",pagination:s.pagination,onRequest:i.loadTaxes,"rows-per-page-options":[5,10,15]},{"body-cell-actions":r(o=>[t(v,{props:o},{default:r(()=>[t(d,{flat:"",label:"Edit",color:"primary",onClick:c=>i.editTaxe(o.row)},null,8,["onClick"]),t(d,{flat:"",label:"Delete",color:"negative",onClick:c=>i.deleteTaxe(o.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),t(k,{modelValue:s.dialogVisible,"onUpdate:modelValue":e[3]||(e[3]=o=>s.dialogVisible=o)},{default:r(()=>[t(C,null,{default:r(()=>[t(V,null,{default:r(()=>[u("div",Q,y(s.isEditMode?"Editar impuesto":"Crear Impuesto"),1),t(p,{modelValue:s.taxeData.name,"onUpdate:modelValue":e[0]||(e[0]=o=>s.taxeData.name=o),label:"Nombre",required:""},null,8,["modelValue"]),t(p,{modelValue:s.taxeData.percentage,"onUpdate:modelValue":e[1]||(e[1]=o=>s.taxeData.percentage=o),label:"Porcentaje",required:""},null,8,["modelValue"])]),_:1}),t(D,null,{default:r(()=>[t(d,{flat:"",label:"Cancel",onClick:i.closeDialog},null,8,["onClick"]),t(d,{flat:"",label:"Guardar",color:"primary",onClick:e[2]||(e[2]=o=>i.saveTaxe(a.row))})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var M=g(T,[["render",q]]);export{M as default};
