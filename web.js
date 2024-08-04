function checkAge(){
  const schoolAge = 16;
  const age = parseInt(document.getElementById('ageInput').value);
  const resultDiv = document.getElementById('result')

  if (age === schoolAge) {
    resultDiv.textContent = "Welcome to the world"
    resultDiv.style.color = "green"
    resultDiv.style.fontFamily = "verdana"
  } else if(age < 6){
    resultDiv.textContent = "You should be In KG, Nursery or creche👼"
  } else if (age <= 12){
    resultDiv.textContent = "You should be in primary👶"
    resultDiv.style.color = "blue"
  } else if(age === 13){
    resultDiv.textContent = "You should be in JHS 1👦"
    resultDiv.style.color = "yellow"
  } else if(age === 14){
    resultDiv.textContent = "You should be in JHS 2"
    resultDiv.style.color = "brown"
  } else if(age === 15){
    resultDiv.textContent = "You should be in your final year of JHS"
    resultDiv.style.color = "violet"
  } else if(age === 17){
    resultDiv.textContent = "SHS 2 should be your class"
    resultDiv.style.color = "purple"
  } else if (age === 18){
    resultDiv.textContent = "Hurry Up and Complete👨"
    resultDiv.style.color = "crimson"
  } else if (isNaN(age)){
    resultDiv.textContent = "Your age was not inputted into my system"
    resultDiv.style.color = "red"
    resultDiv.style.fontFamily = "tahoma"
  } else {
    resultDiv.textContent = "Your age was not inputted into my system"
    resultDiv.style.color = "red"
    resultDiv.style.fontFamily = "tahoma"
  }
}
