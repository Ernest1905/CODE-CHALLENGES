let mark =prompt("Enter Student`s mark(should be numerical between 0 and 100)")
if(mark =0 && mark<= 100){
    if(mark >=80)
    return("A")
    if(mark >=60 && mark <=79)
    return("B")
    if(mark >= 49 && mark <=59)
    return("C")
    if(mark >= 40 && mark < 49)
    return("D")
    if (mark >0 && mark < 40)
    return("E")
}
else {
    return("Invalid Output : please input numerical between 0 and 100")
    
}