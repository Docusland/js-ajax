$( document ).ready(function() {
    console.log('Ready to load the file');
});

$.ajax({
  type : "GET",
  url :  "../docs/laposte_hexasmal.csv",
  datatype : "text"
})
.done( function (data) {
 // console.log(data)
 $("#results").html(JSON.stringify(data))
})
.fail(function( jqXHR, textStatus, errorThrow ) {
 console.log(jqXHR);
 console.log(textStatus);
 console.log(errorThrow)
});

