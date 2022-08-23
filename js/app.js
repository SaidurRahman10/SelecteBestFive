// Order list 
const orderList = document.getElementById("order_list");
const selectedBtn = document.getElementsByClassName("selected_btn");
for (let btn of selectedBtn) {
  btn.addEventListener("click", function (event) {
    const content = event.target.parentNode.childNodes[1].textContent;
    createPlayerList(content);
    event.target.setAttribute("disabled", true);
    
    
  });
}


// Calculate Per Player cost
document
  .getElementById("player-calculator")
  .addEventListener("click", function () {
    const playerListNumber = getPlayerListNumber();
    calculator("perPlayer-filed", playerListNumber, "player_expenses");
  });


  // Calculate manager , couch and Total player Cost
document
  .getElementById("total_calculator_btn")
  .addEventListener("click", function () {
    const managerBudgetFiled = document.getElementById("manager_budget_filed");
    const managerBudgetFiledValue = parseInt(managerBudgetFiled.value);
    if (isNaN(managerBudgetFiledValue)) {
      alert("Error!!! Please Enter a Valid Number of Manager Amount");
      return;
    }
    const playerExpensesTotalAmount = parseInt(playerExpensesTotal[0]);

    const totalAmount = document.getElementById("total_amount");
    let playerAndManagerTotalAmount =
      playerExpensesTotalAmount + managerBudgetFiledValue;
    totalAmount.innerText = playerAndManagerTotalAmount;

    const coachBudgetFiled = document.getElementById("coach_budget_filed");
    const courseBudgetFiledValue = parseInt(coachBudgetFiled.value);
    if (isNaN(courseBudgetFiledValue)) {
      alert("Error!!! Please Enter a Valid Number of Couch Amount");
      return;
    }
    const playerAndCourseTotalAmount =
      parseInt(totalAmount.innerText) + courseBudgetFiledValue;
    totalAmount.innerText = playerAndCourseTotalAmount;
  });
