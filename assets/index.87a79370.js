import{_ as v,r as C,J as w,U as k,S as m,f as o,L as s,F as D,R as d,ab as V,O as q,aD as P}from"./index.f0b3f861.js";import{Q as u,a as g}from"./QCard.c64cd85c.js";import{Q as y,a as h,b as f,d as x,c as S,e as U}from"./QCardActions.a653b8a3.js";import{Q as _,a as B}from"./QPopupProxy.04d329ab.js";import{Q as b}from"./scroll.86f6f8b4.js";import{Q as E}from"./QPage.6b2bbe8b.js";import{api as p}from"./axios.91f4ec08.js";import{h as L,E as Q}from"./html2canvas.esm.ee07c5fc.js";import"./QItem.1ba1bb97.js";const A={data(){return{token:"Bearer "+localStorage.getItem("authToken"),date:C("2019/02/01"),searchSale:"",selectedDate:"",SearchSeller:"",productsSale:[],saleDataView:[],stockByproductSale:[],salesList:[],SellerList:[],product:[],quantity_total:0,productsSelected:[],sale:[],saleData:[],dataCustomer:[],customersList:[],ProductsList:[],productsStockList:[],quantityByStock:0,stockSelect:[],stockSelectList:[],dialogPrintSale:!1,dialogSale:!1,dialogViewSale:!1,DialogStockbyproductSale:!1,DialogCustomer:!1,dialogNewCustomer:!1,DialogProduct:!1,DialogStock:!1,DialogQuantityStock:!1,DialogSller:!1,isEditMode:!1,isModify:!1,SearchCustomer:"",SearchProduct:"",taxes:[],taxesSelected:[],columns:[{name:"date",label:"Fecha",align:"left",field:t=>t.date},{name:"customer_id",label:"Cliente",align:"left",field:t=>t.customer.name+" "+t.customer.lastname},{name:"user_id",label:"Vendedor",align:"left",field:t=>t.user.name},{name:"total_amount",label:"Monto total",align:"left",field:t=>t.total_amount},{name:"taxes_amount",label:"Impuesto total",align:"left",field:t=>t.taxes_amount},{name:"payment_status",label:"Estado",align:"left",field:t=>t.payment_status},{name:"actions",label:"Actions",align:"center"}],columns_customer:[{name:"name",label:"Nombre",align:"left",field:t=>t.name+" "+t.lastname},{name:"email",label:"Email",align:"left",field:t=>t.email},{name:"phone",label:"Telefono",align:"left",field:t=>t.phone},{name:"actions",label:"Actions",align:"center"}],pagination:{rowsPerPage:5},payment_status_list:[{label:"pending",value:"pending"},{label:"partial",value:"partial"},{label:"completed",value:"completed"}],columns_seller:[{name:"name",label:"Nombre",align:"left",field:t=>t.name},{name:"email",label:"Email",align:"left",field:t=>t.email},,{name:"actions",label:"Actions",align:"center"}],columnsProductsSelected:[{name:"name",label:"Nombre",align:"left",field:t=>t.name},{name:"description",label:"Descripcion",align:"left",field:t=>t.description},{name:"category",label:"Categoria",align:"left",field:t=>t.category},{name:"price",label:"Precio",align:"left",field:t=>t.price},{name:"quatity",label:"Cantidad",align:"left",field:t=>t.quantity},{name:"amount",label:"Monto",align:"left",field:t=>t.amount},,{name:"actions",label:"Actions",align:"center"}],columnsProductsViewSale:[{name:"name",label:"Nombre",align:"left",field:t=>t.product.name},{name:"description",label:"Descripcion",align:"left",field:t=>t.product.description},{name:"category",label:"Categoria",align:"left",field:t=>t.product.category.name},{name:"price",label:"Precio",align:"left",field:t=>t.product.price},{name:"quatity",label:"Cantidad",align:"left",field:t=>t.quantity},{name:"amount",label:"Monto",align:"left",field:t=>t.amount},,{name:"actions",label:"Actions",align:"center"}],columnsProductsList:[{name:"name",label:"Nombre",align:"left",field:t=>t.name},{name:"description",label:"Descripcion",align:"left",field:t=>t.description},{name:"category",label:"Categoria",align:"left",field:t=>t.category.name},{name:"price",label:"Precio",align:"left",field:t=>t.price},{name:"actions",label:"Actions",align:"center"}],columns_stock:[{name:"branch",label:"Sucursal/inventario",align:"left",field:t=>t.branch.name},{name:"quantity_available",label:"Cantidad disponible",align:"left",field:t=>t.quantity_available},{name:"minimum_quantity",label:"minimo",align:"left",field:t=>t.minimum_quantity},{name:"selected_quantity",label:"Cantidad seleccionada",align:"left",field:t=>t.selected_quantity},{name:"actions",label:"Actions",align:"center"}],columns_stockBySale:[{name:"branch",label:"Sucursal/inventario",align:"left",field:t=>t.stock.branch.name},{name:"selected_quantity",label:"Cantidad seleccionada",align:"left",field:t=>t.quantity},{name:"quantity_available",label:"Cantidad Disponible",align:"left",field:t=>t.stock.quantity_available}],pagination:{rowsPerPage:5},pagination:{rowsPerPage:200}}},computed:{},methods:{openDatePicker(){this.$refs.datePopup.show()},closeDatePicker(){this.$refs.datePopup.hide()},loadsales(){var t,e;try{p.get("/api/sales/all",{headers:{Authorization:this.token}}).then(n=>{this.salesList=n.data.data})}catch(n){this.$q.notify({type:"negative",message:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener Ventas"})}},ShowCreateVenta(){this.isEditMode=!1,this.saleData.date="",this.saleData={},this.productsSelected=[],this.dialogSale=!0},gosearchSale(){},listProductsBySale(t){},deleteSale(t){var e,n;try{p.delete("/api/sales/delete/"+t.id,{headers:{Authorization:this.token}}).then(r=>{this.$q.notify({type:"prositive",message:"Venta Eliminada"}),this.loadsales()})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al obtener Ventas"})}},OpenSearchSeller(){this.loadSeller(),this.DialogSller=!0},saveSale(){var e,n;if(this.productsSelected.length<1){alert("Debes seleccionar al menos un producto para procesar la venta");return}let t={date:this.selectedDate,customer:this.saleData.customer_id,seller:this.saleData.user_id,amount:this.saleData.total_amount,taxes_amount:this.saleData.taxes_amount,status:this.saleData.payment_status.value,details:this.productsSelected,taxes:this.taxesSelected};try{p.post("/api/sales/create",t,{headers:{Authorization:this.token}}).then(r=>{this.$q.notify({type:"positive",message:"La venta ha sido registrada"}),this.dialogSale=!1,this.loadsales()})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al guardar venta"})}},loadCustomers(){var t,e;try{p.get("/api/customers/",{headers:{Authorization:this.token}}).then(n=>{this.customersList=n.data.data})}catch(n){this.$q.notify({type:"negative",message:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},OpenSearchCustomer(){this.DialogCustomer=!0},ShowCreateCustomer(){this.DataCustomer={},this.dialogNewCustomer=!0},saveCustomer(){var e,n;let t={name:this.dataCustomer.name,lastname:this.dataCustomer.lastname,identification:this.dataCustomer.identification,email:this.dataCustomer.email,phone:this.dataCustomer.phone,address:this.dataCustomer.address};try{p.post("/api/customers/",t,{headers:{Authorization:this.token}}).then(r=>{this.$q.notify({type:"positive",message:"Cliente Registrado"}),this.loadCustomers(),this.dialogNewCustomer=!1})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al obtener clientes"})}},goSearchCustomer(){},goSearchSeller(t){},SelectCustomer(t){this.saleData.customer_id=t.id,this.saleData.customer=t.name+" "+t.lastname,this.DialogCustomer=!1},loadSeller(){var t,e;try{p.get("/api/users/get-seller",{headers:{Authorization:this.token}}).then(n=>{this.SellerList=n.data.data})}catch(n){this.$q.notify({type:"negative",message:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},SelectSeller(t){this.saleData.user_id=t.id,this.saleData.seller=t.name,this.DialogSller=!1},addProduct(){this.loadProducts(),this.DialogProduct=!0},removeProduct(t){alert("ready to remove")},loadProducts(){var t,e;try{p.get("/api/products/list",{headers:{Authorization:this.token}}).then(n=>{this.ProductsList=n.data.data,this.ProductsList.forEach((r,a)=>{this.productsSelected.forEach((i,l)=>{r.id===i.id&&this.ProductsList.splice(a,1)})})})}catch(n){this.$q.notify({type:"negative",message:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},showStock(t){var e,n;this.product=t;try{p.get("/api/products/stocks/"+t.id,{headers:{Authorization:this.token}}).then(r=>{this.productsStockList=r.data.data,this.DialogStock=!0})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al obtener stocks"})}},modifyStock(t){var e,n;this.product=t;try{p.get("/api/products/stocks/"+t.id,{headers:{Authorization:this.token}}).then(r=>{this.productsStockList=r.data.data,this.product.stocks.length>0&&(this.stockSelectList=this.product.stocks,this.productsStockList.forEach((a,i)=>{this.product.stocks.forEach((l,c)=>{a.id==l.stock_id&&(a.selected_quantity=l.quantity)})})),this.DialogStock=!0})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al obtener stocks"})}},ShowQuantityStock(t){this.stockSelect=t,this.quantityByStock=t.selected_quantity,this.DialogQuantityStock=!0},saveQuantity(){if((!this.quantityByStock||this.quantityByStock=="")&&alert("debes ingresar una cantidad"),parseFloat(this.quantityByStock)<=0&&alert("debes ingresar una cantidad Mayor o igual a 1"),parseFloat(this.quantityByStock)>this.stockSelect.quantity_available){alert("La cantidad supera la cantidad en Stock"),this.quantityByStock="";return}else{if(this.stockSelectList.length>0&&this.stockSelectList.forEach((t,e)=>{t.stock_id==this.stockSelect.id&&(t.quantity=parseFloat(this.quantityByStock),this.isModify=!0)}),this.isModify==!1){let t={stock_id:this.stockSelect.id,quantity:parseFloat(this.quantityByStock)};this.quantity_total=this.quantity_total+parseFloat(this.quantityByStock),this.stockSelectList.push(t)}this.productsStockList.forEach((t,e)=>{t.id===this.stockSelect.id&&(t.selected_quantity=parseFloat(this.quantityByStock))}),this.isModify=!1,this.quantityByStock="",this.DialogQuantityStock=!1}},goSearchProduct(){},SelectProduct(){},addProductSale(){let t=!1;if(this.productsSelected.length>0&&this.productsSelected.forEach((e,n)=>{if(e.id==this.product.id){t=!0;let r=0;e.stocks.forEach((a,i)=>{r=r+a.quantity}),e.quantity=parseFloat(r),e.amount=e.price*parseFloat(r),this.$q.notify({type:"primary",message:"Producto modificado en venta"})}}),t==!1){let e={id:this.product.id,name:this.product.name,description:this.product.description,category:this.product.category.name,price:this.product.price,quantity:parseFloat(this.quantity_total),amount:this.product.price*parseFloat(this.quantity_total),stocks:this.stockSelectList};this.quantity_total=0,this.productsSelected.push(e),this.$q.notify({type:"positive",message:"Producto agregado a la venta"})}this.saleData.total_amount=0,this.productsSelected.forEach((e,n)=>{this.saleData.total_amount=this.saleData.total_amount+e.amount}),this.calcularTaxes(),this.DialogStock=!1,this.DialogProduct=!1,this.stockSelectList=[]},updateProductSelect(t){},ViewDetails(t){this.saleDataView=t,this.saleDataView.total_payment=parseFloat(this.saleDataView.total_amount)+parseFloat(this.saleDataView.taxes_amount),this.loadProductBySale(t.detail_sale),this.dialogViewSale=!0},ViewStocksproduct(t){var e,n;try{p.get("/api/sales/getstocks/"+t.id,{headers:{Authorization:this.token}}).then(r=>{this.stockByproductSale=r.data.data,this.DialogStockbyproductSale=!0})}catch(r){this.$q.notify({type:"negative",message:((n=(e=r.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al obtener stocks"})}},loadProductBySale(t){this.productsSale=t},loadTaxes(){var t,e;try{p.get("/api/taxes",{headers:{Authorization:this.token}}).then(n=>{this.taxes=n.data.data})}catch(n){this.$q.notify({type:"negative",message:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener taxes"})}},calcularTaxes(){let t=0;this.taxesSelected.forEach((e,n)=>{this.taxes.forEach((r,a)=>{if(e==r.id){let i=this.saleData.total_amount*r.percentage/100;t=t+i}})}),this.saleData.taxes_amount=t},preview(t){this.saleDataView=t,this.saleDataView.total_payment=parseFloat(this.saleDataView.total_amount)+parseFloat(this.saleDataView.taxes_amount),this.loadProductBySale(t.detail_sale),this.dialogPrintSale=!0},async generatePDF(){setTimeout(async()=>{const t=this.$refs.contentToPrint;if(!t){console.error("El elemento con ref 'contentToPrint' no est\xE1 disponible.");return}try{const e=await L(t,{scale:2}),n=e.toDataURL("image/png"),r=new Q("p","mm","a4"),a=210,i=e.height*a/e.width;r.addImage(n,"PNG",0,0,a,i),r.save("sale-vaucher.pdf")}catch(e){console.error("Error al generar el PDF:",e)}},500)}},mounted(){this.loadsales(),this.loadCustomers(),this.loadTaxes()}},F={style:{width:"90%","max-width":"90vw",height:"auto"},class:"bg-white rounded"},M={class:"text-h6"},R={class:"q-pa-md"},N={class:"q-pa-md flex row"},T={class:"q-pa-md flex row"},z={class:"row"},I={style:{width:"90%","max-width":"90vw",height:"auto"},class:"bg-white rounded"},K={class:"q-pa-md row border-b border-primary"},O={class:"q-pa-md row"},j={style:{width:"90%","max-width":"90vw",height:"auto"},class:"bg-white rounded"},Y={ref:"contentToPrint"},G={class:"q-pa-md row border-b border-primary"},H={class:"q-pa-md row"},J={class:"q-pa-md flex justify-between items-center"},W={class:"col-6"},X={class:"q-pa-md flex justify-left items-center"},Z={class:""},$={class:"q-pa-md flex justify-left items-center"},ee={class:""};function le(t,e,n,r,a,i){return w(),k(D,null,[e[72]||(e[72]=m("h5",{class:"q-ml-md"},"Ventas",-1)),o(E,{class:"custon-page"},{default:s(()=>[o(d,{onClick:e[0]||(e[0]=l=>i.ShowCreateVenta()),label:"Nuevo Venta",color:"primary",class:"q-mb-md"}),o(u,{modelValue:a.searchSale,"onUpdate:modelValue":e[1]||(e[1]=l=>a.searchSale=l),label:"Buscar Venta",debounce:"300",class:"q-mb-md",onKeydown:e[2]||(e[2]=V(l=>i.gosearchSale(),["enter"]))},null,8,["modelValue"]),o(y,{rows:a.salesList,columns:a.columns,"row-key":"id",pagination:a.pagination,onRequest:i.loadsales,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Detalles",color:"green",onClick:c=>i.ViewDetails(l.row)},null,8,["onClick"]),o(d,{flat:"",label:"Imprimir",color:"yellow",onClick:c=>i.preview(l.row)},null,8,["onClick"]),o(d,{flat:"",label:"Anular",color:"negative",onClick:c=>i.deleteSale(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),o(f,{modelValue:a.dialogSale,"onUpdate:modelValue":e[16]||(e[16]=l=>a.dialogSale=l),style:{width:"90%",height:"90%"}},{default:s(()=>[m("div",F,[o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[m("div",M,q(a.isEditMode?"Editar Venta":"Crear Venta"),1),m("div",R,[o(u,{modelValue:a.selectedDate,"onUpdate:modelValue":e[3]||(e[3]=l=>a.selectedDate=l),label:"Selecciona una fecha",readonly:"",outlined:"",class:"q-mb-md"},{append:s(()=>[o(d,{flat:"",round:"",icon:"event",onClick:i.openDatePicker},null,8,["onClick"])]),_:1},8,["modelValue"]),o(_,{ref:"datePopup","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[o(B,{modelValue:a.selectedDate,"onUpdate:modelValue":e[4]||(e[4]=l=>a.selectedDate=l),mask:"DD-MM-YYYY",color:"primary",onInput:i.closeDatePicker},null,8,["modelValue","onInput"])]),_:1},512)]),m("div",N,[o(u,{modelValue:a.saleData.customer,"onUpdate:modelValue":e[5]||(e[5]=l=>a.saleData.customer=l),label:"Cliente",class:"q-mr-md col-10",readonly:""},null,8,["modelValue"]),o(d,{label:"Seleccionar",color:"primary",class:"col-1",onClick:e[6]||(e[6]=l=>i.OpenSearchCustomer())})]),m("div",T,[o(u,{readonly:"",modelValue:a.saleData.seller,"onUpdate:modelValue":e[7]||(e[7]=l=>a.saleData.seller=l),label:"Vendedor",class:"q-mr-md col-10"},null,8,["modelValue"]),o(d,{label:"Seleccionar",color:"primary",class:"q-mr-md col-1",onClick:e[8]||(e[8]=l=>i.OpenSearchSeller())})]),o(d,{onClick:e[9]||(e[9]=l=>i.addProduct()),label:"Agregar Producto",color:"primary",class:"q-mb-md"}),o(y,{rows:a.productsSelected,columns:a.columnsProductsSelected,"row-key":"id",pagination:a.pagination,onRequest:i.addProduct,"rows-per-page-options":[5,10,15],class:"q-mb-lg"},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Modificar",color:"primary",onClick:c=>i.modifyStock(l.row)},null,8,["onClick"]),o(d,{flat:"",label:"Quitar",color:"negative",onClick:c=>i.removeProduct(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),e[68]||(e[68]=m("h5",null,"Selecciona los impuestos:",-1)),(w(!0),k(D,null,P(a.taxes,l=>(w(),k("div",{class:"row",key:l.id},[o(U,{modelValue:a.taxesSelected,"onUpdate:modelValue":[e[10]||(e[10]=c=>a.taxesSelected=c),i.calcularTaxes],label:l.name,val:l.id},null,8,["modelValue","label","val","onUpdate:modelValue"])]))),128)),m("div",z,[o(u,{modelValue:a.saleData.total_amount,"onUpdate:modelValue":e[11]||(e[11]=l=>a.saleData.total_amount=l),label:"Monto",readonly:"",class:"q-mr-md col-3"},null,8,["modelValue"]),o(u,{modelValue:a.saleData.taxes_amount,"onUpdate:modelValue":e[12]||(e[12]=l=>a.saleData.taxes_amount=l),label:"Monto en impuestos",class:"q-mr-md col-3",readonly:""},null,8,["modelValue"]),o(x,{modelValue:a.saleData.payment_status,"onUpdate:modelValue":e[13]||(e[13]=l=>a.saleData.payment_status=l),options:a.payment_status_list,label:"Selecciona una opci\xF3n","option-label":"label","option-value":"value",outlined:"",class:"q-mb-md col-3"},null,8,["modelValue","options"])])]),_:1}),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cancel",onClick:e[14]||(e[14]=l=>{a.dialogSale=!1})}),o(d,{flat:"",label:"Guardar",color:"primary",onClick:e[15]||(e[15]=l=>i.saveSale())})]),_:1})]),_:1})])]),_:1},8,["modelValue"]),o(f,{modelValue:a.dialogViewSale,"onUpdate:modelValue":e[25]||(e[25]=l=>a.dialogViewSale=l),style:{width:"90%",height:"90%"}},{default:s(()=>[m("div",I,[o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[e[69]||(e[69]=m("div",{class:"text-h6"},"Detalle de la venta",-1)),m("div",K,[o(u,{modelValue:a.saleDataView.date,"onUpdate:modelValue":e[17]||(e[17]=l=>a.saleDataView.date=l),label:"Fecha",readonly:"",outlined:"",class:"q-mx-md col-3"},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.customer.name,"onUpdate:modelValue":e[18]||(e[18]=l=>a.saleDataView.customer.name=l),label:"Cliente",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{readonly:"",modelValue:a.saleDataView.user.name,"onUpdate:modelValue":e[19]||(e[19]=l=>a.saleDataView.user.name=l),label:"Vendedor",class:"q-mx-md col-3"},null,8,["modelValue"])]),m("div",O,[o(u,{modelValue:a.saleDataView.total_amount,"onUpdate:modelValue":e[20]||(e[20]=l=>a.saleDataView.total_amount=l),label:"Monto de venta",readonly:"",class:"q-mx-md col-3"},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.taxes_amount,"onUpdate:modelValue":e[21]||(e[21]=l=>a.saleDataView.taxes_amount=l),label:"Monto en impuestos",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.total_payment,"onUpdate:modelValue":e[22]||(e[22]=l=>a.saleDataView.total_payment=l),label:"Monto a pagar",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.payment_status,"onUpdate:modelValue":e[23]||(e[23]=l=>a.saleDataView.payment_status=l),label:"Estado de pago",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"])]),o(y,{rows:a.productsSale,columns:a.columnsProductsViewSale,"row-key":"id",pagination:a.pagination,onRequest:i.loadProductBySale,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Detalle Stock",color:"primary",onClick:c=>i.ViewStocksproduct(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1}),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cancel",onClick:e[24]||(e[24]=l=>{a.dialogViewSale=!1})})]),_:1})]),_:1})])]),_:1},8,["modelValue"]),o(f,{modelValue:a.dialogPrintSale,"onUpdate:modelValue":e[35]||(e[35]=l=>a.dialogPrintSale=l),style:{width:"90%",height:"90%"},id:"download"},{default:s(()=>[m("div",j,[o(g,null,{default:s(()=>[m("div",Y,[o(b,null,{default:s(()=>[e[70]||(e[70]=m("div",{class:"text-h6"},"Comprobante de venta",-1)),m("div",G,[o(u,{modelValue:a.saleDataView.date,"onUpdate:modelValue":e[26]||(e[26]=l=>a.saleDataView.date=l),label:"Fecha",readonly:"",outlined:"",class:"q-mx-md col-3"},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.customer.name,"onUpdate:modelValue":e[27]||(e[27]=l=>a.saleDataView.customer.name=l),label:"Cliente",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{readonly:"",modelValue:a.saleDataView.user.name,"onUpdate:modelValue":e[28]||(e[28]=l=>a.saleDataView.user.name=l),label:"Vendedor",class:"q-mx-md col-3"},null,8,["modelValue"])]),m("div",H,[o(u,{modelValue:a.saleDataView.total_amount,"onUpdate:modelValue":e[29]||(e[29]=l=>a.saleDataView.total_amount=l),label:"Monto de venta",readonly:"",class:"q-mx-md col-3"},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.taxes_amount,"onUpdate:modelValue":e[30]||(e[30]=l=>a.saleDataView.taxes_amount=l),label:"Monto en impuestos",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.total_payment,"onUpdate:modelValue":e[31]||(e[31]=l=>a.saleDataView.total_payment=l),label:"Monto a pagar",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"]),o(u,{modelValue:a.saleDataView.payment_status,"onUpdate:modelValue":e[32]||(e[32]=l=>a.saleDataView.payment_status=l),label:"Estado de pago",class:"q-mx-md col-3",readonly:""},null,8,["modelValue"])]),o(y,{rows:a.productsSale,columns:a.columnsProductsViewSale,"row-key":"id",pagination:t.pagination_print,onRequest:i.loadProductBySale,"rows-per-page-options":[100,200,300]},{"body-cell-actions":s(l=>[o(h,{props:l},null,8,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1})],512),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cancel",onClick:e[33]||(e[33]=l=>{a.dialogPrintSale=!1})}),o(d,{flat:"",label:"PdF",color:"red",onClick:e[34]||(e[34]=l=>i.generatePDF())})]),_:1})]),_:1})])]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogCustomer,"onUpdate:modelValue":e[40]||(e[40]=l=>a.DialogCustomer=l)},{default:s(()=>[o(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[m("div",J,[o(d,{onClick:e[36]||(e[36]=l=>i.ShowCreateCustomer()),label:"Nuevo Cliente",color:"primary",class:"q-mb-md col-3"}),m("div",W,[o(u,{modelValue:a.SearchCustomer,"onUpdate:modelValue":e[37]||(e[37]=l=>a.SearchCustomer=l),label:"Buscar Cliente",debounce:"300",class:"q-mb-md",onKeydown:e[38]||(e[38]=V(l=>i.goSearchCustomer(),["enter"]))},null,8,["modelValue"]),o(d,{label:"Buscar",color:"primary",onClick:e[39]||(e[39]=l=>i.goSearchCustomer())})])]),o(y,{rows:a.customersList,columns:a.columns_customer,"row-key":"id",pagination:a.pagination,onRequest:i.loadCustomers,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Seleccionar",color:"primary",onClick:c=>i.SelectCustomer(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.dialogNewCustomer,"onUpdate:modelValue":e[49]||(e[49]=l=>a.dialogNewCustomer=l)},{default:s(()=>[o(g,{style:{width:"50%","max-width":"90vw",height:"auto"}},{default:s(()=>[o(b,null,{default:s(()=>[e[71]||(e[71]=m("div",{class:"text-h6"},"Nuevo Cliente",-1)),o(u,{modelValue:a.dataCustomer.name,"onUpdate:modelValue":e[41]||(e[41]=l=>a.dataCustomer.name=l),label:"Nombre"},null,8,["modelValue"]),o(u,{modelValue:a.dataCustomer.lastname,"onUpdate:modelValue":e[42]||(e[42]=l=>a.dataCustomer.lastname=l),label:"Apellido"},null,8,["modelValue"]),o(u,{modelValue:a.dataCustomer.identification,"onUpdate:modelValue":e[43]||(e[43]=l=>a.dataCustomer.identification=l),label:"identificacion"},null,8,["modelValue"]),o(u,{modelValue:a.dataCustomer.email,"onUpdate:modelValue":e[44]||(e[44]=l=>a.dataCustomer.email=l),label:"email"},null,8,["modelValue"]),o(u,{modelValue:a.dataCustomer.phone,"onUpdate:modelValue":e[45]||(e[45]=l=>a.dataCustomer.phone=l),label:"telefono"},null,8,["modelValue"]),o(u,{modelValue:a.dataCustomer.address,"onUpdate:modelValue":e[46]||(e[46]=l=>a.dataCustomer.address=l),label:"Direccion"},null,8,["modelValue"])]),_:1}),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cancel",onClick:e[47]||(e[47]=l=>{a.dialogNewCustomer=!1})}),o(d,{flat:"",label:"Guardar",color:"primary",onClick:e[48]||(e[48]=l=>i.saveCustomer())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogSller,"onUpdate:modelValue":e[53]||(e[53]=l=>a.DialogSller=l)},{default:s(()=>[o(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[m("div",X,[m("div",Z,[o(u,{modelValue:a.SearchSeller,"onUpdate:modelValue":e[50]||(e[50]=l=>a.SearchSeller=l),label:"Buscar Vendedor",debounce:"300",class:"q-mb-md",onKeydown:e[51]||(e[51]=V(l=>i.goSearchSeller(),["enter"]))},null,8,["modelValue"]),o(d,{label:"Buscar",color:"primary",onClick:e[52]||(e[52]=l=>i.goSearchSeller())})])]),o(y,{rows:a.SellerList,columns:a.columns_seller,"row-key":"id",pagination:a.pagination,onRequest:i.loadSeller,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Seleccionar",color:"primary",onClick:c=>i.SelectSeller(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogProduct,"onUpdate:modelValue":e[58]||(e[58]=l=>a.DialogProduct=l)},{default:s(()=>[o(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:s(()=>[m("div",$,[m("div",ee,[o(u,{modelValue:a.SearchProduct,"onUpdate:modelValue":e[54]||(e[54]=l=>a.SearchProduct=l),label:"Buscar Product",debounce:"300",class:"q-mb-md",onKeydown:e[55]||(e[55]=V(l=>i.goSearchProduct(),["enter"]))},null,8,["modelValue"]),o(d,{label:"Buscar",color:"primary",onClick:e[56]||(e[56]=l=>i.goSearchProduct())})])]),o(y,{rows:a.ProductsList,columns:a.columnsProductsList,"row-key":"id",pagination:a.pagination,onRequest:i.loadProducts,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Disponibilidad",color:"green",onClick:c=>i.showStock(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cerrar",onClick:e[57]||(e[57]=l=>{this.DialogProduct=!1})})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogStock,"onUpdate:modelValue":e[61]||(e[61]=l=>a.DialogStock=l)},{default:s(()=>[o(g,{style:{width:"50%","max-width":"90vw",height:"auto"}},{default:s(()=>[o(y,{rows:a.productsStockList,columns:a.columns_stock,"row-key":"id",pagination:a.pagination,onRequest:i.showStock,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(l=>[o(h,{props:l},{default:s(()=>[o(d,{flat:"",label:"Seleccionar",color:"primary",onClick:c=>i.ShowQuantityStock(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cerrar",onClick:e[59]||(e[59]=l=>{this.DialogStock=!1})}),o(d,{flat:"",label:"Agregar",onClick:e[60]||(e[60]=l=>i.addProductSale())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogStockbyproductSale,"onUpdate:modelValue":e[63]||(e[63]=l=>a.DialogStockbyproductSale=l)},{default:s(()=>[o(g,{style:{width:"50%","max-width":"90vw",height:"auto"}},{default:s(()=>[o(y,{rows:a.stockByproductSale,columns:a.columns_stockBySale,"row-key":"id",pagination:a.pagination,onRequest:i.ViewStocksproduct,"rows-per-page-options":[5,10,15]},null,8,["rows","columns","pagination","onRequest"]),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cerrar",onClick:e[62]||(e[62]=l=>{this.DialogStockbyproductSale=!1})})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(f,{modelValue:a.DialogQuantityStock,"onUpdate:modelValue":e[67]||(e[67]=l=>a.DialogQuantityStock=l)},{default:s(()=>[o(g,{class:"q-px-md"},{default:s(()=>[o(u,{class:"",modelValue:a.quantityByStock,"onUpdate:modelValue":e[64]||(e[64]=l=>a.quantityByStock=l),label:"Cantidad"},null,8,["modelValue"]),o(S,null,{default:s(()=>[o(d,{flat:"",label:"Cerrar",onClick:e[65]||(e[65]=l=>{this.DialogQuantityStock=!1})}),o(d,{flat:"",label:"Agregar",onClick:e[66]||(e[66]=l=>i.saveQuantity())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var me=v(A,[["render",le]]);export{me as default};
