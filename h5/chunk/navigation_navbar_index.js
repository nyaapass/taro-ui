(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"107":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0},r=_interopRequireDefault(n(1)),l=n(4),a=_interopRequireDefault(l),c=n(130),s=n(137),u=_interopRequireDefault(n(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(505);var p=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(i))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),o(Index,[{"key":"handleClick","value":function handleClick(e){(0,l.showToast)({"title":e,"duration":2e3,"icon":"success"})}},{"key":"clickReturn","value":function clickReturn(){(0,l.showToast)({"title":"返回","duration":2e3,"icon":"success"})}},{"key":"clickMy","value":function clickMy(){(0,l.showToast)({"title":"我的","duration":2e3,"icon":"success"})}},{"key":"clickList","value":function clickList(){(0,l.showToast)({"title":"功能列表","duration":2e3,"icon":"success"})}},{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"page"},r.default.createElement(u.default,{"title":"NavBar 导航栏"}),r.default.createElement(c.View,{"className":"doc-body"},r.default.createElement(c.View,{"className":"panel"},r.default.createElement(c.View,{"className":"panel__title"},"基础用法"),r.default.createElement(c.View,{"className":"panel__content no-padding"},r.default.createElement(c.View,{"className":"example-item"},r.default.createElement(s.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left"})),r.default.createElement(c.View,{"className":"example-item"},r.default.createElement(s.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),r.default.createElement(c.View,{"className":"example-item"},r.default.createElement(s.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"user"})))),r.default.createElement(c.View,{"className":"panel"},r.default.createElement(c.View,{"className":"panel__title"},"自定义左上角文案"),r.default.createElement(c.View,{"className":"panel__content no-padding"},r.default.createElement(c.View,{"className":"example-item"},r.default.createElement(s.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),r.default.createElement(c.View,{"className":"example-item"},r.default.createElement(s.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))),r.default.createElement(c.View,{"className":"panel"},r.default.createElement(c.View,{"className":"panel__title"},"自定义颜色"),r.default.createElement(c.View,{"className":"panel__content no-padding"},r.default.createElement(s.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}))),r.default.createElement(c.View,{"className":"panel"},r.default.createElement(c.View,{"className":"panel__title"},"自定义图标样式"),r.default.createElement(c.View,{"className":"panel__content no-padding"},r.default.createElement(s.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":{"value":"user","size":36,"color":"red"}}))),r.default.createElement(c.View,{"className":"panel"},r.default.createElement(c.View,{"className":"panel__title"},"无下划线"),r.default.createElement(c.View,{"className":"panel__content no-padding"},r.default.createElement(s.AtNavBar,{"border":!1,"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))))}},{"key":"componentDidMount","value":function componentDidMount(){i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&i(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=p},"132":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(4)),l=_interopRequireDefault(n(131)),a=n(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(a.View,{"className":"doc-header"},i.default.createElement(a.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"133":function(e,t,n){},"505":function(e,t,n){}}]);