tabCommune = $( document ).ready(function() {
    console.log('Ready to load the file');
   $.ajax({
     type : 'get',
     url : '../../app/docs/laposte_hexasmal.csv',
     dataType : 'text'
   })
   .done(function( data ) {
     console.log(data);
     $("#results").html(JSON.stringify(data))
   })
   .fail(function( jqXHR, textStatus ) {
     console.log(jqXHR);
     console.log(textStatus);
   });
})
for (tabCommune  as value)


