window.onload = init;
function init(){
  
    var button = document.getElementById("test");
button.onclick = handleButtonClick;
}
function handleButtonClick() {
    var name = document.getElementById("text");
    var newName = name.value;
    if (newName == 'google') 
        alert ("Yandex круче. Но это не точно");
    else   alert(name.value +" "+ newObject.testObject[0].name);
}

 var newObject = {
    testObject: [
        { name: "first", age: 1},
        { name: "second", age: 2},
        { name: "third", age: 3}
    ]};
function superSum (x, y) {
    return alert(x+y);
}
function maxMin () {
    var myArray = [5, -1, 40, 355, 17, 3];
    min = myArray[0];
    max = min;
    for (i = 1; i < myArray.length; ++i) {
        if (myArray[i] > max) max = myArray[i];
        if (myArray[i] < min) min = myArray[i];
    }
    console.log(max);
    console.log(min);
}
function change () {
    let a = 123;
    let b = 567;
    let temp;
    temp = a;
    a=b;
    b=temp;
    console.log(a); // то что было изначально в b
    console.log(b); // то что было изначально в a
    
}
var myArray = [5, -1, 40, 355, 17, 3];
function findMax (array) {
    min = array[0];
    max = min;
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }
   return max;
}
function alertTimer() {
    setTimeout(() => {
        alert('alert с таймером 3 секунды');
    }, 3000);
}

