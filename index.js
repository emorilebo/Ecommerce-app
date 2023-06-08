window.onload = function(){
const btn_tap = document.querySelectorAll(".to-reach-container");
const displayBoard = document.querySelectorAll(".displayboard");
// for the first displayboard.. "contacts"
  const displayBoard1 = displayBoard[0];
const btn_tap1 = btn_tap[0];
// for the second displayBoard.... "information"
const displayBoard2 = displayBoard[1];
const btn_tap2 = btn_tap[1];
// for the third displayboard......"mayaccount"
const displayBoard3 = displayBoard[2];
const btn_tap3 = btn_tap[2];
// for the fourth displayBoard....."customer service"
const displayBoard4 = displayBoard[3];
const btn_tap4 = btn_tap[3];
// end for displayBoard......>
btn_tap1.addEventListener("click", ()=>{
  displayBoard1.classList.toggle('visible');
  const addSign = document.querySelector(".add");
  
})
btn_tap2.addEventListener("click", ()=>{
  displayBoard2.classList.toggle('visible');
})
btn_tap3.addEventListener("click", ()=>{
  displayBoard3.classList.toggle("visible");
})
btn_tap4.addEventListener("click", ()=>{
  displayBoard4.classList.toggle("visible");
})
}


