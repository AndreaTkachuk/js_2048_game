!function(){var e=new(function(){var e;function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),console.log(e)}return e=[{key:"moveLeft",value:function(){}},{key:"moveRight",value:function(){}},{key:"moveUp",value:function(){}},{key:"moveDown",value:function(){}},{key:"getScore",value:function(){}},{key:"getState",value:function(){}},{key:"getStatus",value:function(){}},{key:"start",value:function(){}},{key:"restart",value:function(){}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,e),t}()),t=document.querySelector(".button"),n=document.querySelector(".message-start"),r=document.querySelector(".message-win"),o=document.querySelector(".message-lose"),a=document.querySelector(".game-score"),u=document.querySelectorAll(".field-cell"),s="idle",c=0,l=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=[];function f(e){if(!e.includes(0))return"message-lose";var t=e.map(function(e,t){return 0===e?t:null}).filter(function(e){return null!==e});e[t[Math.floor(Math.random()*t.length)]]=.1>=Math.random()?4:2}function d(e){for(var t,n,r,o,a,u,s=e.length-2;s>=0;s--)0===e[s]&&0!==e[s+1]&&(t=[e[s+1],e[s]],e[s]=t[0],e[s+1]=t[1]),0!==e[s]&&e[s+1]===e[s]&&0===e[s-1]&&(n=[e[s+1],e[s-1]],e[s-1]=n[0],e[s+1]=n[1]);for(var l=0;l<e.length-1;l++)0===e[l]&&l+2<e.length&&(r=[e[l+1],e[l+2],0],e[l]=r[0],e[l+1]=r[1],e[l+2]=r[2]),0!==e[l]&&e[l+1]===e[l]&&(o=[e[l+1]+e[l],0],e[l]=o[0],e[l+1]=o[1],c+=e[l]);for(var i=e.length-2;i>=0;i--)0===e[i]&&0!==e[i+1]&&(a=[e[i+1],e[i]],e[i]=a[0],e[i+1]=a[1]),0!==e[i]&&e[i+1]===e[i]&&0===e[i-1]&&(u=[e[i+1],e[i-1]],e[i-1]=u[0],e[i+1]=u[1]);return e}function v(e){for(var t,n,r,o,a,u,s=1;s<e.length;s++)0===e[s]&&0!==e[s-1]&&(t=[e[s-1],e[s]],e[s]=t[0],e[s-1]=t[1]),0!==e[s]&&e[s-1]===e[s]&&0===e[s+1]&&(n=[e[s-1],e[s+1]],e[s+1]=n[0],e[s-1]=n[1]);for(var l=e.length-1;l>=0;l--)0===e[l]&&l-2>0&&(r=[e[l-1],e[l-2],0],e[l]=r[0],e[l-1]=r[1],e[l-2]=r[2]),0!==e[l]&&e[l-1]===e[l]&&(o=[e[l-1]+e[l],0],e[l]=o[0],e[l-1]=o[1],c+=e[l]);for(var i=1;i<e.length;i++)0===e[i]&&0!==e[i-1]&&(a=[e[i-1],e[i]],e[i]=a[0],e[i-1]=a[1]),0!==e[i]&&e[i-1]===e[i]&&0===e[i+1]&&(u=[e[i-1],e[i+1]],e[i+1]=u[0],e[i-1]=u[1])}function h(){var e=[];u.forEach(function(e){return e.className="field-cell"});for(var t=0;t<4;t++)for(var n=0;n<4;n++)e.push(i[t][n]);e.includes(2048)&&r.classList.remove("hidden");for(var a=0;a<e.length;a++)0!==e[a]&&(u[a].textContent=e[a]),0===e[a]&&(u[a].textContent="");u.forEach(function(e){e.textContent>0&&e.classList.add("field-cell--".concat(e.textContent))});for(var s=[],c=!1,l=0;l<4;l++){for(var f=[],d=0;d<4;d++)f.push(i[d][l]);s.push(f)}for(var v=0;v<4;v++){for(var h=0;h<3;h++)i[v].includes(0)||i[v][h]!==i[v][h+1]||(c=!0);i[v].includes(0)&&(c=!0)}for(var m=0;m<4;m++)for(var g=0;g<3;g++)s[m].includes(0)||s[m][g]!==s[m][g+1]||(c=!0);c||o.classList.remove("hidden")}function m(e){for(var t=[],n=0;n<4;n++)for(var r=0;r<4;r++)t.push(e[n][r]);t.includes(0)?f(t):o.classList.remove("hidden");for(var a=0,u=0;u<4;u++)for(var s=0;s<4;s++)e[u][s]=t[a],a++;return e}function g(e,t){for(var n=[],r=[],o=0;o<e.length;o++)for(var a=0;a<e.length;a++)n.push(e[o][a]),r.push(t[o][a]);for(var u=0;u<n.length;u++)if(n[u]!==r[u])return!1;return!0}t.addEventListener("click",function(n){t.classList.contains("start")?e.start():e.restart()}),e.getScore=function(){return a.textContent},e.getState=function(){return i},e.getStatus=function(){return s},e.start=function(){t.classList.replace("start","restart"),t.textContent="Restart",n.className.includes("hidden")||n.classList.add("hidden"),r.className.includes("hidden")||r.classList.add("hidden"),o.className.includes("hidden")||o.classList.add("hidden"),s="playing",i=structuredClone(l),a.textContent=0;for(var e=0;e<2;e++)f(i[Math.floor(4*Math.random())]);h()},e.restart=function(){t.classList.replace("restart","start"),t.textContent="Start",n.classList.remove("hidden"),r.className.includes("hidden")||r.classList.add("hidden"),o.className.includes("hidden")||o.classList.add("hidden"),a.textContent=0,s="idle",i=structuredClone(l),h()},e.moveLeft=function(){var e=structuredClone(i);i.forEach(function(e){return d(e)}),g(e,i)||m(i),e=null,a.textContent=c,h()},e.moveRight=function(){var e=structuredClone(i);i.forEach(function(e){return v(e)}),g(e,i)||m(i),e=null,a.textContent=c,h()},e.moveUp=function(){var e=function(e){for(var t=[],n=[],r=0;r<4;r++){for(var o=[],a=0;a<4;a++)o.push(e[a][r]);t.push(o)}t.forEach(function(e){return d(e)});for(var u=0;u<4;u++){for(var s=[],c=0;c<4;c++)s.push(t[c][u]);n.push(s)}return n}(i),t=structuredClone(i);i=structuredClone(e),e=null,g(t,i)||m(i),t=null,a.textContent=c,h()},e.moveDown=function(){var e=function(e){for(var t=[],n=[],r=0;r<4;r++){for(var o=[],a=0;a<4;a++)o.push(e[a][r]);t.push(o)}t.forEach(function(e){return v(e)});for(var u=0;u<4;u++){for(var s=[],c=0;c<4;c++)s.push(t[c][u]);n.push(s)}return n}(i),t=structuredClone(i);i=structuredClone(e),e=null,g(t,i)||m(i),t=null,a.textContent=c,h()},document.addEventListener("keydown",function(t){"ArrowLeft"===t.key&&e.moveLeft(),"ArrowRight"===t.key&&e.moveRight(),"ArrowUp"===t.key&&e.moveUp(),"ArrowDown"===t.key&&e.moveDown()})}();
//# sourceMappingURL=index.d0caef16.js.map
