$( document ).ready(function() {
    console.log('Ready to load the file');
    $.ajax({
      type : "GET",
      url :  'docs/laposte_hexasmal.csv ',
      datatype : "text",
   })
   // cela fonctionnait bien avec les prénoms de la base de données de Rennes mais une erreur s'affiche sur le fichier
   .done( function (data) {
    var tableauDesVilles = data.split("\n");
    var ville="";
   
    for (let i = 0; i < tableauDesVilles.length; i++) {
      ville=ville+"<br>"+tableauDesVilles[i]
       
     }

    
     $("#test").html(ville)
   })
   .fail(function( jqXHR, textStatus,errorThrow ) {
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrow)
   });   
})  

