let tableauDesVilles = [];
$( document ).ready(function() {
    console.log('Ready to load the file');
    
    $.ajax({
      type : "GET",
      url :  'docs/laposte_hexasmal.csv ',
      datatype : "text",
   })
   // cela fonctionnait bien avec les prénoms de la base de données de Rennes mais une erreur s'affiche sur le fichier
   .done( function (data) {
    tableauDesVilles = data.split("\n");
  
   })
   .fail(function( jqXHR, textStatus,errorThrow ) {
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrow)
   });   
})
var villeEtCode=[]
$('#zip_code').keyup(recherche);

const codePostale=2
const ville=1

function recherche()
{
  if ($(this).val().length>=3){
    
  for (let i = 0; i < tableauDesVilles.length; i++) 
  {
    villeEtCode=tableauDesVilles[i].split(";")
  
     if ( villeEtCode[codePostale].startsWith($(this).val()))
      {
        console.log(villeEtCode[ville])
      }

      
    
  }
}
}
   