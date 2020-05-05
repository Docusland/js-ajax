
    console.log('Ready to load the file');
   $.ajax({
     type : "GET",
     url :  "https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=prenoms-a-rennes&facet=annaiss&facet=sexe&facet=prn",
     datatype : "json",
    
  })
  .done((data) => {
    console.log(data)
   // $("#test").html(data)
   document.getElementById('test').innerHTML("pouet")

       })
  // .fail(function( jqXHR, textStatus ) {
  // }); 

