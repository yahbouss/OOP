function makeAccount(initial) {
    var account = { balance : initial}

    return {
        balance: account.balance,
         withdraw: function(amount) {
              if (account.balance - amount >= 0) {
                account.balance = account.balance - amount
                   return 'Here is your money: $' + amount
              }
         return 'Insufficient funds.'
         },              
          deposit: function(amount) {
            account.balance = account.balance + amount
              return 'Your balance is: $' + balance
         }
    }
}

var myAccount = makeAccount(500)

console.log(myAccount.balance)