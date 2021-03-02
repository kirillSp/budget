let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

// let i = 0;
// while (i < 2) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце"),
//         q2 = +prompt("Во сколько обойдется?");
    
//     if (typeof(q1) === "string" && q1 && q2) {
//         appData.expenses[q1] = q2;    
//     } else {
//        if (i >= 0) i--;
//     }
//     i++;  
// }
  
// let i = 0;

// do {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце"),
//         q2 = +prompt("Во сколько обойдется?");
    
//     if (typeof(q1) === "string" && q1 && q2) {
//         appData.expenses[q1] = q2;    
//     } else {
//         if (i >= 0) i--;
//     }  
//     i++;
// } while (i < 2);

for (let i = 0; i < 2; i++) {
     let q1 = prompt("Введите обязательную статью расходов в этом месяце"),
         q2 = +prompt("Во сколько обойдется?");
    
    if (typeof(q1) === "string" && q1 && q2) {
        appData.expenses[q1] = q2;    
    } else {
       if (i >= 0) i--;
    }     
}

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
    console.log("low");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("medium");
} else if (appData.moneyPerDay >= 2000) {
    console.log("high");
} else {
    console.log("error");
}
alert("Ежедневный бюджет" + appData.moneyPerDay);
console.log(appData);
