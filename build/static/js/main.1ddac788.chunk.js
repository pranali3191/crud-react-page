(this["webpackJsonpcrud-frontend"]=this["webpackJsonpcrud-frontend"]||[]).push([[0],{25:function(t,e,a){t.exports=a(44)},30:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),l=a(12),r=a.n(l),s=(a(30),a(14)),i=a(8),c=a(9),m=a(11),u=a(10),h=a(53),p=a(54),d=a(55),f=a(49),E=a(56),g=a(50),y=a(51),v=a(23),b=a(45),w=a(46),S=a(47),j=a(48),C=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={id:0,first:"",last:"",email:"",phone:"",location:""},t.onChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.submitFormAdd=function(e){e.preventDefault(),fetch("http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({first:t.state.first,last:t.state.last,email:t.state.email,password:t.state.password,phone:t.state.phone,location:t.state.location})}).then((function(t){return t.json()})).then((function(e){Array.isArray(e)?(t.props.addItemToState(e[0]),t.props.toggle()):console.log("failure")})).catch((function(t){return console.log(t)}))},t.submitFormEdit=function(e){e.preventDefault(),console.log(t.state.id),fetch("http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user/".concat(t.state._id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:t.state._id,first:t.state.first,last:t.state.last,email:t.state.email,password:t.state.password,phone:t.state.phone,location:t.state.location})}).then((function(t){return t.json()})).then((function(e){Array.isArray(e)?(t.props.updateState(e[0]),t.props.toggle()):console.log("failure")})).catch((function(t){return console.log(t)}))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){if(this.props.item){var t=this.props.item,e=t._id,a=t.first,n=t.last,o=t.email,l=t.password,r=t.phone,s=t.location;this.setState({_id:e,first:a,last:n,email:o,password:l,phone:r,location:s})}}},{key:"render",value:function(){return o.a.createElement(b.a,{onSubmit:this.props.item?this.submitFormEdit:this.submitFormAdd},o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"first"},"First Name"),o.a.createElement(j.a,{type:"text",name:"first",id:"first",onChange:this.onChange,value:null===this.state.first?"":this.state.first})),o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"last"},"Last Name"),o.a.createElement(j.a,{type:"text",name:"last",id:"last",onChange:this.onChange,value:null===this.state.last?"":this.state.last})),o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"email"},"Email"),o.a.createElement(j.a,{type:"email",name:"email",id:"email",onChange:this.onChange,value:null===this.state.email?"":this.state.email})),o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"password"},"Password"),o.a.createElement(j.a,{type:"password",name:"password",id:"password",onChange:this.onChange,value:null===this.state.password?"":this.state.password})),o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"phone"},"Phone"),o.a.createElement(j.a,{type:"text",name:"phone",id:"phone",onChange:this.onChange,value:null===this.state.phone?"":this.state.phone,placeholder:"ex. 555-555-5555"})),o.a.createElement(w.a,null,o.a.createElement(S.a,{for:"location"},"Location"),o.a.createElement(j.a,{type:"text",name:"location",id:"location",onChange:this.onChange,value:null===this.state.location?"":this.state.location,placeholder:"City, State"})),o.a.createElement(f.a,null,"Submit"))}}]),a}(o.a.Component),O=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).toggle=function(){n.setState((function(t){return{modal:!t.modal}}))},n.state={modal:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var t=o.a.createElement("button",{className:"close",onClick:this.toggle},"\xd7"),e=this.props.buttonLabel,a="",n="";return"Edit"===e?(a=o.a.createElement(f.a,{color:"warning",onClick:this.toggle,style:{float:"left",marginRight:"10px"}},e),n="Edit Item"):(a=o.a.createElement(f.a,{color:"success",onClick:this.toggle,style:{float:"left",marginRight:"10px"}},e),n="Add New Item"),o.a.createElement("div",null,a,o.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},o.a.createElement(g.a,{toggle:this.toggle,close:t},n),o.a.createElement(y.a,null,o.a.createElement(C,{addItemToState:this.props.addItemToState,updateState:this.props.updateState,toggle:this.toggle,item:this.props.item}))))}}]),a}(n.Component),I=a(52),k=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).deleteItem=function(e){window.confirm("Delete item forever?")&&fetch("http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user/".concat(e),{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(t){return t.json()})).then((function(a){t.props.deleteItemFromState(e)})).catch((function(t){return console.log(t)}))},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.items.map((function(e){return o.a.createElement("tr",{key:e._id},o.a.createElement("th",{scope:"row"},e._id),o.a.createElement("td",null,e.first),o.a.createElement("td",null,e.last),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.phone),o.a.createElement("td",null,e.location),o.a.createElement("td",null,o.a.createElement("div",{style:{width:"110px"}},o.a.createElement(O,{buttonLabel:"Edit",item:e,updateState:t.props.updateState})," ",o.a.createElement(f.a,{color:"danger",onClick:function(){return t.deleteItem(e._id)}},"Del"))))}));return o.a.createElement(I.a,{responsive:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"First"),o.a.createElement("th",null,"Last"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Phone"),o.a.createElement("th",null,"Location"),o.a.createElement("th",null,"Actions"))),o.a.createElement("tbody",null,e))}}]),a}(n.Component),A=a(24),x=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={items:[]},t.addItemToState=function(e){t.setState((function(t){return{items:[].concat(Object(s.a)(t.items),[e])}}))},t.updateState=function(e){var a=t.state.items.findIndex((function(t){return t._id===e._id})),n=[].concat(Object(s.a)(t.state.items.slice(0,a)),[e],Object(s.a)(t.state.items.slice(a+1)));t.setState({items:n})},t.deleteItemFromState=function(e){var a=t.state.items.filter((function(t){return t._id!==e}));t.setState({items:a})},t}return Object(c.a)(a,[{key:"getItems",value:function(){var t=this;console.log("fetch"),fetch("http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/users").then((function(t){return t.json()})).then((function(e){return t.setState({items:e})})).catch((function(t){return console.log(t)}))}},{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return o.a.createElement(h.a,{className:"App"},o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement("h1",{style:{margin:"20px 0"}},"User Directory"))),o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement(k,{items:this.state.items,updateState:this.updateState,deleteItemFromState:this.deleteItemFromState}))),o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement(A.CSVLink,{filename:"db.csv",color:"primary",style:{float:"left",marginRight:"10px"},className:"btn btn-primary",data:this.state.items},"Download CSV"),o.a.createElement(O,{buttonLabel:"Add Item",addItemToState:this.addItemToState}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1ddac788.chunk.js.map