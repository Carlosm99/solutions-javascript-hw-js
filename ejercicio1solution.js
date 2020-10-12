

ejecutartodo.onclick = function() {
    
    var tablas = document.getElementById('valorn').value;
    maketable(tablas);
    return false;
  };

function maketable(tabla) {
    // vincula al cuerpo de html
    var div1 = document.getElementById('div1');

    // crear las tablas
    var tbl = document.createElement("table");
 
    // creating filas
    for (var r = 0; r < tabla; r++) {
        var row = document.createElement("tr");
     
     // celdas adentro de las filas
         for (var c = 0; c < tabla; c++) {
              var cell = document.createElement("td");
   
            if (r === c){
            var cellText = document.createTextNode([r][c]="1");
            
            cell.appendChild(cellText);
            }         
            if (r != c){
            var cellText = document.createTextNode([r][c]="0");
            
            cell.appendChild(cellText);
            } 
           row.appendChild(cell);
           tbl.appendChild(row);      //suma lo que se vaya agregando
        }      
       
        
    }
    
    div1.appendChild(tbl) + " &nbsp; &nbsp; "; // tabla adentro del div
    maketable = function(){}; 
}
 