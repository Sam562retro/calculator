function display(val){
        document.getElementById('textHolder').value+=val;
      }

      function cal(){
        var x = document.getElementById('textHolder').value;
        var y = eval(x);
        document.getElementById('textHolder').value = y;
      }
      function clr(){
        document.getElementById('textHolder').value = " ";
      }
