
    console.log('Ready to load the file');
   $.ajax({
     type : "GET",
     url :  "/docs/laposte_hexasmal.csv",
     datatype : "json",
    
  })
  .done((data) => {
   
    var result_data = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var nb_colonne = 0; nb_colonne < result_data.length; nb_colonne++) {
      if (nb_colonne === 0) {
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var cellules = result_data[nb_colonne].split(';');
      for (var nb_cellule = 0; nb_cellule < cellules.length; nb_cellule++) {
        if (nb_colonne === 0) {
          table += '<th>';
          table += cellules[nb_cellule];
          table += '</th>';
        } else {
          table += '<td>';
          table += cellules[nb_cellule];
          table += '</td>';
        }
      }
      if (nb_colonne === 0) {
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    } 
    table += '</tbody>';
    table += '</table>';
    $('#result').append(table);
  })


  .fail(function( jqXHR, textStatus,errorThrow ) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrow)
      });   

