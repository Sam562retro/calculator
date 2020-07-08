      function display(val){
        document.getElementById('screen').value+=val;
      }

      function solve(){
        var x = document.getElementById('screen').value;
        var y = eval(x);
        document.getElementById('screen').value = y;
      }
      function clr(){
        document.getElementById('screen').value = " ";
      }
