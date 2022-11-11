// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove()
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === ''|| inputValue === ' ') {
    document.getElementsByClassName('addBtn').disabled = true;
    alert("You must write something!");
  }
  else if(inputValue.length>26) {
    document.getElementsByClassName('addBtn').disabled = true;
    alert("Limited");

  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove()
    }
  }
}
let close2 = document.querySelector('.close2')
close2.addEventListener('click',remove)
function remove(e) {
    document.getElementById('myInput').style.display = 'none'
    close2.style.display = 'none'
}
let plus = document.querySelector('.purple-plus')
plus.addEventListener('click',add) 
function add() {
    document.getElementById('myInput').style.display = 'block'
    close2.style.display = 'block'
    close2.style.paddingTop = '10px'
    document.querySelector('#myInput').value = ''
}

document.getElementById('myInput').addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        newElement();
    };
});







// Sorting of items
const myList = document.querySelector('#myUL')
const sort22 = document.querySelector(".sort2");
sort22.addEventListener("click", () => {
    sort22.style.display = "none";
    sort33.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    myList.innerHTML = "";
    arr.forEach(item => {
        let linew = `<li>${item}</li>`;
        myList.innerHTML += linew;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.remove()
          }
        }
    });
});
const sort33 = document.querySelector(".sort3");
sort33.addEventListener("click", () => {
    sort33.style.display = "none";
    sort22.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    arr.reverse();
    myList.innerHTML = "";
    arr.forEach(item => {
        let linew = `<li>${item}</li>`;
        myList.innerHTML += linew;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.remove()
          }
        }
    });
});


