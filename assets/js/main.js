$(document).ready(function() {

  // $('form').submit(function(){
  //   $(':submit', this).attr('disabled', 'disabled');
  // });

  // Sign in
  // $('#signinForm').submit(function(e) {
  //   e.preventDefault();
  //   var email = $('#email').val();
  //   var password = $('#password').val();
  //   var password2 = $('#password2').val();
  //   var first_name = $('#first_name').val();
  //   var last_name = $('#last_name').val();
  //   var phone = $('#phone').val();

  //   $(".error").remove();

  //   // Valid email
  //   if (email.length < 1) {
  //     $('#email').after('<span class="error">Введите Ваш email</span>');
  //   } else {
  //     var regEx = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  //     var validEmail = regEx.test(email);
  //     if (!validEmail) {
  //       $('#email').after('<span class="error">Email не верный</span>');
  //     }
  //   }

  //   // Valid Password
  //   if (password.length < 8) {
  //     $('#password').after('<span class="error">Пароль должен имень минимум 8 символов</span>');
  //   }
  //   var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  //   var validPass = regEx.test(password);
  //   if (!validPass) {
  //     $('#password').after('<span class="error">Пароль должен имень строчные и прописные латинские буквы, цифры</span>');
  //   }
  //   if (password2 != password) {
  //     $('#password2').after('<span class="error">Пароли должны совпадать</span>');
  //   }

  //   // Valid personal information
  //   if (first_name.length < 1) {
  //     $('#first_name').after('<span class="error">Введите Ваше имя</span>');
  //   }
  //   if (last_name.length < 1) {
  //     $('#last_name').after('<span class="error">Введите фамилию</span>');
  //   }
  //   // Valid phone
  //   var regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //   var validPhone = regEx.test(phone);
  //   if (!validPhone) {
  //     $('#phone').after('<span class="error">Не верный номер телефона</span>');
  //   }
  // });

  // // Log in
  // $('#loginForm').submit(function(e) {
  //   e.preventDefault();
  //   var email = $('#email').val();
  //   var password = $('#password').val();

  //   $(".error").remove();

  //   // Valid email
  //   if (email.length < 1) {
  //     $('#email').after('<span class="error">Введите Ваш email</span>');
  //   } else {
  //     var regEx = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  //     var validEmail = regEx.test(email);
  //     if (!validEmail) {
  //       $('#email').after('<span class="error">Email не верный</span>');
  //     }
  //   }

  //   // Valid password
  //   if (password.length < 1) {
  //     $('#password').after('<span class="error">Введите пароль</span>');
  //   }
  // });


  $('.addToList').click(function(){
    var title = $(this).parents('ul').children('li.title')[0].textContent.trim();
    var price = $(this).parents('ul').children('li.price')[0].textContent;
    var itemId = $(this).parents('ul').children('li.title').children('input[name=product-id]').val();
    var number = $(this).parents('ul').children('li').children('.quantity-product').val();
    var newItem = "<li class='ml-2 my-1 d-flex justify-content-between'><div class='d-flex'><input type='number' class='px-1 quantity-product-val' name='product_quantity_"+ itemId +"' value='"+ number +"' hidden><input name='product_id' type='number' value='"+ itemId +"' hidden><input type='number' name='price' value='"+ price +"' hidden><span class='show-quantity'>"+ number +"</span><div class='product-name ml-2'>"+ title +"</div></div><div class='product-price'>"+ price +"</div></li>";

    // sum's counter
    if (number > 0) {
      $('.order-list.empty').empty().removeClass('empty');
      $('.order-list').append(newItem);

      var product_price = $('.order-list .product-price');
      var quantity_product = $('.quantity-product-val');
      var sum = 0;
      for (var i = 0; i < product_price.length; i++) {
        var price = parseInt(product_price[i].textContent);
        var quantity = quantity_product[i].value;
        sum += price * quantity;
      }
      $('.total-sum .sum').empty().append(sum);
      $('.total-sum').show();
    }
  });




  $('#clean-list').click(function(){
    var emptyLi = '<li class="ml-2">Ваш список заказа пуст</li><li class="ml-2">Сделайте заказ...</li>';
    $('.order-list').empty();
    $('.total-sum').hide();
    $('.order-list').addClass('empty').append(emptyLi);
  });

});
