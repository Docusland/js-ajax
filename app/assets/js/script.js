tabCommune =  $.ajax({
     type : 'get',
     url : '../docs/laposte_hexasmal.csv',
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
foreach (tabCommune  as colonne =>  value)
{

}


