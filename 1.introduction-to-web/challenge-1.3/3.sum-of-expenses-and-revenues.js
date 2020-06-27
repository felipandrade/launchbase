const users = [
    {
      name: "Salvio",
      revenues: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      revenues: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      revenues: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ];

function calcBalance( revenues, expenses ) {
  const sumRevenues = sumNumbers(revenues);
  const sumExpenses = sumNumbers(expenses);

  return sumRevenues - sumExpenses;
}


function sumNumbers(numbers) {
    let sum = 0;
    for ( let number of numbers ) {
      sum = sum + number;
    }

    return sum;
}

for ( let user of users ) {
    const balance = calcBalance( user.revenues, user.expenses )
    const positiveBalance = balance >= 0;

    let positiveOrNegative;

    if( positiveBalance ) {
      positiveOrNegative = 'POSITIVE';
    } else {
      positiveOrNegative = 'NEGATIVE'; 
    }
    console.log(`${user.name} has balance ${positiveOrNegative} of ${balance.toFixed(2)}`);
}
