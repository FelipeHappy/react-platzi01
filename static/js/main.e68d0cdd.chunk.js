(this["webpackJsonp01-react-platzi"]=this["webpackJsonp01-react-platzi"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),l=(n(12),n(6)),s=n(2);var i=n(0),u=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!1),c=Object(s.a)(n,2),a=(c[0],c[1]),l=r.a.useState(!0),i=Object(s.a)(l,2),u=i[0],d=i[1],f=r.a.useState(t),j=Object(s.a)(f,2),p=j[0],O=j[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=[]),O(n),d(!1)}catch(o){a(o)}}),3e3)})),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(o){a(o)}},loading:u}}("TODOS_V1",[]),n=t.item,c=t.saveItem,a=t.loading,o=t.error,d=r.a.useState(""),f=Object(s.a)(d,2),j=f[0],p=f[1],O=r.a.useState(!1),v=Object(s.a)(O,2),b=v[0],m=v[1],h=n.filter((function(e){return!0===e.completed})).length,x=n.length,g=[];g=!j.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=j.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{error:o,loading:a,totalTODOS:x,completedTODOS:h,searchValue:j,setSearchValue:p,searchedTODOS:g,completeTask:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r[t].completed=!0,c(r)},AddTask:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),c(t)},deleteTask:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r.splice(t,1),c(r)},openModal:b,setOpenModal:m},children:e.children})}n(14);function f(){var e=r.a.useContext(u),t=e.totalTODOS,n=e.completedTODOS;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has Completado ",n," de ",t," TODOs"]})}n(15);function j(){var e=r.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Filtrar por...",value:t,onChange:function(e){n(e.target.value)}})}n(16);function p(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{className:"TodoList",children:e.children})})}n(17);var O,v,b=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x(e,t){var n=e.title,r=e.titleId,a=h(e,b);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"96px",height:"96px",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,O||(O=c.createElement("path",{fill:"#c8e6c9",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"})),v||(v=c.createElement("path",{fill:"#4caf50",d:"M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"})))}var g,C,M,y,S,T,z,I,w=c.forwardRef(x),k=(n.p,["title","titleId"]);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},N.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function H(e,t){var n=e.title,r=e.titleId,a=E(e,k);return c.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"128px",height:"128px",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,g||(g=c.createElement("path",{fill:"#afc4e1",d:"M50,21H14v36c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V21z"})),C||(C=c.createElement("path",{fill:"#becde8",d:"M39,59V21H14v36c0,1.104,0.895,2,2,2H39z"})),M||(M=c.createElement("path",{fill:"#cad8ed",d:"M25,59V21H14v36c0,1.104,0.895,2,2,2H25z"})),y||(y=c.createElement("path",{fill:"#afc4e1",d:"M14 21H50V24H14z"})),S||(S=c.createElement("path",{fill:"#8d6c9f",d:"M48,60H16c-1.654,0-3-1.346-3-3V21c0-0.553,0.448-1,1-1h36c0.552,0,1,0.447,1,1v36 C51,58.654,49.654,60,48,60z M15,22v35c0,0.552,0.449,1,1,1h32c0.551,0,1-0.448,1-1V22H15z"})),T||(T=c.createElement("path",{fill:"#a8b7d1",d:"M53,11H11c-1.105,0-2,0.895-2,2v6c0,1.105,0.895,2,2,2h42c1.105,0,2-0.895,2-2v-6 C55,11.895,54.105,11,53,11z"})),z||(z=c.createElement("path",{fill:"#8d6c9f",d:"M53,22H11c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h42c1.654,0,3,1.346,3,3v6 C56,20.654,54.654,22,53,22z M11,12c-0.551,0-1,0.448-1,1v6c0,0.552,0.449,1,1,1h42c0.551,0,1-0.448,1-1v-6c0-0.552-0.449-1-1-1H11 z"})),I||(I=c.createElement("path",{fill:"#8d6c9f",d:"M41 12c-.38 0-.743-.218-.911-.586l-2.335-5.137C37.57 6.1 37.323 6 37.063 6H26.937c-.26 0-.506.1-.691.277l-2.335 5.137c-.229.503-.822.726-1.324.496-.502-.229-.725-.821-.496-1.324l2.4-5.28c.037-.081.084-.157.142-.226C25.204 4.394 26.043 4 26.937 4h10.127c.893 0 1.733.394 2.305 1.08.057.068.105.145.142.226l2.4 5.28c.229.503.006 1.096-.496 1.324C41.28 11.972 41.139 12 41 12zM14 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C15 17.553 14.552 18 14 18zM19 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C20 17.553 19.552 18 19 18zM24 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C25 17.553 24.552 18 24 18zM29 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C30 17.553 29.552 18 29 18zM35 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C36 17.553 35.552 18 35 18zM40 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C41 17.553 40.552 18 40 18zM45 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C46 17.553 45.552 18 45 18zM50 18c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2C51 17.553 50.552 18 50 18zM38 56H14c-.552 0-1-.447-1-1s.448-1 1-1h24c.552 0 1 .447 1 1S38.552 56 38 56zM46 56h-4c-.552 0-1-.447-1-1s.448-1 1-1h4c.552 0 1 .447 1 1S46.552 56 46 56zM20 42c-.552 0-1-.447-1-1V29c0-.553.448-1 1-1s1 .447 1 1v12C21 41.553 20.552 42 20 42zM20 50c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4C21 49.553 20.552 50 20 50zM28 50c-.552 0-1-.447-1-1V29c0-.553.448-1 1-1s1 .447 1 1v20C29 49.553 28.552 50 28 50zM36 50c-.552 0-1-.447-1-1V29c0-.553.448-1 1-1s1 .447 1 1v20C37 49.553 36.552 50 36 50zM44 50c-.552 0-1-.447-1-1V37c0-.553.448-1 1-1s1 .447 1 1v12C45 49.553 44.552 50 44 50zM44 34c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4C45 33.553 44.552 34 44 34z"})))}var V=c.forwardRef(H);n.p;function D(e){var t=e.type,n=e.color,c=void 0===n?"gray":n,r=e.onClick,a={check:function(e){return Object(i.jsx)(w,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(V,{className:"Icon-svg Icon-svg--delete",fill:e})}};return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:a[t](c)})}function P(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(D,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function L(e){var t=e.onDelete;return Object(i.jsx)(D,{type:"delete",onClick:t})}n(18);function B(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(P,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)(L,{onDelete:e.onDelete})]})}n(19);function F(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(20);function J(e){var t=e.children;return o.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function A(){var e=r.a.useState(),t=Object(s.a)(e,2),n=t[0],c=t[1],a=r.a.useContext(u),o=a.AddTask,l=a.setOpenModal,d=function(e){e.preventDefault(),o(n)};return Object(i.jsxs)("form",{onSubmit:d,children:[Object(i.jsx)("label",{children:"Escribe tu nueva Tarea"}),Object(i.jsx)("textarea",{className:"focus",value:n,onChange:function(e){c(e.target.value),console.log(e.target.value)},placeholder:"A\xf1ade una tarea a la lista"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",onClick:function(){l(!1)},setOpenModal:l,className:"TodoForm-button--cancel",children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",onClick:d,setOpenModal:l,className:"TodoForm-button--add",children:"A\xf1adir"})]})]})}function R(e){e.error;return Object(i.jsx)("p",{children:"Calma, Hubo un error, contacta al administrador..."})}n(22);function _(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando, un momento porfavor ..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function q(){return Object(i.jsx)("p",{children:"\xa1 Crea tu Primera Tarea !"})}function G(){var e=r.a.useContext(u),t=e.error,n=e.loading,c=e.searchedTODOS,a=e.completeTask,o=e.deleteTask,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(f,{}),Object(i.jsx)(j,{}),Object(i.jsxs)(p,{children:[t&&Object(i.jsx)(R,{error:t}),n&&Object(i.jsx)(_,{}),!n&&!c.length&&Object(i.jsx)(q,{}),c.map((function(e){return Object(i.jsx)(B,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return o(e.text)}},e.text)}))]}),l&&Object(i.jsx)(J,{children:Object(i.jsx)(A,{})}),Object(i.jsx)(F,{setOpenModal:s})]})}var K=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(G,{})})};o.a.render(Object(i.jsx)(K,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e68d0cdd.chunk.js.map