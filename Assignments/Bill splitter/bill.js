const billDisplay = document.querySelector('#bill');
const tipPercentageButtons  = document.querySelectorAll('.percent');
const populationDisplay = document.querySelector('#people');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalBillAmountDisplay = document.getElementById('total-bill');
const resetButton = document.getElementById('reset');
const customPercentageButton = document.getElementById('custom');


let bill;
let tipPercent;
let numberOfPeople = Number(populationDisplay.value);

billDisplay.addEventListener('keyup', (event) => {    
    bill = Number(event.target.value);
    // bill = parseFloat(event.target.value);
    // console.log(input.value);
    calculate()
})

console.log(tipPercent);

customPercentageButton.addEventListener('click', () =>{
    tipPercent = prompt('Enter your tip percentage');
    tipPercent = parseFloat(tipPercent);
    console.log({tipPercent});
    if(isNaN(tipPercent)){
        return alert('Please enter a valid tip percentage')
    }
    // convert to percentage
    tipPercent = tipPercent/100
    calculate()
})

populationDisplay.addEventListener('keyup', (e) => {
    if(e.target.value === ''){
        numberOfPeople = 1;
    }else{
        numberOfPeople = parseInt(e.target.value);
    }   
    
    calculate();
})

for(let tipPercentageButton of tipPercentageButtons){
    tipPercentageButton.addEventListener('click', () => {
        // console.log(tipPercentageButton.textContent)

        // Remove percentage sign from input
        tipPercent = tipPercentageButton.textContent.slice(0, -1);

        // convert tipPercent to number
        tipPercent = Number(tipPercent);

        // convert to percentage
        tipPercent = tipPercent/100
        // console.log(tipPercent)
        calculate()
    })
}

const calculate = () => {
    console.log({bill, tipPercent, numberOfPeople})
    if(isNaN(bill)){
        return alert('invalid bill');       
    }
    if(isNaN(tipPercent)){
        return       
    }
    if(isNaN(numberOfPeople)){
        return       
    }
    let tip = bill * tipPercent;
    let tipPerPerson = tip/numberOfPeople;
    let billPerPerson = bill/numberOfPeople;
    let totalBillPerPerson = billPerPerson + tipPerPerson;
    tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalBillAmountDisplay.textContent = `$${totalBillPerPerson.toFixed(2)}`
    console.log({tip, tipPerPerson})
    resetButton.classList.remove('disabled')
}

resetButton.addEventListener('click', () => {
    totalBillAmountDisplay.textContent = `$ 0.00`;
    tipAmountDisplay.textContent  = `$ 0.00`;
    tipPercent = undefined;
    populationDisplay.value = '1';
    billDisplay.value = '';
    resetButton.classList.add('disabled')
})