// document.getElementById('calculate').addEventListener('click',function(){
   
//     const perPlayerField = getInputFieldValueById('perPlayer-field');
    
//     const playerExpensesTotal = perPlayerField * 5;

//     const playerExpensesShow =  getElementValueById('player-expenses')

//     setTextElementValueById('player-expenses', playerExpensesTotal)
// })






document.getElementById('calculate-total').addEventListener('click',function(){
   
    const playerExpensesShow =  getElementValueById('player-expenses')

    const managerField = getInputFieldValueById('manager-field');
    const coachField = getInputFieldValueById('coach-field');

    const totalCost = playerExpensesShow + managerField + coachField;

    setTextElementValueById('final-total',totalCost)
})




document.getElementById('btn-select').addEventListener('click', function(){

   const playerShow = document.getElementById('player-show')
  
})