let money, start;

function startOperation() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (!money) money = +prompt("Ваш бюджет на месяц?", "");
}
startOperation();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true 
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Введите обязательную статью расходов в этом месяце"),
            q2 = +prompt("Во сколько обойдется?");
        
        if (typeof(q1) === "string" && q1 && q2) {
            appData.expenses[q1] = q2;    
        } else {
            if (i >= 0) i--;
        }     
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("budget low");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("budget medium");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("budget high");
    } else {
        console.log("error");
    }
}
detectLevel();

function checkSaving() {
    if (appData.savings == true) {
        let save = prompt("Сумма депозита", ""),
            percent = prompt("Под какой процент", "");

        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        alert("Доход от депозита составил" + appData.monthIncome);    
    }
}
checkSaving();

function chooseOptExpenses() {
    let questionOptExpenses;
    let optionalExpenses = {};

    for(let i = 1; i <= 3; i++) {
        questionOptExpenses = prompt("Статья необязательных расходов?", "");
        optionalExpenses[i] = questionOptExpenses;
    }
    console.log(optionalExpenses);
}
chooseOptExpenses();
