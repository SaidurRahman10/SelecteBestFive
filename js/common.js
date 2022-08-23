function createPlayerList(playerName) {
  const li = document.createElement("li");
  li.innerText = playerName;
  if (orderList.children.length === 5) {
    alert("Warning!!! you can not buy more than 5 player");
    return;
  } else {
    orderList.appendChild(li);
    return li;
  }
}
function getPlayerListNumber() {
  const listNo = orderList.children;
  return listNo.length;
}

let playerExpensesTotal = [];

function calculator(elementId, playerList, playerExpensesId) {
  const elementIdName = document.getElementById(elementId);
  const elementIdValue = parseInt(elementIdName.value);
  if (isNaN(elementIdValue)) {
    alert("Error!!! Please Enter a Valid Number");
    return;
  }
  const playerExpenses = document.getElementById(playerExpensesId);
  playerExpenses.innerText = elementIdValue * playerList;
  playerExpensesTotal.push(playerExpenses.innerText);
}
