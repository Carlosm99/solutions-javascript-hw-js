

ejecutartodo.onclick = function() {
    
    var tablas = document.getElementById('valorn').value;
    maketableinferior(tablas);
    
    return false;
  };
  ejecutartodos.onclick = function() {
    
    var tablas = document.getElementById('valorn').value;
    maketablesuperior(tablas)
    
    return false;
  };

function maketableinferior(tabla) {
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
   
            if (r < c){
            var cellText = document.createTextNode([r][c]="0");
            document.getElementById("p1").innerText = "Esta matriz N X N es triangular inferior";
          
            
            cell.appendChild(cellText);
            cell.style.color = "blue";
            cell.style.backgroundColor = "yellow";
            cell.style.borderWidth = "13px"
           
            }         
            else{
                var min = 1;
                var max = 9;
            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
            
            cell.appendChild(cellText);
            
            } 
           row.appendChild(cell);
           tbl.appendChild(row);      //suma lo que se vaya agregando
        }      
       
        
    }
    
    div1.appendChild(tbl) + " &nbsp; &nbsp; "; // tabla adentro del div
    maketableinferior = function(){}; 
}

function maketablesuperior(tabla) {
    // vincula al cuerpo de html
  
    var div3 = document.getElementById('div2');
    
    // crear las tablas
    var tbl = document.createElement("table");
 
    // creating filas
    for (var r = 0; r < tabla; r++) {
        var row = document.createElement("tr");
     
     // celdas adentro de las filas
         for (var c = 0; c < tabla; c++) {
              var cell = document.createElement("td");
   
            if (r > c){
            var cellText = document.createTextNode([r][c]="0");
            document.getElementById("p2").innerText = "Esta matriz N X N es triangular superior";
            
            
            cell.appendChild(cellText);
            cell.style.color = "black";
            cell.style.backgroundColor = "Green";
            cell.style.borderWidth = "13px"
            }         
            else{
                var min = 1;
                var max = 9;
            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
            
            cell.appendChild(cellText);
            } 
           row.appendChild(cell);
           tbl.appendChild(row);      //suma lo que se vaya agregando
        }      
       
        
    }
    
    div3.appendChild(tbl) + " &nbsp; &nbsp; "; // tabla adentro del div
    maketablesuperior = function(){}; 
}
 