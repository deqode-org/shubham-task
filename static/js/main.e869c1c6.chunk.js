(this["webpackJsonptest-task-react"]=this["webpackJsonptest-task-react"]||[]).push([[0],{20:function(e,t,n){e.exports={app:"Dashboard_app__s7MPl"}},25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),s=n.n(r),i=(n(30),n(23)),c=n(1),u=n(6),l=n.n(u),p=n(15),g=n(16),h=n(17),d=n(22),f=n(24),m=n(18),v=n(19);function S(e){return e>1e3&&(e=1e3),Math.floor(1e3*Math.random())%e===0}var w=function(e){var t=[];return S(2)&&t.push("pre"+e),S(2)&&t.push(e),S(2)&&t.push(e+"post"),S(2)&&t.push("pre"+e+"post"),new Promise((function(e,n){var a=200*Math.random();setTimeout((function(){S(10)?n():e(t)}),a)}))},b=n(7),E=n.n(b),x=13,k=38,y=40,C=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).onKeyDown=function(e){var t=a.state,n=t.suggestions,o=t.activeSuggestion;switch(e.keyCode){case x:if(0===n.length)return;return a.setState({activeSuggestion:0,showSuggestions:!1}),void a.updateText("".concat(n[o]," "));case k:if(e.preventDefault(),0===o)return;return void a.setState({activeSuggestion:o-1});case y:if(e.preventDefault(),o===n.length-1)return;return void a.setState({activeSuggestion:o+1})}},a.updateText=function(e){var t=a.state.textEntered.split(" ");t[t.length-1]=e,a.setState({textEntered:t.join(" ")})},a.onSuggestionClick=function(e){e.stopPropagation(),a.updateText("".concat(e.currentTarget.innerText," ")),a.setState({activeSuggestion:0,showSuggestions:!1}),a.inputRef.current.focus()},a.getSuggestionsForWord=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t);case 3:n=e.sent,a.setState({suggestions:n,showSuggestions:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){var t=e.target.value;a.setState({textEntered:t,showSuggestions:!1,suggestions:[]});var n=t.split(" ").pop();""!==n&&a.debouncedFunc(n)},a.state={textEntered:"",showSuggestions:!1,activeSuggestion:0,suggestions:[]},a.inputRef=o.a.createRef(),a.debouncedFunc=Object(v.debounce)(a.getSuggestionsForWord,400),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.textEntered,a=t.showSuggestions,r=t.suggestions,s=t.activeSuggestion;return o.a.createElement("div",{className:E.a.companyWrapper},o.a.createElement("input",{autoFocus:!0,type:"text",placeholder:"Search",className:"form-control",value:n,onKeyDown:this.onKeyDown,onChange:this.onInputChange,ref:this.inputRef}),o.a.createElement(m.a,{onOutsideClick:function(){return e.setState({showSuggestions:!1})}},o.a.createElement("div",{className:"list-group ".concat(E.a.listContainer)},a&&r&&r.map((function(t,n){return o.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action ".concat(s===n&&"active"),key:t,onClick:e.onSuggestionClick},t)})))))}}]),n}(o.a.Component),D=n(20),_=n.n(D),j=function(){return o.a.createElement("div",{className:_.a.app},o.a.createElement(C,null))},O={Dashboard:"/",Redirect:"*"},T=function(){return o.a.createElement(i.a,{basename:"/shubham-task"},o.a.createElement(c.b,{path:O.Dashboard,component:j}),o.a.createElement(c.a,{from:O.Redirect,to:O.Dashboard}))},W=function(){return o.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports={companyWrapper:"SearchInputTextfield_companyWrapper__3oNmO",listContainer:"SearchInputTextfield_listContainer__2jHdP"}}},[[25,1,2]]]);
//# sourceMappingURL=main.e869c1c6.chunk.js.map