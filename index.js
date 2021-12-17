

//date display
var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

//bootstrap button displyed
var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);
//creating a div in html
var division=document.createElement('div');
//calculating the date
function displaydata(){
    let input=document.getElementById("date").value;
   // changingthe data from string to number for date
   //if we didn't provide the correct date then we shd put else statement for incorrect, if not in number form
    if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
     //console.log(inputdate,currentdate);

   var millisecdiff=currentdate.getTime()-inputdate.getTime();
   console.log(millisecdiff);

      //prints seconds
    var seconddiff= Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    //prints mins 
    var minutediff= Math.floor(seconddiff/60);
    console.log(minutediff);
        //prints hour in console
    var hourdiff= Math.floor(minutediff/60);
    console.log(hourdiff);
   

    var daydiff= Math.floor(seconddiff/24);
    console.log(daydiff);
    

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);
    

      console.log(currentdate.getMonth());
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

    var division = document.createElement("div")
    division.innerHTML=`
                   Today's date:${currentdate}<br>Inputdate:${inputdate}<br>Millisecond${millisecdiff}<br>Seconds${seconddiff}<br>Minutes${minutediff}<br>Hours${hourdiff}<br>Day${daydiff}<br>Year${yeardiff}<br>Month${monthdiff}`;
   

   }
   else{
      console.log("give a valid date")
   }
  
   
   
   document.body.append(division)

}