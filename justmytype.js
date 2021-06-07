$("document").ready(function () {
  // When page loads hide the Uppercase Keyboard
  let upperKeys = $("#keyboard-upper-container");
  let lowerKeys = $("#keyboard-lower-container");
  // Objetive 4
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  //Objetive 6 NEEDS EXPLANATIOn
  let sentenceIndex = 0;
  let letterIndex = 0;
  let numberOfMistakes = 0;
  let thisSentence = sentences[sentenceIndex];
  let thisLetter = thisSentence[letterIndex];

  $("#sentence").append(thisSentence);
  $("#target-letter").append(thisLetter);
if ( "#target-letter" == "") {
      $("#target-letter").text("space");
    }
  // Objective 1
  upperKeys.hide();

  // Objective 6
  //    let counter = 0;
  //   $("<p id='sentencep'>" + sentences[counter] + "</p>").appendTo("#sentence")
  //   //function oneAtTime(sentence)
  //   console.log(sentences[counter].length)

  // for (let i = 0; i < sentences.charAt.length; i++);
  // let displayLetter = sentences[counter].charAt(counter);
  // console.log(displayLetter)
  // $("<h1 id='display-letter'>" + eachLetter[counter] + "</h1>").appendTo("#target-letter")

  // Objetive 2
  $(document).on("keydown keyup", function (e) {
    if (e.keyCode == 16) {
      lowerKeys.toggle();
      upperKeys.toggle();
    }
  });
  // need to be explained
  let s = 0;
  let m = 0;
  let h = 0;
  $(document).one("keypress", function (e) {
    let myTimer = setInterval(aFunction, 1000);
    $("<div id='timer'></div>").appendTo("#prompt-container");
    //Need to be explained
    function aFunction() {
      $("#timer").text(++s);
    }
    if (s == 60) {
      m++;
      $("#timer").text(m + s);
    } else if (m == 60) {
      $("#timer").text(h + m + s);
    }
  });

  // Objetive 3
  $(document).on("keypress", function (e) {
    // console.log(e);
    
    // Step 7
    let whichKey = e.key;
    if (whichKey == thisSentence[letterIndex]) {
      //$("#feedback").append("✅");
      $("#yellow-block").css({ left: "+=17.9px" }, "fast");
      let spanPositive = $("<span class='glyphicon glyphicon-ok'></span>")
      $("#feedback").append(spanPositive);
    } else {
      //$("#feedback").append("❌");
      // $("#yellow-block").css({left: "-=17.9px"});
      numberOfMistakes++;
      letterIndex--;
      let spanNeg = $("<span class='glyphicon glyphicon-remove'></span>")
      $("#feedback").append(spanNeg);
    }

    //Objective 6
    letterIndex++;
    thisLetter = thisSentence[letterIndex];

    // thisLetterLength = thisLetter.length

    $("#target-letter").text(thisLetter);

    if (letterIndex == thisSentence.length) {
      // console.log("By George Your On your Way")
      $("#feedback").empty();
    }
    if (letterIndex == sentences[sentenceIndex].length) {
      letterIndex = 0;
      sentenceIndex++;
      let timeTyped = s / 60;
      function stopTimer() {
        clearInterval(myTimer);
        if (sentences[sentenceIndex] == undefined) {
          // Step 8
        }

        alert("CONGRAGAJAMALATIONS! You Typed in " + timeTyped + " minutes");
        // let numberOfWords = $("#feedback").innerText("✅").length

        //   numberOfWords / minutes - 2 * numberOfMistakes
      }
      thisSentence = sentences[sentenceIndex];
      thisLetter = thisSentence[letterIndex];
      $("#sentence").text(thisSentence);
      $("#target-letter").text(thisLetter);
      $("#yellow-block").css({ left: "17.9px" });
      // $("#feedback").reset();
    }

    let key = $("#" + e.which);
    key.css("background-color", "yellow");

    $(document).keyup(function () {
      setTimeout(function () {
        key.css("background-color", "");
      }, 90);
    });

    // key.toggle(yellow)
    //(function (){
    //       key.css("background-color", "yellow")}) })
    // console.log(idForAscii);
    // $(".well well-lg key").on ("click", function(){
    //     $(".well well-lg key").css("background-color", "yellow"
    // //     if (e.keyCode == 16){
    // //           lowerKeys.show();
    // //           upperKeys.hide();
    // //       }else if (e.keyCode == 86){
    // //         $("#86").css("background-color", "revert"); })
  });
});
