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
var showBalance = function(account){
  $("#balance").html(account.balance)
}

$(document).ready(function(){
  console.log(userAccount);
  $(".account").submit(function(event){
    event.preventDefault();
    var userName = $("#accountName").val();
    var userDeposit = parseInt($("#initialDeposit").val());
    userAccount = new Account(userName, userDeposit);
    console.log(userAccount);
    showBalance(userAccount)
  })
  $(".addFunds").submit(function(event){
    event.preventDefault();
    userAccount = userAccount
    var deposit = parseInt($("#addFunds").val());
    userAccount.addMoney(deposit);
    console.log(userAccount)
    $("input#addFunds").val("");
    showBalance(userAccount)
  });
$(".removeFunds").submit(function(event){
  event.preventDefault();
    userAccount = userAccount
    var withdraw = parseInt($("#withdrawalAmmount").val());
    userAccount.withdraw(withdraw)
    console.log(userAccount)
    $("input#withdrawalAmmount").val("");
    showBalance(userAccount)
  })


});
