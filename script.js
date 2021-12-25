function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animate__animated');
};
$('#myModal').on('show.bs.modal', function (e) {
  var anim = $('#entrance').val();
      testAnim(anim);
})
$('#myModal').on('hide.bs.modal', function (e) {
  var anim = $('#exit').val();
      testAnim(anim);
})

 $("#c-btn").on('click', function () {
            $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
        });