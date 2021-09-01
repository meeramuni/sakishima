/*list of questions*/
      var q = ["ぐし のー かやー?<br /><br />", "うれー のー かやー?<br /><br />", "まやー のー かやー?<br /><br />",
      "ぬむ のー かやー?<br /><br />", "すぃま　ばそんなる のー かやー?<br /><br />", "ふぉー のー かやー?<br /><br />",
      "みしゅ　すぃる のー かやー?<br /><br />", "いん のー かやー?<br /><br />", "のー のー かやー?<br /><br />", "ふにん のー かやー?<br /><br />"];

/*suggested answers for each qs for answer button 1; c and i indicated whether answer is correct or incorrect*/
      var a1 = ["<button class=buttons002 onclick=q1c()>酒</button>",
                "<button class=buttons002 onclick=q2i()>島バナナ</button>",
                "<button class=buttons002 onclick=q3c()>猫</button>",
                "<button class=buttons002 onclick=q4i()>食べる</button>",
                "<button class=buttons002 onclick=q5i()>みかん</button>",
                "<button class=buttons002 onclick=q6i()>飲む</button>",
                "<button class=buttons002 onclick=q7c()>味噌汁</button>",
                "<button class=buttons002 onclick=q8i()>猫</button>",
                "<button class=buttons002 onclick=q9i()>これは</button>",
                "<button class=buttons002 onclick=q10i()>犬</button>"];

/*suggested answers for each qs for answer button 2; c and i indicated whether answer is correct or incorrect*/
      var a2 = ["<button class=buttons002 onclick=q1i()>何</button>",
                "<button class=buttons002 onclick=q2i()>犬</button>",
                "<button class=buttons002 onclick=q3i()>酒</button>",
                "<button class=buttons002 onclick=q4c()>飲む</button>",
                "<button class=buttons002 onclick=q5i()>これは</button>",
                "<button class=buttons002 onclick=q6c()>食べる</button>",
                "<button class=buttons002 onclick=q7i()>みかん</button>",
                "<button class=buttons002 onclick=q8i()>何</button>",
                "<button class=buttons002 onclick=q9i()>味噌汁</button>",
                "<button class=buttons002 onclick=q10i()>島バナナ</button>"];

/*suggested answers for each qs for answer button 2; c and i indicated whether answer is correct or incorrect*/
      var a3 = ["<button class=buttons002 onclick=q1i()>猫</button>",
                "<button class=buttons002 onclick=q2c()>これは</button>",
                "<button class=buttons002 onclick=q3i()>島バナナ</button>",
                "<button class=buttons002 onclick=q4i()>何</button>",
                "<button class=buttons002 onclick=q5i()>味噌汁</button>",
                "<button class=buttons002 onclick=q6i()>みかん</button>",
                "<button class=buttons002 onclick=q7i()>酒</button>",
                "<button class=buttons002 onclick=q8c()>犬</button>",
                "<button class=buttons002 onclick=q9c()>何</button>",
                "<button class=buttons002 onclick=q10i()>飲む</button>"];

/*suggested answers for each qs for answer button 1; c and i indicated whether answer is correct or incorrect*/
      var a4 = ["<button class=buttons002 onclick=q1i()>味噌汁</button>",
                "<button class=buttons002 onclick=q2i()>何</button>",
                "<button class=buttons002 onclick=q3i()>犬</button>",
                "<button class=buttons002 onclick=q4i()>これは</button>",
                "<button class=buttons002 onclick=q5c()>島バナナ</button>",
                "<button class=buttons002 onclick=q6i()>酒</button>",
                "<button class=buttons002 onclick=q7i()>島バナナ</button>",
                "<button class=buttons002 onclick=q8i()>飲む</button>",
                "<button class=buttons002 onclick=q9i()>これは</button>",
                "<button class=buttons002 onclick=q10c()>みかん</button>"];

/*list of called messsages when correct or incorrect button is clicked*/
      var c = ["正解", "正解", "正解", "正解", "正解", "正解", "正解", "正解", "正解", "正解"];
      var i = ["不正解", "不正解", "不正解", "不正解", "不正解", "不正解", "不正解", "不正解", "不正解", "不正解"];

/*adds a number when move on to next and adds pt if answer correctly*/
      var n = 0;
      n++;
      var s = 0;
      s++;

/*starts quiz*/
      function begin001() {
        disappear001.innerHTML = "";
        message001.innerHTML = "";
        question001.innerHTML = q[0];
        option001.innerHTML = a1[0];
        option002.innerHTML = a2[0];
        option003.innerHTML = a3[0];
        option004.innerHTML = a4[0];
        number001.innerHTML = n++;
      }

/*when correct answer is clicked*/
      function q1c() {
        answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new002()>次</button>";
        score001.innerHTML = s++;
      }

/*when incorrect answer is clicked*/
      function q1i() {
        answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new002()>次</button>";
      }

/*moves to next question*/
      function new002() {
        question001.innerHTML = q[1];
        option001.innerHTML = a1[1];
        option002.innerHTML = a2[1];
        option003.innerHTML = a3[1];
        option004.innerHTML = a4[1];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

/*rest of function repeat*/
      function q2c() {
        answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new003()>次</button>";
        score001.innerHTML = s++;
      }

      function q2i() {
        answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new003()>次</button>";
      }

      function new003() {
        question001.innerHTML = q[2];
        option001.innerHTML = a1[2];
        option002.innerHTML = a2[2];
        option003.innerHTML = a3[2];
        option004.innerHTML = a4[2];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q3c() {
        answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new004()>次</button>";
        score001.innerHTML = s++;
      }

      function q3i() {
        answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new004()>次</button>";
      }

      function new004() {
        question001.innerHTML = q[3];
        option001.innerHTML = a1[3];
        option002.innerHTML = a2[3];
        option003.innerHTML = a3[3];
        option004.innerHTML = a4[3];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q4c() {
        answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new005()>次</button>";
        score001.innerHTML = s++;
      }

      function q4i() {
        answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new005()>次</button>";
      }

      function new005() {
        question001.innerHTML = q[4];
        option001.innerHTML = a1[4];
        option002.innerHTML = a2[4];
        option003.innerHTML = a3[4];
        option004.innerHTML = a4[4];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q5c() {
        answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new006()>次</button>";
        score001.innerHTML = s++;
      }

      function q5i() {
        answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new006()>次</button>";
      }

      function new006() {
        question001.innerHTML = q[5];
        option001.innerHTML = a1[5];
        option002.innerHTML = a2[5];
        option003.innerHTML = a3[5];
        option004.innerHTML = a4[5];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q6c() {
        answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new007()>次</button>";
        score001.innerHTML = s++;
      }

      function q6i() {
        answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new007()>次</button>";
      }

      function new007() {
        question001.innerHTML = q[6];
        option001.innerHTML = a1[6];
        option002.innerHTML = a2[6];
        option003.innerHTML = a3[6];
        option004.innerHTML = a4[6];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q7c() {
        answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new008()>次</button>";
        score001.innerHTML = s++;
      }

      function q7i() {
        answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new008()>次</button>";
      }

      function new008() {
        question001.innerHTML = q[7];
        option001.innerHTML = a1[7];
        option002.innerHTML = a2[7];
        option003.innerHTML = a3[7];
        option004.innerHTML = a4[7];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q8c() {
        answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new009()>次</button>";
        score001.innerHTML = s++;
      }

      function q8i() {
        answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new009()>次</button>";
      }

      function new009() {
        question001.innerHTML = q[8];
        option001.innerHTML = a1[8];
        option002.innerHTML = a2[8];
        option003.innerHTML = a3[8];
        option004.innerHTML = a4[8];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q9c() {
        answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new010()>次</button>";
        score001.innerHTML = s++;
      }

      function q9i() {
        answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=new010()>次</button>";
      }

      function new010() {
        question001.innerHTML = q[9];
        option001.innerHTML = a1[9];
        option002.innerHTML = a2[9];
        option003.innerHTML = a3[9];
        option004.innerHTML = a4[9];
        next001.innerHTML = "";
        answer001.innerHTML = "";
        number001.innerHTML = n++;
      }

      function q10c() {
        answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=end001()>終わり</button>";
        score001.innerHTML = s++;
      }

      function q10i() {
        answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<button class=buttons001 onclick=end001()>終わり</button>";
      }

/*end of quiz*/
      function end001() {
        message001.innerHTML = "終わり";
        question001.innerHTML = "";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>リスタート</button>" + "</div>";
        answer001.innerHTML = "";
      }

/*restarts quiz*/
      function repeat001() {
        location.reload();
      }
