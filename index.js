let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let accOne=document.getElementById("acc-one")
let accTwo=document.getElementById("acc-two")
let accThree=document.getElementById("acc-three")
let accFour=document.getElementById("acc-four")
let  one_fun=()=>{
    accOne.classList.toggle("active-acc")
    one.classList.toggle("active")
   
}
let two_fun=()=>{
    accTwo.classList.toggle("active-acc")
    two.classList.toggle("active")

}
let three_fun=()=>{
    accThree.classList.toggle("active-acc")
    three.classList.toggle("active")

}
let four_fun=()=>{
    accFour.classList.toggle("active-acc")
    four.classList.toggle("active")

}


