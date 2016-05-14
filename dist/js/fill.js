/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	$('.radius_input').on('focus', function () {
	  $(this).siblings('.input_value').animate({ top: '-6px' }, 500);
	});
	$('.radius_input').on('blur', function () {
	  if ($(this).val() !== '') {
	    return false;
	  }
	  $(this).siblings('.input_value').animate({ top: '9px' }, 500);
	});
	
	// 图片上传插件
	var $pick = $('#filePicker');
	var $img = $('formUploadImg').find('img');
	var $result = $('formUploadImg').find('.formUploadImg_result');
	var uploader = WebUploader.create({
	  auto: true,
	  swf: './Uploader.swf',
	  server: 'd:',
	  pick: $pick[0],
	  accept: {
	    title: 'Images',
	    extensions: 'gif,jpg,jpeg,bmp,png',
	    mimeTypes: 'image/*'
	  },
	  resize: false,
	  compress: false
	});
	// 添加图片
	uploader.on('fileQueued', function (file) {
	  uploader.makeThumb(file, function (error, src) {
	    if (error) {
	      $img.replaceWith('<span>不能预览</span>');
	      return;
	    }
	    $img.attr('src', src).parent().show();
	  }, 100, 100);
	  $result.text('正在上传…').show();
	});
	// 上传成功
	uploader.on('uploadSuccess', function (file, res) {
	  $result.text('上传成功');
	  scope.$apply(function () {
	    ngModel.$setViewValue(res.path + res.name);
	  });
	});
	// 上传失败
	uploader.on('uploadError', function () {
	  $result.text('上传出错');
	});
	
	$('.imgUpload_album').perfectScrollbar();

/***/ }
/******/ ]);
//# sourceMappingURL=fill.js.map