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
  $("input#addFunds").val(0);
  $("input#withdrawalAmmount").val(0);
  $("input#initialDeposit").val(0);
  console.log(userAccount);
  $(".account").submit(function(event){
    event.preventDefault();
    var userName = $("#accountName").val();
    var userDeposit = parseInt($("#initialDeposit").val());
    userAccount = new Account(userName, userDeposit);
    console.log(userAccount);
  })
  $(".money").submit(function(event){
    event.preventDefault();
    userAccount = userAccount
    var deposit = parseInt($("#addFunds").val());
    var withdrawal = parseInt($("#withdrawalAmmount").val());
    console.log(deposit, withdrawal);
    userAccount.addMoney(deposit);
    userAccount.withdraw(withdrawal);
    console.log(userAccount)
    $("input#addFunds").val(0);
    $("input#withdrawalAmmount").val(0);
  })

});
