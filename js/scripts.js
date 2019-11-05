function Account(name, balance){
  this.name = name,
  this.balance = balance
}

Account.prototype.addMoney = function(money){
  this.balance += money
}
Account.prototype.withdraw = function(money){
  this.balance -= money
}

var userAccount = new Account()

$(document).ready(function(){
  console.log(userAccount);
  $(".account").submit(function(event){
    event.preventDefault();
    var userName = $("#accountName").val();
    var userDeposit = parseInt($("#initialDeposit").val());
    userAccount = new Account(userName, userDeposit);
    console.log(userAccount);
  })
  $(".addFunds").submit(function(event){
    event.preventDefault();
    userAccount = userAccount
    var deposit = parseInt($("#addFunds").val());
    userAccount.addMoney(deposit);
    console.log(userAccount)
  });
$(".removeFunds").submit(function(event){
    var withdrawal = parseInt($("#withdrawalAmmount").val());
    console.log(deposit, withdrawal);
    console.log(test);
    userAccount.withdraw(withdrawal);
    console.log(userAccount)
  })


});
