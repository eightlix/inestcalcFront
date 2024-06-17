// Получаем элементы формы



// Привязываем функцию отправки к кнопке "Рассчитать"
document.querySelector('form').addEventListener('submit', function(event){
    const toCalculateDOM = document.getElementById('toCalculate');
let toCalculate = "";
if (toCalculateDOM.value  ==  "Конечную сумму")  {
    toCalculate = "TARGET";
}
if (toCalculateDOM.value  ==  "Ставку")  {
    toCalculate = "COEFFICIENT";
}
if (toCalculateDOM.value  ==  "Стартовый капитал")  {
    toCalculate = "START_UP_CAPITAL";
}
if (toCalculateDOM.value  ==  "Срок достижения цели")  {
    toCalculate = "INVEST_PERIOD";
}

const target = document.getElementById('target');
const startUpCapital = document.getElementById('startUpCapital');
const investAmount = document.getElementById('investAmount');
const investPeriodDOM = document.getElementById('investPeriod');
let investPeriod = "";
if (investPeriodDOM.value  ==  "лет")  {
    investPeriod = "YEARS";
}
if (investPeriodDOM.value  ==  "месяцев")  {
    investPeriod = "MONTHS";
}

const reinvestPeriodDOM = document.getElementById('reinvestPeriod');
const coefficient = document.getElementById('coefficient');

let reinvestPeriod = "";
if (reinvestPeriodDOM.value == "Не реинвестировать") {
    reinvestPeriod = "NEVER";
}
if (reinvestPeriodDOM.value == "Раз в квартал") {
    reinvestPeriod = "QUARTERLY";
}
if (reinvestPeriodDOM.value == "Раз в полгода") {
    reinvestPeriod = "TWICE_A_YEAR";
}
if (reinvestPeriodDOM.value == "Раз в месяц") {
    reinvestPeriod = "MONTHLY";
}
if (reinvestPeriodDOM.value == "Раз в год") {
    reinvestPeriod = "YEARLY";
}

    event.preventDefault();
    const data = {
        toCalculate: toCalculate,
        target: target.value,
        startUpCapital: startUpCapital.value,
        coefficient: coefficient.value,
        investPeriod: {
        amount: parseInt(investAmount.value),
        period: investPeriod
        },
        reinvestPeriod: reinvestPeriod
        };

 // Преобразуем данные в JSON
 const json = JSON.stringify(data);

//  alert(json);

 // Отправляем данные на сервер
 fetch('http://94.241.175.220:8082/api/v1/calc', {
  
 method: 'POST',
 headers: {
    'Content-Type': 'application/json',
},
 body: json
 })
 .then(res => res.json())
 .then(data => alert(data.result + "\n" + data.error)

 
)
 .catch(data => alert(data.error));
});
