document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerField = getInputFieldValueById("perPlayer-field");

  if (isNaN(perPlayerField)) {
    alert("Error!!! Please Enter a Valid Number");
  } else {
    const playerExpensesTotal = perPlayerField * 5;

    const playerExpensesShow = getElementValueById("player-expenses");

    setTextElementValueById("player-expenses", playerExpensesTotal);
  }
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    
    const managerField = getInputFieldValueById("manager-field");
    const coachField = getInputFieldValueById("coach-field");
    if(isNaN(managerField)){
      alert("Error!!! Please Enter a Valid Number");
    }else if(isNaN(coachField)){
      alert("Error!!! Please Enter a Valid Number");

    }else{
      
      const playerExpensesShow = getElementValueById("player-expenses");
      const totalCost = playerExpensesShow + managerField + coachField;
  
      setTextElementValueById("final-total", totalCost);
    }
  });

//selected Buttons

//taskin
document.getElementById("btn-taskin").addEventListener("click", function () {
  const playerShow = document.getElementById("player-show");
  const li = document.createElement("li");
  li.innerText = "    Taskin Ahammed";

  playerShow.appendChild(li);
});
//shakib
document.getElementById("btn-shakib").addEventListener("click", function () {
  const playerShow = document.getElementById("player-show");
  const li = document.createElement("li");
  li.innerText = "    Shakib Al Hasan";
  playerShow.appendChild(li);
});
//mashrafe
document.getElementById("btn-mashrafe").addEventListener("click", function () {
  const playerShow = document.getElementById("player-show");
  const li = document.createElement("li");
  li.innerText = "    Mashrafe bin Mortaza";
  playerShow.appendChild(li);
});
// Mushfiqur
document.getElementById("btn-mushfiqur").addEventListener("click", function () {
  const playerShow = document.getElementById("player-show");
  const li = document.createElement("li");
  li.innerText = " Mushfiqur Rahim";
  playerShow.appendChild(li);
});
// Mustafizur
document.getElementById("btn-mustafiz").addEventListener("click", function () {
  const playerShow = document.getElementById("player-show");
  const li = document.createElement("li");
  li.innerText = "Mustafizur Rahman";
  playerShow.appendChild(li);
});
//Mahmudullah
document
  .getElementById("btn-mahmudullah")
  .addEventListener("click", function () {
    const playerShow = document.getElementById("player-show");
    const li = document.createElement("li");
    li.innerText = " Mahmudullah Riyad";
    playerShow.appendChild(li);

    if (li.length == 5) {
      alert("U cant add more than 5");
    }
  });
