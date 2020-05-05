$( document ).ready(function() {
    console.log('Ready to load the file');
  $.ajax({
    type : "GET",
    url : "https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=prenoms-a-rennes&facet=annaiss&facet=sexe&facet=prn",
    datatype : "text",
  })
  //verif de l'etat de la requete & reponse serveur
  .done(function(data) {
    $("results").html(JSON.stringify(data))
  })
  //si aucunes reponses serveur, le "fail" nous dira l'erreur pour comprendre où elle se situe
  .fail(function( jqXHR, textStatus,errorThrow ) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrow)
  }); 
})  

