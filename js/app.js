// expanses
const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener('click', function(){
  const income = document.getElementById('income-input');
  const itemName1 = document.getElementById('item-input-1');
  const itemName2 = document.getElementById('item-input-2');
  const itemName3 = document.getElementById('item-input-3');
 
  const total = parseInt(itemName1.value) + parseInt(itemName2.value) + parseInt(itemName3.value);
  
  const totalToDisplay = document.getElementById('sub-total');
  totalToDisplay.innerText = total;
  
  const balance = document.getElementById('balance');
  balance.innerText = parseInt(income.value) - total;

 

});

// Balance  percet


const saveBtn = document.getElementById('saving');

saveBtn.addEventListener('click', function(){
  const income = document.getElementById('income-input');  
  const percent = document.getElementById('percent-input');
  
  const savings = parseInt(income.value) / parseInt(percent.value);
  const savingDisplay = document.getElementById('saving-amount');
  savingDisplay.innerText = savings;
  // console.log(savings);
})

// Remaining Balance
