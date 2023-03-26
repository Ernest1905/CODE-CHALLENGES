function speedDetector(speed){
    let speedlimit = 70
   let kmperdemeritpoint = 5
if (speed <= 70){
    console.log ("OK") 
}
else{ 
    let demeritpoint = Math.floor((speed - speedlimit) / kmperdemeritpoint)
if (demeritpoint < 12){
    console. log (`Points: ${demeritpoint}`)   
}
   else{
    if(demeritpoint >= 12 )
    console.log ("License Suspended")

   }   
}
}
   
