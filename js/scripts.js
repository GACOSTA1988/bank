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
  $("input#addFunds").val(0);
  $("input#withdrawalAmmount").val(0);
  $("input#initialDeposit").val(0);
  $(".account").submit(function(event){
    event.preventDefault();
    var userName = $("#accountName").val();
    var userDeposit = parseInt($("#initialDeposit").val());
    userAccount = new Account(userName, userDeposit);
    $("#moneyManagement").show();
    $("#accountCreation").hide();
    $(".totalMoney").show();
    showBalance(userAccount);
  })
  $(".money").submit(function(event){
    event.preventDefault();
    userAccount = userAccount
    var deposit = parseInt($("#addFunds").val());
    var withdrawal = parseInt($("#withdrawalAmmount").val());
    userAccount.addMoney(deposit);
    userAccount.withdraw(withdrawal);
    $("input#addFunds").val(0);
    $("input#withdrawalAmmount").val(0);
    showBalance(userAccount);
    $(".totalMoney").show();
  })

});
