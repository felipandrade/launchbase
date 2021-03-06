//create an user object 
const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }
  
  //add transaction
  function createTransaction(transaction) {
    user.transactions.push(transaction)
  
    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
  }
  
  //reports
  function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0
  
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
  
    return higherTransaction
  }
  
  function getAverageTransactionValue() {
    let sum = 0
  
    for(let transaction of user.transactions) {
        sum += transaction.value
    }
  
    return sum / user.transactions.length
  }
  
  function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }
  
    return count
  }
  
  createTransaction({ type: 'credit', value: 250 })
  createTransaction({ type: 'credit', value: 250 })
  createTransaction({ type: 'debit', value: 300 })
  createTransaction({ type: 'debit', value: 100 })
  
  console.log(user.balance)