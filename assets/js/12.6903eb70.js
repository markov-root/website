(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{319:function(t,s,a){},334:function(t,s,a){"use strict";a(319)},357:function(t,s,a){"use strict";a.r(s);var e={name:"CompactView",props:{books:{type:Array,required:!0}},methods:{getLastName(t){if(!t)return"";const s=t.split(" ");return s[s.length-1]}}},o=(a(334),a(17)),n=Object(o.a)(e,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"book-collection compact-view"},t._l(t.books,(function(a){return s("div",{key:a.isbn||a.title,staticClass:"book-card"},[s("div",{staticClass:"book-entry"},[s("span",{staticClass:"book-title truncate",attrs:{title:a.displayName||a.title}},[t._v("\n        "+t._s(a.displayName||a.title)+"\n      ")]),t._v(" "),a.author?s("span",{staticClass:"book-author truncate",attrs:{title:a.author}},[t._v("\n        "+t._s(t.getLastName(a.author))+"\n      ")]):t._e()])])})),0)}),[],!1,null,"5c8a97a0",null);s.default=n.exports}}]);