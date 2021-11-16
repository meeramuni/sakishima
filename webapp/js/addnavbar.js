// Create the navigation bar
$(document).ready(function () {

  var navitems = '';

  navitems += '<a href="index">ホームページ</a>' +
         '<a href="about">めーらについて</a>' +
         '<a href="stories">物語</a>' +
         '<a href="lessons">授業</a>' +
         '<a href="games">ゲーム</a>' +
         '<a href="soundcorrespondences">音の規則</a>' +
         '<a href="dictionary">辞書</a>' +
         '<a href="conjugation">活用表</a>' +
         '<a href="media">メディア</a>' +
         '<a href="contact">連絡</a>';

  $('#nav').append(navitems);

});