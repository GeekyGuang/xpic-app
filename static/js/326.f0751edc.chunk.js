"use strict";(self.webpackChunkxpic=self.webpackChunkxpic||[]).push([[326],{2326:function(n,e,t){t.r(e);var r,i=t(7186),s=t(7432),l=t(1358),u=t(9023),c=t(3208),a=t(4771),o=t(2791),d=t(5413),f=t(5751),x=t(4489),p=t(184),h=f.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  width: 100%;\n  gap: 8px;\n\n  img {\n    width: 100px;\n    height: 100px;\n    object-fit: cover;\n  }\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex: 1;\n    input {\n      margin-top: 4px;\n      border: 1px solid #d9d9d9;\n      width: 100%;\n      padding: 4px;\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    .buttons {\n      display: flex;\n      justify-content: flex-end;\n    }\n  }\n"]))),j=(0,u.Pi)((function(){var n=(0,c.o)().HistoryStore,e=(0,o.useRef)([]),t=function(){console.log("loadmore"),n.get()};return(0,o.useEffect)((function(){console.log("refs"),console.log(e.current)}),[e.current]),(0,o.useEffect)((function(){return t(),function(){return n.resetHistory()}}),[]),(0,p.jsx)(p.Fragment,{children:n.list?(0,p.jsx)(a.Z,{dataLength:n.list.length,next:t,loader:(0,p.jsx)(d.Z,{}),hasMore:!n.isLoading&&n.hasMore,endMessage:"",children:(0,p.jsx)(s.ZP,{dataSource:n.list,renderItem:function(t,r){return t?(0,p.jsx)(s.ZP.Item,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:t.attributes.url.attributes.url})}),(0,p.jsxs)("div",{className:"info",children:[(0,p.jsx)("h5",{children:t.attributes.filename}),(0,p.jsx)("input",{type:"text",value:t.attributes.url.attributes.url,readOnly:!0,ref:function(n){n&&(e.current[r]=n)}}),(0,p.jsxs)("div",{className:"buttons",children:[(0,p.jsx)(l.Z,{type:"default",size:"small",onClick:function(){(0,x.r0)(e.current[r])},children:"\u590d\u5236"}),(0,p.jsx)(l.Z,{type:"default",size:"small",children:(0,p.jsx)("a",{target:"_blank",href:t.attributes.url.attributes.url,rel:"noreferrer",children:"\u6253\u5f00"})}),(0,p.jsx)(l.Z,{type:"primary",size:"small",danger:!0,onClick:function(){n.delete(t.attributes.url.id,r)},children:"\u5220\u9664"})]})]})]})},t.id):""}})}):(0,p.jsx)(d.Z,{})})}));e.default=j}}]);
//# sourceMappingURL=326.f0751edc.chunk.js.map