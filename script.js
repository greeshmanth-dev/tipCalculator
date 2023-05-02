const billAmount=document.getElementById('billTotalInput');
const tipInput=document.getElementById('tipInput');
const numOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')


const calculateBill=()=>{
  const bill=Number(billAmount.value)
  const tipPercentage=Number(tipInput.value)/100
  const tipAmount=bill*tipPercentage
  const total=tipAmount+bill
  const perPersonBill=total/Number(numOfPeopleDiv.innerText)
  perPersonTotal.innerText=`₹${perPersonBill.toFixed(2)}`
  }
const increasePeople=()=>{
  numOfPeopleDiv.innerText=Number(numOfPeopleDiv.innerText)+1
  calculateBill()
}
const decreasePeople=()=>{
  if(numOfPeopleDiv.innerText<=1){
    return
  }
   numOfPeopleDiv.innerText=Number(numOfPeopleDiv.innerText)-1
  calculateBill()
}