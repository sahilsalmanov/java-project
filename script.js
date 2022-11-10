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
  if (inputValue === '') {
    alert("You must write something!");
  } else {
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
      div.style.display = "none";
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
}

document.getElementById('myInput').addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        newElement();
    };
});







// Sorting of items
const myList = document.querySelector('#myUL')
const photo = document.querySelector(".sort2");
photo.addEventListener("click", () => {
    photo.style.display = "none";
    photo1.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
photo.addEventListener("mouseover", () => {
    photo.src = "./assets/img/sort-bold1.png";
});
photo.addEventListener("mouseout", () => {
    photo.src = "./assets/img/sort1.png";
});
const photo1 = document.querySelector(".sort3");
photo1.addEventListener("click", () => {
    photo1.style.display = "none";
    photo.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    arr.reverse();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
photo1.addEventListener("mouseover", () => {
    photo1.src = "./assets/img/sort-bold2.png";
});
photo1.addEventListener("mouseout", () => {
    photo1.src = "./assets/img/sort2.png";
});
