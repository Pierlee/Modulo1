alert("1.hello world")

document.write("2.hello world")

document.getElementById("title").innerHTML = "3.hello world"

var div = document.getElementById("div-text")
div.innerHTML = "4. hello world"

console.log("5.hello world")

prompt("6.hello world")

document.querySelector(".hello").innerHTML = "7.hello world"

document.querySelector("#hello").innerHTML = "8.hello world"

var listItems = document.querySelectorAll(".list-item")
listItems.forEach(function(listItem){
  listItem.innerHTML = "9.hello world"
})

