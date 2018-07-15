$(function(){
  $('#upload-images').change(function(){
    var obj = $('#upload-images')[0].files[0];
    var fr = new FileReader();
    fr.onload =function(){
      $('.preview-image').attr('src', getObjectURL(obj));
    }
    fr.readAsDataURL(obj);
  })

  $('#upload').click(function(){
    var file = $('#upload-images')[0].files[0];
    
    if(file){
      var imgdata = new FormData();
      imgdata.append('img', file);
      $.ajax({
        type: 'POST',
        url: '/upload',
        data: imgdata,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
         alert("上传成功");
        },
        error: function (jqXHR) {
          alert("上传失败")
        }
      })
    }
  })

  function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
      url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  }
  
})