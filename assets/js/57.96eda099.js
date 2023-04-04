(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{237:function(t,a,o){"use strict";o.r(a);var s=o(0),e=Object(s.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"upgrade-from-5-1-to-5-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-5-1-to-5-2"}},[t._v("#")]),t._v(" Upgrade from 5.1 to 5.2")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),a("p",[t._v("Laratrust 5.2 requires Laravel >= 5.6 and php >= 7.1.")])]),t._v(" "),a("p",[t._v("In order to upgrade from Laratrust 5.1 to 5.2 you have to follow these steps:")]),t._v(" "),a("ol",[a("li",[t._v("Change your "),a("code",[t._v("composer.json")]),t._v(" to require the 5.2 version of Laratrust:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"santigarcor/laratrust"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.2.*"')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Run "),a("code",[t._v("composer update")]),t._v(" to update the source code.")])]),t._v(" "),a("li",[a("p",[t._v("Run "),a("code",[t._v("php artisan config:clear")]),t._v(" and "),a("code",[t._v("php artisan cache:clear")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Update your "),a("code",[t._v("config/laratrust.php")]),t._v(" in the cache ttl from 60 to 3600 or the value you had but now put it in seconds.")])]),t._v(" "),a("li",[a("p",[t._v("Run "),a("code",[t._v("composer dump-autoload")]),t._v(".")])])]),t._v(" "),a("p",[t._v("Now you can use the 5.2 version without any problem.")])])}],!1,null,null,null);a.default=e.exports}}]);