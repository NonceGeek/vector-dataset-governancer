(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{9557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service_manager",function(){return r(1689)}])},1689:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7568),i=r(1799),a=r(9396),s=r(603),c=r(655),u=r(5893),o=r(8002),l=r(3032),d=r(7294),p=r(6772);function h(){var e=function(){var e=Z.name,t=Z.description,r=Z.url,n=Z.verification_url,i=Z.expired_at;return{type:"entry_function_payload",function:o.Pz+"::service_aggregator::add_service",type_arguments:[],arguments:[e,t,r,n,"",i]}},t=function(){var e=Z.name,t=Z.description,r=Z.url,n=Z.verification_url,i=Z.expired_at;return{type:"entry_function_payload",function:o.Pz+"::service_aggregator::update_service",type_arguments:[],arguments:[e,t,r,n,"",i]}},r=function(){var e=Z.name;return{type:"entry_function_payload",function:o.Pz+"::service_aggregator::delete_service",type_arguments:[],arguments:[e]}},h=function(){var e=R.description;R.resource_path,R.addr_type,R.addr,R.pubkey,R.addr_description,R.chains;return{type:"entry_function_payload",function:o.Pz+"::init::init",type_arguments:[],arguments:[0,e]}},f=(0,s.Z)(d.useState(!1),2),g=f[0],_=f[1],m=(0,s.Z)(d.useState([]),2),x=m[0],b=m[1],v=(0,l.useWallet)(),j=v.account,y=v.signAndSubmitTransaction,w=new p.WalletClient(o.UE,o.Zt),N=(0,d.useState)({name:"",url:"",description:"",verification_url:"",expired_at:0}),Z=N[0],C=N[1];function k(){return(k=(0,n.Z)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,y(e(),{gas_unit_price:100}).then((function(){setTimeout(E,3e3)}))];case 1:return t.sent(),[2]}}))}))).apply(this,arguments)}function S(){return(S=(0,n.Z)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,y(t(),{gas_unit_price:100}).then((function(){setTimeout(E,3e3)}))];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}function D(){return(D=(0,n.Z)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,y(r(),{gas_unit_price:100}).then((function(){setTimeout(E,3e3)}))];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}function I(){return(I=(0,n.Z)((function(){var e,t;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:if(!j||!j.address)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,w.aptosClient.getAccountResource(j.address.toString(),o.Pz+"::service_aggregator::ServiceAggregator")];case 2:return e=r.sent(),console.log("service_aggregator: "+e.data),console.log(e.data),_(!0),[3,4];case 3:return t=r.sent(),console.log("check_service_aggregator: "+t),_(!1),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function E(){return P.apply(this,arguments)}function P(){return(P=(0,n.Z)((function(){var e,t,r,n,i,a,s;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(!j||!j.address)return[3,9];c.label=1;case 1:return c.trys.push([1,8,,9]),[4,w.aptosClient.getAccountResource(j.address.toString(),o.Pz+"::service_aggregator::ServiceAggregator")];case 2:if(!(e=c.sent()))return[3,7];t=e.data.names,r=e.data.services_map.handle,n=[],i=0,c.label=3;case 3:return i<t.length?[4,w.aptosClient.getTableItem(r,{key_type:"0x1::string::String",value_type:o.Pz+"::service_aggregator::Service",key:t[i]})]:[3,6];case 4:(a=c.sent()).name=t[i],n.push(a),c.label=5;case 5:return i++,[3,3];case 6:console.log("services:"),n.forEach((function(e){console.log(e)})),b(n),c.label=7;case 7:return[3,9];case 8:return s=c.sent(),console.log(s),[3,9];case 9:return[2]}}))}))).apply(this,arguments)}function A(){return(A=(0,n.Z)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,y(h(),{gas_unit_price:100}).then((function(){setTimeout(E,3e3)}))];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}(0,d.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[j]),(0,d.useEffect)((function(){E()}),[j]),(0,d.useEffect)((function(){console.log(g)}),[g]),(0,d.useEffect)((function(){console.log(x)}),[x]);var T=(0,d.useState)({did_type:0,description:"",resource_path:"",addr_type:0,addr:"",pubkey:"",addr_description:"",chains:[],expired_at:0}),R=T[0],z=T[1],O=function(e){var t={name:e.name,description:e.description,url:e.url,verification_url:e.verification_url,expired_at:e.expired_at};C((0,i.Z)({},t))};return(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Module Path: "}),(0,u.jsxs)("a",{target:"_blank",href:o.kA,className:"underline",children:[o.Pz,"::service_aggregator"]})]}),!g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("input",{placeholder:"Description for your DID",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return z((0,a.Z)((0,i.Z)({},R),{description:e.target.value}))}}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"The type of DID Owner: \xa0 \xa0 \xa0 \xa0",(0,u.jsxs)("select",{value:R.did_type,onChange:function(e){z((0,a.Z)((0,i.Z)({},R),{did_type:parseInt(e.target.value)}))},children:[(0,u.jsx)("option",{value:"0",children:"Individual"}),(0,u.jsx)("option",{value:"1",children:"DAO"}),(0,u.jsx)("option",{value:"2",children:"Bot"}),(0,u.jsx)("option",{value:"3",children:"Repo"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){return A.apply(this,arguments)},className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Init Your DID"})," ","\xa0 \xa0 \xa0 \xa0 \ud83d\udca1 INIT Your DID on Aptos before the other Operations!",(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:E,className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Refresh the Services Info"}),(0,u.jsx)("br",{})]}),g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{onClick:E,className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Refresh the Services Info"}),(0,u.jsx)("div",{className:"overflow-x-auto mt-2",children:x.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:"text-center font-bold",children:"Services"}),(0,u.jsx)("div",{children:(0,u.jsxs)("table",{className:"table table-compact w-full my-2",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"text-center",children:[(0,u.jsx)("th",{children:"Service Name"}),(0,u.jsx)("th",{children:"Description"}),(0,u.jsx)("th",{children:"URL"}),(0,u.jsx)("th",{children:"Verification URL"}),(0,u.jsx)("th",{children:"Expired at"}),(0,u.jsx)("th",{children:"Load to form"})]})}),(0,u.jsx)("tbody",{children:x.length>0&&x.map((function(e,t){return(0,u.jsxs)("tr",{className:"text-center",children:[(0,u.jsx)("td",{children:e.name}),(0,u.jsx)("td",{children:e.description}),(0,u.jsx)("td",{children:(0,u.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,u.jsxs)("p",{className:"underline",children:[e.url," "]})})}),(0,u.jsx)("td",{children:(0,u.jsx)("a",{href:e.verification_url,target:"_blank",rel:"noreferrer",children:(0,u.jsxs)("p",{className:"underline",children:[e.verification_url," "]})})}),(0,u.jsx)("td",{children:e.expired_at}),(0,u.jsx)("td",{children:(0,u.jsx)("button",{className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",onClick:function(){return O(e)},children:"LOAD"})})]},t)}))})]})})]})}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{placeholder:"service Name",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{name:e.target.value}))},value:Z.name}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{placeholder:"service Description",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{description:e.target.value}))},value:Z.description}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{placeholder:"service URL",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{url:e.target.value}))},value:Z.url}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{placeholder:"service Verification URL(Optional)",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{verification_url:e.target.value}))},value:Z.verification_url}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{expired_at:parseInt(e.target.value)}))},placeholder:"33229411200",value:Z.expired_at}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){return k.apply(this,arguments)},className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Add Service"}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){return S.apply(this,arguments)},className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Update Service"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{placeholder:"service Name",className:"mt-8 p-4 input input-bordered input-primary w-full",onChange:function(e){return C((0,a.Z)((0,i.Z)({},Z),{name:e.target.value}))}}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){return D.apply(this,arguments)},className:"btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg",children:"Delete Service"})]})]})}}},function(e){e.O(0,[980,774,888,179],(function(){return t=9557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);