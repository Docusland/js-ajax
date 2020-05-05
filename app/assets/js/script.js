// $(document).ready(function () {
//   console.log('Ready to load the file');
//   // $.ajax({
//   // })
//   // .done(function( msg ) {
//   // })
//   // .fail(function( jqXHR, textStatus ) {
//   // });
// })
// $("#buttonAjax").click(function () {
//   url = "./docs/laposte_hexasmal.csv";
//   $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "text",
//     succes: function (data) {
//       $('#results').html(data);
//       alert('Succès');
//     }
//   });
//   $.ajax({
//     url: "./docs/laposte_hexasmal.csv",
//     dataType: "text",
//     success: function (data) {
//       var data_commune = data.split(/\r?\n|\r/);
//       var table_data = '<table class="table table-bordered table-striped">';
//       for (var index = 0; index < data_commune.length; index++) {
//         var cellule = data_commune[index].split(";");
//         table_data += '<tr>';
//         for (var cell_index = 0; cell_index < cellule.length; cell_index++) {
//           if (index === 0) {
//             table_data += '<th>' + cellule[cell_index] + '</th>';
//           } else {
//             table_data += '<td>' + cellule[cell_index] + '</td>';
//           }
//         }
//         table_data += '</tr>';
//       }
//       table_data += '</table>';
//       $('#code').html(table_data);
//     }
//   });
//   var name = editableField.data('code_postal');
//   var values = {};
//   values['regression_test_environment[' + name + ']'] = value;

//   $.ajax({
//     type: 'PUT',
//     url: editableField.data('./docs/laposte_hexasmal.csv'),
//     dataType: 'html',
//     data: values,
//     success: function (html) {
//       editableField.parents('.replaceable').replaceWith(html);
//     }
//   });
// });






$(document).ready(function () {
  $("input").on("keyup", function()  {
    code_postal =$("input").first().val();
    $.ajax({
      url: "./docs/laposte_hexasmal.csv",
      dataType: "text",
      success: function (data) {
        var data_commune = data.split(/\r?\n|\r/);
        var table_data = '<table class="table table-bordered table-striped">';
        for (var index = 0; index < data_commune.length; index++) {
          var cellule = data_commune[index].split(";");
          table_data += '<tr>';
          for (var cell_index = 0; cell_index < cellule.length; cell_index++) {
            if (index === 0) {
              table_data += '<th>' + cellule[cell_index] + '</th>';
            } else {
              if(cellule[2]==code_postal){
                // if (code_postal == indexof(cellule[2]))
              table_data += '<td>' + cellule[cell_index] + '</td>';
              }
            }
          }
          // alert(cellule[2]);

          table_data += '</tr>';
        }
        table_data += '</table>';
        $('#code').html(table_data);
      }
    });
  });
});