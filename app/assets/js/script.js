$(document).ready(function () {
  console.log('Ready to load the file');
  $.ajax({
    type: "GET",
    url: "../docs/laposte_hexasmal.csv",
    datatype: "text"
  })
    .done(function (data) {
      
      function splitString(string, separator) {
        string.split(separator);
      }
      var tempestString = data;
      var tableau = splitString(tempestString, ";");
      console.log(tableau)
      $("#results").html(tableau)
    })
    .fail(function (jqXHR, textStatus, errorThrow) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrow);
    });
    
})