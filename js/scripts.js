//business
function numCheck(number){
if(isNaN(number) || number<0){
  alert("Please enter a valid number")
}else{
  $("#output").show();
}
}

function overdraft(number){
  if(number<0){
    confirm("You will be overdrafted. Continue?")
  }
}

function account(fullName,cashAmount){
  this.fullName = fullName;
  this.cashAmount = cashAmount;

}

//user
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var initial = parseInt($("#initial").val());

    newAccount = new account(name,initial);

    $("#balance").text(newAccount.cashAmount);

    numCheck(initial);

  });
  $("#form2").submit(function(event){
    event.preventDefault();
    var withdrawal = parseInt($("#withdrawal").val());
    var deposit = parseInt($("#deposit").val());

    newAccount.cashAmount -= withdrawal;
    newAccount.cashAmount += deposit;
    $("#balance").text(newAccount.cashAmount);

    numCheck(withdrawal);
    numCheck(deposit);
    overdraft(newAccount.cashAmount)
    });
  });
