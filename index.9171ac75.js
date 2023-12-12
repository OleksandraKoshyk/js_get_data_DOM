var t=document.querySelectorAll(".population"),e=0,o=0,n=document.querySelector(".total-population"),r=document.querySelector(".average-population"),l=!0,a=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var y=i.value;e+=+y.textContent.split(",").join("")}}catch(t){a=!0,u=t}finally{try{l||null==c.return||c.return()}finally{if(a)throw u}}o=e/t.length,n.textContent=e.toLocaleString("en-US"),r.textContent=o.toLocaleString("en-US");//# sourceMappingURL=index.9171ac75.js.map

//# sourceMappingURL=index.9171ac75.js.map
