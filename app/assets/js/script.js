let tableauDesVilles = [];
let villeEtCode=[];
let tableau=[];
let entête='<TABLE BORDER="1"><TR><TH> Code Postale </TH><TH> Code Insee </TH><TH> Nom de la Commune </TH></TR> ';
let html='';
let ligne=0;

const codePostale=2;
const ville=1;
const insee=0;

$( document ).ready(function() 
{
  console.log('Ready to load the file');
    
  $.ajax({
    type : "GET",
    url :  'docs/laposte_hexasmal.csv ',
    datatype : "text",
  })
  .done( function (data) 
  {
    tableauDesVilles = data.split("\n");
    for (let i = 0; i < tableauDesVilles.length; i++) 
    {
      villeEtCode=tableauDesVilles[i].split(";");
      tableau.push(villeEtCode);
    }
  })

  .fail(function( jqXHR, textStatus,errorThrow )
   {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrow);
  });   
})

$('#zip_code').keyup(rechercheZipCode);

function rechercheZipCode()
{
  if ($(this).val().length>=2)
  {
    html='';
    for ( ligne = 0; ligne < tableau.length; ligne++) 
    {
      if ( tableau[ligne][codePostale].startsWith($(this).val()))
      {
          
        ajoutHtml();
      }
    }
    affichageHtml();
  }
}

function ajoutHtml()
{
  html=html+"<TR><TD>"+tableau[ligne][codePostale]+"</TD><TD>"+tableau[ligne][insee]+"</TD><TD>"+tableau[ligne][ville]+"</TD></TR>";
}

function affichageHtml()
{
  $('#test').html(entête+html+"</TABLE> ");
}
