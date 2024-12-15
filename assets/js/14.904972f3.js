(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{348:function(t,i,a){},375:function(t,i,a){"use strict";a(348)},389:function(t,i,a){"use strict";a.r(i);a(119);let s=null;var o={name:"Cite",props:{id:{type:String,required:!0}},data:()=>({isLoading:!0,error:null,showTooltip:!1}),computed:{arxivId(){return this.id.replace("arxiv-","")},citation(){var t;return null===(t=s)||void 0===t?void 0:t[this.arxivId]},displayText(){if(this.isLoading||!this.citation)return this.arxivId;const t=this.citation.authors;if(null==t||!t.length)return this.arxivId;return`${t[0].split(" ").pop()} et al., ${new Date(this.citation.published_date).getFullYear()}`}},methods:{async loadData(){if(this.isLoading)try{if(!s){const t=await fetch("/website/databases/arxiv.json");if(!t.ok)throw new Error("Failed to load arxiv data");s=await t.json()}}catch(t){console.error("Error loading citation:",t),this.error=t}finally{this.isLoading=!1,this.showTooltip=!0}else this.showTooltip=!0},formatAuthors:t=>null!=t&&t.length?t.length<=2?t.join(", "):t[0]+", et al.":"Unknown",formatYear:t=>t?new Date(t).getFullYear():""}},e=(a(375),a(17)),n=Object(e.a)(o,(function(){var t=this,i=t._self._c;return i("span",{staticClass:"cite-container"},[i("span",{staticClass:"cite-text",on:{mouseenter:t.loadData}},[t._v("\n    ["+t._s(t.displayText)+"]\n  ")]),t._v(" "),!t.isLoading&&t.citation&&t.showTooltip?i("div",{staticClass:"cite-tooltip"},[i("div",{staticClass:"cite-tooltip-content"},[i("div",{staticClass:"cite-title"},[t._v(t._s(t.citation.title))]),t._v(" "),i("div",{staticClass:"cite-authors"},[t._v(t._s(t.formatAuthors(t.citation.authors)))]),t._v(" "),i("div",{staticClass:"cite-meta"},[i("span",[t._v(t._s(t.formatYear(t.citation.published_date)))]),t._v(" "),i("span",[t._v("arXiv:"+t._s(t.arxivId))])])])]):t._e()])}),[],!1,null,null,null);i.default=n.exports}}]);