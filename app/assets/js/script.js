$(document).ready(function(){
  $('#btnAjax').on('click',function(e)
  {
  e.preventDefault();
  const value = "0"+$('#zip_code').val();
   $.ajax({
    url:"./docs/laposte_hexasmal.csv",
    dataType:"text",
    success:function(data)
    {
     var laposte_data = data.split(/\r?\n|\r/);
     var table_data = '<table class="table table-bordered table-striped"><thead><tr><th scope="col">Colonne</th>';
     var laposte_hexasmal_info = laposte_data[0].split(";");

     for (let index = 0; index < laposte_hexasmal_info.length; index++) {
       const element = laposte_hexasmal_info[index];
       table_data += "<th scope='col'>"+element.replace('_',' ')+"</th>";
     }
     table_data += "</tr></thead><tbody>";
     for(var cell_count = 0; cell_count<laposte_data.length; cell_count++)
     {
      var cell_data = laposte_data[cell_count].split(";");
      cell_zip_code = cell_data[2];
      if(cell_zip_code === value)
      {
        table_data += '<tr><th scope="row">'+cell_count+'</th>';
        for (let cell_data_count = 0; cell_data_count < cell_data.length; cell_data_count++) {
          var curr_cell_data = cell_data[cell_data_count];
          if(curr_cell_data == cell_data[0] || curr_cell_data == cell_zip_code)
          {
            table_data += '<td>'+curr_cell_data.slice(1)+'</td>';
          }
          else
          {
            table_data += '<td>'+curr_cell_data+'</td>';
          }
        }
        table_data += '</tr>';
      }
     }
     table_data += '</tbody></table>';
     $('#results').html(table_data);
    }
   });

  }) 
  
 });