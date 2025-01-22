import{Q as n}from"./scroll.9db32f34.js";import{a as p,Q as i}from"./QCard.c69fe4f2.js";import{_ as f,J as w,K as c,L as o,f as a,S as d,R as m}from"./index.7f859839.js";import{Q as P}from"./QForm.db4e4c27.js";import{Q as h}from"./QPage.0a745e95.js";import{a as g,b as y}from"./QLayout.63b06b74.js";import{api as C}from"./axios.249393ed.js";const b={name:"ResetPasswordPage",data(){return{email:"",token:"",newPassword:"",newPasswordConfirm:""}},mounted(){const r=new URLSearchParams(window.location.search);this.token=r.get("token"),this.email=r.get("email")},methods:{async resetPassword(){var r,e;if(this.newPassword!=this.newPasswordConfirm){alert("Los campos (Contrase\xF1a/ Confirmar Contrase\xF1a) no coinciden");return}try{await C.post("/api/reset-password",{token:this.token,email:this.email,password:this.newPassword,password_confirmation:this.newPasswordConfirm}),this.$q.notify({type:"positive",message:"Contrase\xF1a actualizada. Ahora puedes iniciar sesi\xF3n."}),this.$router.push("/login")}catch(l){this.$q.notify({type:"negative",message:((e=(r=l.response)==null?void 0:r.data)==null?void 0:e.message)||"Error al restablecer la contrase\xF1a."})}}}};function Q(r,e,l,v,t,u){return w(),c(g,{view:"hHh lpR fFf"},{default:o(()=>[a(y,null,{default:o(()=>[a(h,{class:"q-pa-md flex flex-center"},{default:o(()=>[a(p,{style:{width:"400px"}},{default:o(()=>[a(n,null,{default:o(()=>e[3]||(e[3]=[d("div",{class:"text-h6"},"Restablecer contrase\xF1a",-1),d("p",null,"Ingresa tu nueva contrase\xF1a.",-1)])),_:1}),a(n,null,{default:o(()=>[a(P,{onSubmit:u.resetPassword},{default:o(()=>[a(i,{modelValue:t.newPassword,"onUpdate:modelValue":e[0]||(e[0]=s=>t.newPassword=s),label:"Nueva contrase\xF1a",type:"password",rules:[s=>!!s||"La contrase\xF1a es obligatoria"],outlined:""},null,8,["modelValue","rules"]),a(i,{modelValue:t.newPasswordConfirm,"onUpdate:modelValue":e[1]||(e[1]=s=>t.newPasswordConfirm=s),label:"confirma contrase\xF1a",type:"password",rules:[s=>!!s||"La contrase\xF1a es obligatoria"],outlined:""},null,8,["modelValue","rules"]),a(m,{label:"Actualizar contrase\xF1a",type:"submit",color:"primary",class:"q-mt-md full-width"})]),_:1},8,["onSubmit"])]),_:1}),a(n,null,{default:o(()=>[a(m,{flat:"",label:"Volver al inicio de sesi\xF3n",onClick:e[2]||(e[2]=s=>r.$router.push("/login")),color:"primary"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var S=f(b,[["render",Q]]);export{S as default};
