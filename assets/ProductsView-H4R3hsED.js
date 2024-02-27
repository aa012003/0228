import{a as h}from"./axios-L6U4YIEh.js";import{M as y}from"./bootstrap.esm-uhsrVe-H.js";import{_ as g,o as a,c as l,a as t,t as s,F as _,e as f,b as P,r as M,n as x,d as m}from"./index-7AzlkTSG.js";const $={props:["tempProduct","addCart"],data(){return{productModal:null,qty:1}},template:"#userProductModal",methods:{open(){this.$nextTick(()=>{this.productModal&&this.productModal.show()})},close(){this.$nextTick(()=>{this.productModal&&this.productModal.hide()})}},watch:{tempProduct(){this.qty=1}},mounted(){this.$nextTick(()=>{this.productModal=new y(this.$refs.modal)})}},k={type:"text/x-template",id:"userProductModal"},C={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},T={class:"modal-dialog modal-xl",role:"document"},L={class:"modal-content border-0"},V={class:"modal-header bg-dark text-white"},E={class:"modal-title",id:"exampleModalLabel"},w=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},R={class:"row"},S={class:"col-sm-6"},U=["src"],q={class:"col-sm-6"},B={class:"badge bg-primary rounded-pill"},D={key:0,class:"h5"},A={key:1},N={class:"h6"},z={class:"h5"},F={class:"input-group"},H={type:"number",class:"form-control",min:"qty"},O=["value"];function j(o,c,e,i,r,u){return a(),l("div",k,[t("div",C,[t("div",T,[t("div",L,[t("div",V,[t("h5",E,[t("span",null,s(e.tempProduct.title),1)]),w]),t("div",I,[t("div",R,[t("div",S,[t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,U)]),t("div",q,[t("span",B,s(e.tempProduct.category),1),t("p",null,"商品描述："+s(e.tempProduct.description),1),t("p",null,"商品內容："+s(e.tempProduct.content),1),e.tempProduct.origin_price===e.tempProduct.price?(a(),l("div",D,s(e.tempProduct.price)+" 元 ",1)):(a(),l("div",A,[t("del",N,"原價 "+s(e.tempProduct.origin_price)+" 元",1),t("div",z,"現在只要 "+s(e.tempProduct.price)+" 元",1)])),t("div",null,[t("div",F,[t("select",H,[(a(),l(_,null,f(20,n=>t("option",{value:n,key:n},s(n),9,O)),64))]),t("button",{type:"button",class:"btn btn-primary",onClick:c[0]||(c[0]=n=>e.addCart(e.tempProduct.id,r.qty))}," 加入購物車 ")])])])])])])])],512)])}const G=g($,[["render",j]]);var J={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"joychiang",BASE_URL:"/0228/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:b}=J,K={components:{userModal:G},data(){return{products:[],tempProduct:{},carts:{},status:{addCartLoading:""}}},methods:{getProducts(){h.get(`${p}/api/${b}/products/all`).then(o=>{this.products=o.data.products})},addCart(o,c=1){const e={product_id:o,qty:c};this.status.addCartLoading=o,h.post(`${p}/api/${b}/cart`,{data:e}).then(i=>{console.log(i),alert(i.data.message),this.status.addCartLoading="",this.$refs.userModal.close()})},openModal(o){this.tempProduct=o,this.$refs.userModal.open()}},mounted(){this.getProducts()}},Q={class:"container"},W={class:"mt-4"},X={class:"table align-middle"},Y=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),Z={style:{width:"200px"}},tt={class:"h5"},et={class:"h6"},st={class:"h5"},ot={class:"btn-group btn-group-sm"},dt=["onClick"],at=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),lt=["onClick"],nt=t("i",{class:"fas fa-spinner fa-pulse"},null,-1);function ct(o,c,e,i,r,u){const n=M("user-Modal");return a(),l(_,null,[P(n,{"temp-product":r.tempProduct,"add-cart":u.addCart,ref:"userModal"},null,8,["temp-product","add-cart"]),t("div",Q,[t("div",W,[t("table",X,[Y,t("tbody",null,[(a(!0),l(_,null,f(r.products,d=>(a(),l("tr",{key:d.id},[t("td",Z,[t("div",{style:x([{backgroundImage:`url(${d.imageUrl})`},{height:"160px","background-size":"cover","background-position":"center"}])},null,4)]),t("td",null,s(d.title),1),t("td",null,[t("div",tt,s(d.price)+" 元",1),t("del",et,"原價 "+s(d.origin_price)+" 元",1),t("div",st,"現在只要 "+s(d.price)+" 元",1)]),t("td",null,[t("div",ot,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:v=>u.openModal(d)},[at,m(" 查看更多 ")],8,dt),t("button",{type:"button",class:"btn btn-outline-danger",onClick:v=>u.addCart(d.id)},[nt,m(" 加到購物車 ")],8,lt)])])]))),128))])])])])],64)}const _t=g(K,[["render",ct]]);export{_t as default};
