// Create the navigation bar
$(document).ready(function () {

  var navitems = '';

  navitems += '<a href="index">Homepage</a>' +
         // '<a href="about">めーらについて</a>' +
         // '<a href="howto">ウェブサイトの使い方</a>' +
         '<a href="stories">Stories</a>' +
         '<a href="lessons">Lessons</a>' +
         // '<a href="games">ゲーム</a>' +
         // '<a href="soundcorrespondences">音の規則</a>' +
         '<a href="dictionary">Dictionary</a>'
         // '<a href="conjugation">活用表</a>' +
         // '<a href="media">メディア</a>' +
         // '<a href="contact">連絡</a>';

  $('#nav').append(navitems);

});