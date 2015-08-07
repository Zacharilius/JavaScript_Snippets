// Create Stack Datastructure
var Stack = function(){
  this.stack = [];
};
Stack.prototype.pop = function(){
  return this.stack.pop();
};
Stack.prototype.check = function(){
  if(this.stack.length === 0){
    console.log("zero length");
    return;
  }
  var temp = this.stack.pop();
  this.stack.push(temp);
  console.log(temp);
  return temp;
};
Stack.prototype.push = function(calcNum){
    this.stack.push(calcNum);
  };
Stack.prototype.print = function(){
  console.log(this.stack);
};
Stack.prototype.length = function(){
  return this.stack.length;
};
Stack.prototype.clear = function(){
  while(this.stack.length > 0){
    console.log("\tPopped: " + this.stack.pop());
  };
};
Stack.prototype.concat = function(){
  return this.stack.join('');
}
Stack.prototype.contains = function(value){
  return this.stack.indexOf(value);
}


// Stack to hold calculator values;
var stack = new Stack();
// Stack to hold temp number values;
var numStack = new Stack();

// This function processes the button inputs
function calcInput(value){
  console.log(value);

  console.log(isNaN(value));

  // If parameter value is a number then check stack
  if(!isNaN(value) || value === '.'){
    addNumbStack(value);
  }
  else{
    addNumber();
    numStack.clear();
    numStack.print();
    addNotNumber(value);
  }
  console.log(stack.print());

  // Gets the output message
  // If numStack active, then print numStack values
  // Else add top of stack;
  var screenMessage = '';
  console.log("numStack.length(): " + numStack.length());
  if(numStack.length() > 0){
    console.log("executing");
    screenMessage = numStack.concat();
  }
  else if(stack.length() > 0){
    screenMessage = stack.check();
  }
  else{
    screenMessage = 0;
  }
  $('#screen').html('<h2 style = text-align: "right">' + screenMessage + '</h2>');

};
function addNumbStack(value){
  if(value === '.' && numStack.contains('.') !== -1){
    console.log("Error");
    //Display error message to user.
    //
    // ADD
    // LATER
    // HERE
    // CODE

  }
  else{
    numStack.push(value);
  }
}
function addNotNumber(value){
  switch(value){
    case '=':
      if(stack.length() === 1){
        return stack.check();
      }
      if(stack.length() === 3){}
        var rightNum = stack.pop();
        var operand = stack.pop();
        var leftNum = stack.pop()
        var returnVal =  evaluateExpression(leftNum, operand, rightNum);
        stack.push(returnVal);
        return returnVal;

    case 'x^2':
      if(stack.length() === 1 || stack.length() === 3){
        var leftNum = stack.pop();
        var operand = value;
        var returnVal = evaluateExpression(leftNum, operand);
        stack.push(returnVal);
        return returnVal;
      }
      console.log('ERROR: x^2');
      break;
    case '-':
    case '+':
    case '*':
    case '/':
      if(stack.length()  === 1){
        stack.push(value);
      }
      else if(stack.length === 2){
        stack.pop();
        stack.push(value);
      }
      else if(stack.length() === 3){
        var rightNum = stack.pop();
        var operand = stack.pop();
        var leftNum = stack.pop()
        var returnVal = evaluateExpression(leftNum, operand, rightNum);
        stack.push(returnVal);
        return returnVal;
      }
      break;
    case 'C':
      stack.pop();
      break;
    case 'AC':
      var i = 0;
      while(i < stack.length()){
        stack.pop();
      }
      break;
    default:
      console.log("ERROR: unrecognized input");
    };
};
function addNumber(){
  var value = numStack.concat();
  var numValue = Number(value)
  if(stack.length() === 0){
    stack.push(numValue);
  }
  //Should be impossible
  else if(stack.length() === 1){
    console.log("Impossible occurred: stack.length()===1")
    //stack.push(tempNum * 10 + numValue);
  }
  else if(stack.length() === 2){
    stack.push(numValue);
  }
  else if(stack.length() === 3){
    console.log("Impossible 2 occurred: stack.length()===1")
    //var tempNum = stack.pop();
    //stack.push(tempNum * 10 + numValue);
  }
  else{
    console.log("ERROR: Should not have stack.length > 4");
  }
}
function evaluateExpression(leftNum, operand, rightNum){
  console.log("evaluating: " + leftNum +" " + operand +" " + rightNum);
  switch(operand){
    case '-':
      return leftNum - rightNum;
    case '+':
      return leftNum + rightNum;
    case '*':
      return leftNum * rightNum;
    case '/':
      if(rightNum === 0){
        stack.clear();
        return;
      }
      return leftNum / rightNum;
    case 'x^2':
      return leftNum * leftNum;
    default:
      console.log('Should not have gotten here');
  };
}
$(document).ready(function() {
  $('#button-1').click(function() {
    calcInput($(this).text())});
  $('#button-2').click(function() {
    calcInput($(this).text())});
  $('#button-3').click(function() {
    calcInput($(this).text())});
  $('#button-4').click(function() {
    calcInput($(this).text())});
  $('#button-5').click(function() {
    calcInput($(this).text())});
  $('#button-6').click(function() {
    calcInput($(this).text())});
  $('#button-7').click(function() {
    calcInput($(this).text())});
  $('#button-8').click(function() {
    calcInput($(this).text())});
  $('#button-9').click(function() {
    calcInput($(this).text())});
  $('#button-0').click(function() {
    calcInput($(this).text())});
  $('#button-mult').click(function() {
    calcInput($(this).text())});
  $('#button-div').click(function() {
    calcInput($(this).text())});
  $('#button-plus').click(function() {
    calcInput($(this).text())});
  $('#button-min').click(function() {
    calcInput($(this).text())});
  $('#button-AC').click(function() {
    calcInput($(this).text())});
  $('#button-C').click(function() {
    calcInput($(this).text())});
  $('#button-x2').click(function() {
    calcInput($(this).text())});
  $('#button-equal').click(function() {
    calcInput($(this).text())});
  $('#button-dot').click(function() {
    calcInput($(this).text())});
})
