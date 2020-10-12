var div = document.getElementById('piramide');

    ejecutartodo.onclick = function() {
      div.innerHTML = "";  
      var cantidaddecolumnas = document.getElementById('valorn').value;
      imprimirtriangulo(cantidaddecolumnas);
      return false;
    };

    function imprimirtriangulo(n) {
        // Iterate through every line and print entries in it  this way it works right           
        for (var line=0; line < n; line++) 
        { 
            var lineHTML = "<div class='text-center'>";
            // Every line has number of integers equal to line number 
            for (var i = 0; i <= line; i++) {
                lineHTML += "" + binomialCoefficent(line, i) + " &nbsp; &nbsp; ";     
            }
            lineHTML += "</div>\n";
            div.innerHTML += lineHTML;        
        }            

    }

    // function that makes all the work for the triangle wow for me this is preety amazing!!!!!
    function binomialCoefficent(n, k) 
    { 
            var res = 1; 
            if (k > n - k) 
            k = n - k; 
            for (var i = 0; i < k; ++i) 
            { 
                    res *= (n - i); 
                    res /= (i + 1); 
            } 
    return res; 
    }      