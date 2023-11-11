$(document).ready(function(){

  // Product info
  $('#infoProductForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var price = $('#price').val();
    var describe = $('#describe').val();

    $(".error").remove();

    // Valid name
    if (name.length < 1) {
      $('#name').after('<span class="error">Введите наименование продукта</span>');
    }
  });


  // User info
  $('#infoUser').submit(function(e) {
    e.preventDefault();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var role = $('#role').val();

    $(".error").remove();

    // Valid email
    if (email.length < 1) {
      $('#email').after('<span class="error">Введите Ваш email</span>');
    } else {
      var regEx = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Email не верный</span>');
      }
    }

    // Valid phone
    var regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var validPhone = regEx.test(phone);
    if (!validPhone) {
      $('#phone').after('<span class="error">Не верный номер телефона</span>');
    }
  });


  // Answer comment
  var ansBtn = $('.answerBtn');
  for (var i = 0; i < ansBtn.length; i++) {
    var btn = ansBtn[i];
    $(btn).click(function() {
      var form = '<form action="#" method="post" class="answerCommentForm"><div class="form-group"><textarea name="message" required class="form-control" placeholder="Сообщение к отзыву"></textarea></div><div class="form-group"><input type="submit" value="Ответить" class="btn btn-primary"></div></form>';
      $(this).hide().after(form);
    });
  }
  


  $('#infoArticleForm').submit(function(e) {
    e.preventDefault();
    var title = $('#title').val();
    var describe = $('#describe').val();

    $(".error").remove();

    // Valid article
    if (title.length < 1) {
      $('#title').after('<span class="error">Введите заголовок статьи</span>');
    }

    // Valid describe
    if (describe.length < 1) {
      $('#describe').after('<span class="error">Введите описание</span>');
    } else {
      if (describe.length < 25) {
        $('#describe').after('<span class="error">Введите описание подробнее</span>');
      }
    }
  });
});
