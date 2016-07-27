// Logic for Ping Pong game
function pingPong(ppBot){
  var ppResults = [];
  for (i = 1; i <= ppBot; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        ppResults.push('<li>pingpong</li>');
    }
    else if (i % 3 === 0) {
        ppResults.push("<li>ping</li>");
    }
    else if (i % 5 === 0) {
        ppResults.push("<li>pong</li>");
    }
    else {
        ppResults.push("<li>" + i + "</li>");
    }
  }return ppResults;
};

// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    var results = pingPong(input);
    $("#output").empty().append(results);
  });
});


// $(document).ready(function() {
//   $("form#pingPongInput").submit(function(event){
//     event.preventDefault();
//     var userInput = parseInt($("input#userInput").val());
//     var bullets = "";
//
//     for (i = 1; i <= userInput; i++) {
//       bullets += "<li>";
//       if ((i % 3 === 0) && (i % 5 === 0)) {
//           bullets += "ping-pong";
//       }
//       else if (i % 3 === 0) {
//           bullets += "ping";
//       }
//       else if (i % 5 === 0) {
//           bullets += "pong";
//       }
//       else {
//           bullets += i;
//       }
//       bullets += "</li>";
//       $("#output").empty().append(bullets);
//     }
//   });
// });
//
// if ((i % 3 === 0) && (i % 5 === 0)) {
//     $("#output").append("<li>pingpong</li>");
// }
// else if (i % 3 === 0) {
//     $("#output").append("<li>ping</li>");
// }
// else if (i % 5 === 0) {
//     $("#output").append("<li>pong</li>");
// }
// else {
//     $("#output").append("<li>" + i + "</li>");
// }
