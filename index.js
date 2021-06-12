var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
// Dice 1
if(randomNumber1===1)
{
  document.querySelector("#dice1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2)
{
  document.querySelector("#dice1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3)
{
  document.querySelector("#dice1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4)
{
  document.querySelector("#dice1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1===5)
{
  document.querySelector("#dice1").setAttribute("src","images/dice5.png");
}
else
{
  document.querySelector("#dice1").setAttribute("src","images/dice6.png");
}
// Dice 2
if(randomNumber2===1)
{
  document.querySelector("#dice2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2)
{
  document.querySelector("#dice2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3)
{
  document.querySelector("#dice2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4)
{
  document.querySelector("#dice2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5)
{
  document.querySelector("#dice2").setAttribute("src","images/dice5.png");
}
else
{
  document.querySelector("#dice2").setAttribute("src","images/dice6.png");
}
// Winner Declaration
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player1 Wins !";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw !";
}
// Alternative
// ~Random Number images
// var randomNumberImage="images/dice"+randomNumber1+".png"
// This way we are concatinating the random number to generate a random number
