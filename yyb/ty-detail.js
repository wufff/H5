$(function () {
  //关闭按钮
  $(".close").click(function () {
      $(this).parents(".dialog").hide();
  });

  $(".yuy-bt").click(function () {
        $(".selectAge").show();
  });

   $(".btn-yellow").click(function () {
       alert(123);
   })
});