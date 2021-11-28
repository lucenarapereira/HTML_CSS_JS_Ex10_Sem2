function CurrentHour(){

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds(); 
    
  var currentHour = `Hora atual: ${hour}:${minute}:${second}`;
  console.log(currentHour);  
  
  alert(currentHour);    
 
    }
   