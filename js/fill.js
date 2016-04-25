$('.radius_input').on('focus', function () {
  $(this).siblings('.input_value').animate({ top: '-6px' }, 500)
})
$('.radius_input').on('blur', function () {
  if ($(this).val() !== '') {
    return false;
  }
  $(this).siblings('.input_value').animate({ top: '9px' }, 500)
})


// 图片上传插件
var $pick = $('#filePicker');
var $img = $('formUploadImg').find('img');
var $result = $('formUploadImg').find('.formUploadImg_result');
var uploader = WebUploader.create({
  auto: true,
  swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
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
uploader.on('fileQueued', (file) => {
  uploader.makeThumb(file, (error, src) => {
    if (error) {
      $img.replaceWith('<span>不能预览</span>');
      return;
    }
    $img.attr('src', src).parent().show();
  }, 100, 100);
  $result.text('正在上传…').show();
});
// 上传成功
uploader.on('uploadSuccess', (file, res) => {
  $result.text('上传成功');
  scope.$apply(() => {
    ngModel.$setViewValue(res.path + res.name);
  });
});
// 上传失败
uploader.on('uploadError', () => {
  $result.text('上传出错');
});