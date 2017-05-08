
/*!
 * vir-ui-loadmore v1.0.0
 * (c) 2017 cjg
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vir')) :
	typeof define === 'function' && define.amd ? define(['vir'], factory) :
	(global.VirUiTab = factory(global.Vir));
}(this, (function (Vir) { 'use strict';

Vir = 'default' in Vir ? Vir['default'] : Vir;

// import $ from 'jquery'

var index = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  return Vir({
    data: {},
    events: {},
    validate: {},
    watch: {},
    methods: {},
    init: function init() {}
  });
};

return index;

})));
//# sourceMappingURL=index.js.map
