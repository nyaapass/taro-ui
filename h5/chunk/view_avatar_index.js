(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"132":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),n=_interopRequireDefault(a(4)),o=_interopRequireDefault(a(131)),i=a(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.default.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"133":function(e,t,a){},"460":function(e,t,a){},"86":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=function get(e,t,a){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var l=Object.getPrototypeOf(e);return null===l?void 0:get(l,t,a)}if("value"in r)return r.value;var n=r.get;return void 0!==n?n.call(a):void 0},n=_interopRequireDefault(a(1)),o=_interopRequireDefault(a(4)),i=a(130),c=a(137),u=_interopRequireDefault(a(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(460);var s=function(e){function AvatarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AvatarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AvatarPage.__proto__||Object.getPrototypeOf(AvatarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AvatarPage,o.default.Component),r(AvatarPage,[{"key":"onClick","value":function onClick(){console.log(arguments)}},{"key":"render","value":function render(){var e="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg";return n.default.createElement(i.View,{"className":"page"},n.default.createElement(u.default,{"title":"Avatar 头像"}),n.default.createElement(i.View,{"className":"doc-body"},n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"圆形头像"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"size":"small","image":e})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"image":e})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"size":"large","image":e}))))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"圆角矩形头像"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"small","image":e})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"image":e})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"large","image":e}))))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"圆形头像（支持文本）"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"size":"small","text":"凹"})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"text":"凹"})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"circle":!0,"size":"large","text":"凹"}))))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"圆角矩形头像（支持文本）"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"small","text":"凹"})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"text":"凹"})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"large","text":"凹"}))))),o.default.getEnv()===o.default.ENV_TYPE.WEAPP&&n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"openData 头像（仅微信小程序支持）"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"openData":{"type":"userAvatarUrl"},"size":"small"})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"openData":{"type":"userAvatarUrl"}})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"large","openData":{"type":"userAvatarUrl"}})),n.default.createElement(i.View,{"className":"subitem"},n.default.createElement(c.AtAvatar,{"size":"large","circle":!0,"openData":{"type":"userAvatarUrl"}})))))))}},{"key":"componentDidMount","value":function componentDidMount(){l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidMount",this)&&l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidShow",this)&&l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidHide",this)&&l(AvatarPage.prototype.__proto__||Object.getPrototypeOf(AvatarPage.prototype),"componentDidHide",this).call(this)}}]),AvatarPage}();t.default=s}}]);