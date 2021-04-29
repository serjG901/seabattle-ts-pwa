(this.webpackJsonpseabattle=this.webpackJsonpseabattle||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(5),i=t.n(c),s=t(7),o=t(4);var l=Object(s.b)({name:"board",initialState:{selectSeaSize:[2,3,4,5,6],seaSize:3,numberOfShips:3,play:!1,currentPlayer:null,winner:null,player1:{name:"player1",move:[],ships:[],destroyedShips:[]},player2:{name:"player2",move:[],ships:[],destroyedShips:[]}},reducers:{reset:function(e){e.currentPlayer=null,e.play=!1,e.winner=null,e.player1={name:"player1",move:[],ships:[],destroyedShips:[]},e.player2={name:"player2",move:[],ships:[],destroyedShips:[]},window.navigator.vibrate([100])},seaSize:function(e,n){e.seaSize=n.payload,e.numberOfShips=n.payload},numberOfShips:function(e,n){e.numberOfShips=n.payload},play:function(e,n){e.play=!0,e.currentPlayer=n.payload,window.navigator.vibrate([100])},winner:function(e,n){e.winner=n.payload},movePlayer1:function(e,n){e.player1.move=[].concat(Object(o.a)(e.player1.move),[n.payload]),window.navigator.vibrate([100]),e.player2.ships.includes(n.payload)&&(e.player2.ships=e.player2.ships.filter((function(e){return e!==n.payload})),e.player2.destroyedShips.push(n.payload),window.navigator.vibrate([50,50,200])),0===e.player2.ships.length&&(e.winner="player1",window.navigator.vibrate([100,50,100,50,200,50,200,50,200,50,100])),e.currentPlayer="player2"},shipsPlayer1:function(e,n){e.player1.ships=n.payload},movePlayer2:function(e,n){e.player2.move=[].concat(Object(o.a)(e.player2.move),[n.payload]),window.navigator.vibrate([100]),e.player1.ships.includes(n.payload)&&(e.player1.ships=e.player1.ships.filter((function(e){return e!==n.payload})),e.player1.destroyedShips.push(n.payload),window.navigator.vibrate([50,50,200])),0===e.player1.ships.length&&(e.winner="player2",window.navigator.vibrate([100,50,100,50,200,50,200,50,500,50,100])),e.currentPlayer="player1"},shipsPlayer2:function(e,n){e.player2.ships=n.payload}}}),u=l.actions,d=u.reset,b=u.seaSize,p=u.numberOfShips,j=u.play,h=(u.winner,u.movePlayer1),f=u.shipsPlayer1,y=u.movePlayer2,x=u.shipsPlayer2,v=function(e){return e.board},m=l.reducer,O=Object(s.a)({reducer:{board:m}}),w=t(2);function g(e){return Array.from({length:e*e},(function(e,n){return n+1}))}function S(e){var n=Math.round(e*e*Math.random());return 0!==n?n:1}function N(e,n){for(var t=[],r=1;r<=e;r++){var a=void 0;do{a=S(n)}while(t.includes(a));t=[].concat(Object(o.a)(t),[a])}return t}var k=t(0);function P(e){var n=e.explane,t=e.union,r=e.text,a=e.color,c=void 0===a?"text-red-500":a;return Object(k.jsxs)("div",{className:"italic font-bold text-gray-400",children:[Object(k.jsx)("p",{className:"".concat(c),children:r})," ",Object(k.jsxs)("p",{children:[n,t," "]})]})}function z(e){var n=e.id,t=e.disabled,r=e.onTarget,a=e.destroyed,c="\n    h-12\n    w-full\n    border \n    border-solid \n    border-blue-900\n    text-4xl\n    ",i="\n    ".concat(c," text-blue-900\n    cursor-pointer \n    bg-blue-500 \n    hover:bg-red-500 \n    "),s="\n    ".concat(c,"\n    text-blue-500\n    cursor-not-allowed\n    ").concat(a?"":"bg-blue-900","\n    ");return Object(k.jsx)("div",{children:Object(k.jsx)("button",{className:t?s:i,type:"button",onClick:function(){return r(n)},disabled:t,children:a?Object(k.jsx)("span",{className:"inline text-blue-900",children:"X"}):t?Object(k.jsx)("span",{className:"inline",style:{fontFamily:"sans-serif"},children:"~"}):Object(k.jsx)("span",{className:"inline",children:"?"})})})}var A=["text-green-700","text-pink-700"],T=["text-yellow-700","text-purple-700"],C={player1:A[Math.floor(Math.random()*A.length)],player2:T[Math.floor(Math.random()*T.length)]},M={player1:"right-0",player2:"left-0"};function F(e){var n=e.direction,t="\n    absolute \n    w-1/5 \n    h-1/5 \n    bg-blue-900 \n    ";return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"top-0 ".concat(t," ").concat(n)}),Object(k.jsx)("div",{className:"bottom-0 ".concat(t," ").concat(n)})]})}var W={"text-green-700":"bg-green-700","text-pink-700":"bg-pink-700","text-yellow-700":"bg-yellow-700","text-purple-700":"bg-purple-700"},E={2:"w-1/2",3:"w-1/3",4:"w-1/4",5:"w-1/5",6:"w-1/6"};function L(e){var n=e.seaSize,t=e.currentPlayer,r=e.player,a=e.oponent,c=e.onTarget;return Object(k.jsxs)("div",{className:"w-1/2 px-2 pb-2 bg-blue-900 ".concat(C[r.name]),children:[Object(k.jsxs)("p",{children:[r.name," / ",r.ships.length," left"]}),Object(k.jsx)("div",{className:"flex flex-wrap",children:g(n).map((function(e){return Object(k.jsxs)("div",{className:"\n                relative \n                ".concat(E[n]," \n                ").concat(r.destroyedShips.includes(e)?"".concat(W[C[r.name]]):null),children:[r.destroyedShips.includes(e)?Object(k.jsx)(F,{direction:M[r.name]}):null,Object(k.jsx)(z,{id:e,disabled:t===r.name||a.move.includes(e),onTarget:c,destroyed:r.destroyedShips.includes(e)})]},e)}))})]})}function V(e){var n=e.seaOwner,t=Object(w.c)(v),r=Object(w.b)();return Object(k.jsx)(L,{seaSize:t.seaSize,currentPlayer:t.currentPlayer,player:t[n],oponent:t["player1"===n?"player2":"player1"],onTarget:function(e){"player1"===t.currentPlayer&&r(h(e)),"player2"===t.currentPlayer&&r(y(e))}})}function B(e){var n=e.text,t=e.onClick;return Object(k.jsx)("button",{onClick:t,className:"\n    py-2\n    px-4 \n    bg-blue-500 \n    hover:bg-blue-400 \n    text-blue-900\n    shadow-none\n    hover:shadow-md\n    cursor-pointer\n    focus:outline-none \n    focus:shadow-outline\n    ",children:n})}function I(){var e=Object(w.b)();return Object(k.jsx)(B,{text:"PLAY AGAIN",onClick:function(){e(d())}})}function U(e){var n=e.winner,t=e.currentPlayer;return n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(P,{explane:"WIN",union:"!",text:n,color:null!==t?C[n]:void 0}),Object(k.jsx)("br",{}),Object(k.jsx)(I,{})]}):Object(k.jsxs)("div",{className:"flex flex-col",children:[Object(k.jsx)(P,{explane:"ATTACKS",union:"!",text:t,color:null!==t?C[t]:void 0}),Object(k.jsxs)("div",{className:"flex w-screen justify-center",children:[Object(k.jsx)(V,{seaOwner:"player1"}),Object(k.jsx)(V,{seaOwner:"player2"})]})]})}function Y(){var e=Object(w.c)(v),n=Object(w.b)();return Object(r.useEffect)((function(){n(f(N(e.numberOfShips,e.seaSize))),n(x(N(e.numberOfShips,e.seaSize)))}),[n,e.numberOfShips,e.seaSize]),Object(k.jsx)(U,{currentPlayer:e.currentPlayer,winner:e.winner})}function G(){return Object(k.jsxs)("div",{className:"text-7xl italic",children:[Object(k.jsx)("span",{className:"".concat(C.player1),children:"SEA"}),Object(k.jsx)("span",{className:"".concat(C.player2),children:"BATTLE"})]})}function J(e){var n=e.labelText,t=e.defaultValue,r=e.selectArray,a=e.setValue,c=e.viewModificator;return Object(k.jsxs)("div",{className:"pb-2",children:[Object(k.jsx)("div",{className:"flex justify-evenly w-80",children:r.map((function(e){return Object(k.jsx)("div",{className:"flex-1 cursor-pointer ".concat(e===t?"text-blue-800 bg-blue-500 hover:bg-blue-500 shadow-md transform scale-125":"text-blue-500"),onClick:function(){a(Number(e))},children:c(e)},e)}))}),Object(k.jsx)("p",{className:"text-gray-400 border-t-2 border-solid border-blue-500",children:n})]})}function K(){var e=Object(w.b)();return Object(k.jsx)(B,{text:"PLAY",onClick:function(){var n=Math.random()>.5?"player1":"player2";e(j(n))}})}function D(e){var n=e.seaSize,t=e.seaSizeArray,r=e.setSeaSize,a=e.numberOfShips,c=e.numberOfShipsArray,i=e.setNumberOfShips;return Object(k.jsxs)("div",{className:"m-4",children:[Object(k.jsx)(J,{labelText:"Field size",defaultValue:n,selectArray:t,setValue:r,viewModificator:function(e){return"".concat(e,"x").concat(e)}}),Object(k.jsx)(J,{labelText:"Number of ships",defaultValue:a,selectArray:c,setValue:i,viewModificator:function(e){return"".concat(e)}}),Object(k.jsx)(K,{})]})}function R(){var e,n,t=Object(w.c)(v),r=Object(w.b)(),a=(e=t.seaSize,n=Math.round(t.seaSize*t.seaSize/2),Array.from({length:n-e+1},(function(n,t){return t+e})));return Object(k.jsx)(D,{seaSize:t.seaSize,seaSizeArray:t.selectSeaSize,setSeaSize:function(e){r(b(e))},numberOfShips:t.numberOfShips,numberOfShipsArray:a,setNumberOfShips:function(e){r(p(e))}})}var X=t(11);function $(){var e=Object(r.useState)(!1),n=Object(X.a)(e,2),t=n[0],a=n[1],c="\n    text-gray-400\n    cursor-pointer\n    ";return Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:t?c:"underline ".concat(c),onClick:function(){a(!t)},children:"Game rulle"}),Object(k.jsxs)("div",{className:"text-left max-w-mx text-gray-400",hidden:!t,children:[Object(k.jsx)("p",{children:"You're have several solo ships."}),Object(k.jsx)("p",{children:"They are distributed randomly across the playing field."}),Object(k.jsx)("p",{children:"Each player makes one move."}),Object(k.jsx)("p",{children:"Knock out all the ships from the enemy field!"})]})]})}function q(e){var n=e.play;return Object(k.jsx)("div",{className:"\r text-2xl\r p-2 \r h-screen\r flex \r flex-col \r items-center \r justify-center\r text-center text-white",children:n?Object(k.jsx)(Y,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(G,{}),Object(k.jsx)("div",{className:"text-gray-400 -mt-4",children:"for two players"}),Object(k.jsx)(R,{}),Object(k.jsx)($,{})]})})}function H(){var e=Object(w.c)(v);return Object(k.jsx)(q,{play:e.play})}function Q(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"\n        top-0 \n        back \n        fixed\n        h-screen \n        w-screen\n        bg-blue-900\n        \n        "}),Object(k.jsx)("div",{className:"\n      top-0 \n      back \n      fixed\n      h-screen \n      w-screen\n      bg-gradient-to-b from-black via-blue-900 to-black\n      opacity-50\n      "}),Object(k.jsx)("div",{className:"\n      top-0 \n      back \n      fixed\n      h-screen \n      w-screen\n      bg-gradient-to-r from-black via-gray-900 to-black\n      opacity-30\n      "})]})}t(23);var Z=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(H,{}),Object(k.jsx)(Q,{})]})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};t(24);i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(w.a,{store:O,children:Object(k.jsx)(Z,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/seabattle-ts-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/seabattle-ts-pwa","/service-worker.js");_?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ee(n,e)}))}}(),ne()}},[[25,1,2]]]);
//# sourceMappingURL=main.89b17edb.chunk.js.map