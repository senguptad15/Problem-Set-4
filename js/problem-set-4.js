/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
  let p = document.getElementById("output1");
  p.innerHTML="Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {


  //////////// DO NOT MODIFY      Use the @name letiable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("What is your name?");
  let p = document.getElementById("output2");
  p.innerHTML="Hello, " + name + "!";
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  let p = document.getElementById("output3");
  p.innerHTML=cels+" degrees Celsius equals "+(cels*1.8+32).toFixed(2)+" degrees Fahrenheit.";
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  let p = document.getElementById("output4");
  p.innerHTML=fahr+" degrees Fahrenheit equals "+((fahr-32)*5/9).toFixed(2)+" degrees Celsius.";
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let p = document.getElementById("output5");
  p.innerHTML="Miles: "+Math.floor(inches/63360);
  p.innerHTML+="<br/>" + "Yards: "+ Math.floor((inches%63360)/36);
  p.innerHTML+="<br/>" + "Feet: " + Math.floor((inches%36)/12);
  p.innerHTML+="<br/>" + "Inches: " + inches%12;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let p = document.getElementById("output6");
  p.innerHTML="Kilometers: "+Math.floor(centimeters/100000);
  p.innerHTML+="<br/>" + "Meters: "+ Math.floor((centimeters%100000)/100);
  p.innerHTML+="<br/>" + "Centimeters: " + centimeters%100;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let p = document.getElementById("output7");
  p.innerHTML="Gallons: "+ Math.floor(fluidOunces/128);
  p.innerHTML+="<br/>" + "Quarts: "+ Math.floor((fluidOunces%128)/32);
  p.innerHTML+="<br/>" + "Pints: " + Math.floor((fluidOunces%32)/16);
  p.innerHTML+="<br/>" + "Cups: " + Math.floor((fluidOunces%16)/8);
  p.innerHTML+="<br/>" + "Fluid Ounces: " + fluidOunces%8;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let p = document.getElementById("output8");
  p.innerHTML="Tons: "+ Math.floor(ounces/32000);
  p.innerHTML+="<br/>" + "Pounds: "+ Math.floor((ounces%32000)/16);
  p.innerHTML+="<br/>" + "Ounces: " + ounces%16;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let p = document.getElementById("output9");
  p.innerHTML="Dollars: "+ Math.floor(pennies/100);
  p.innerHTML+="<br/>" + "Quarters: "+ Math.floor((pennies%100)/25);
  p.innerHTML+="<br/>" + "Dimes: " + Math.floor((pennies%25)/10);
  p.innerHTML+="<br/>" + "Nickels: " + Math.floor((pennies%10)/5);
  p.innerHTML+="<br/>" + "Pennies: " + pennies%5;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  let p = document.getElementById("output10");
  let total=Math.floor(amount/1);
  total+=Math.floor((amount%1)/0.25);
  total+=Math.floor(amount%0.25)/0.1);
  total+=Math.floor((amount%0.1/0.05);
  total+=amount%0.05
  if(total==1){
  p.innerHTML=total+" coin."
  }else{
  p.innerHTML=total+" coins."
  }
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
