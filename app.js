let weight =document.getElementById("weight")

weight.addEventListener("input",function(){
   let kg=weight.value 
   document.getElementById("pounds").innerHTML=`Pounds:<br>  ${kg * 2.205}`
})


let Measurement =document.getElementById("Measurement")

Measurement.addEventListener("input",function(){
   let feet=Measurement.value 
   document.getElementById("centi").innerHTML=`centimeter:<br>  ${feet * 30.48}`
})



let Temperature =document.getElementById("Temperature")

Temperature.addEventListener("input",function(){
   let cel=Temperature.value 
   document.getElementById("fran").innerHTML=`fahrenheit:<br>  ${(cel * 1.8 )+32 }`
})
