$( document ).ready(function() {
    console.log('Ready to load the file');
  // $.ajax({
  // })
  // .done(function( msg ) {
  // })
  // .fail(function( jqXHR, textStatus ) {
  // });
}) 

$(document).ready(function(){
  $("input").on("keyup", function() {
  var code_postal = $("input").val().toLowerCase();
  $.ajax({
   url:"http://localhost/laposte_hexasmal.csv",
   dataType:"text",
   success:function(data)
   {
    var data_commune = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table-striped">';
    for(var count = 0; count<data_commune.length; count++)
    {
     var cellule = data_commune[count].split(";");
     table_data += '<tr>';
     for(var cellule_count=0; cellule_count<cellule.length; cellule_count++)
     {
      if(count === 0)
      {
       table_data += '<th><i>'+cellule[cellule_count]+'</i></th>';
      }
      else
      {     
      //Passage de chaque ligne du tableau
      if(cellule[2]==code_postal){

        table_data += '<td>'+cellule[cellule_count]+'</td>';

      }
      }
     }

     table_data += '</tr>';
    }
    table_data += '</table>';
    $('#results').html(table_data);
    

   }
  });
 });
 
});



 
    







