function sh() {
	document.getElementById('task').style.display="table";
}
function dis() {
	document.getElementById('task').style.display="none";
}
let task = document.getElementById('val');
let i = 1;
let count = 0;

function add() {
	if (task.value.trim()) {
		count++;
		document.querySelector(".cont").innerHTML += `<div class="do" id="${i}"><p>${task.value} </p> <p class="point" id="${i}" onclick="del(this.id)"> delete</p></div>`;
		document.querySelector(".data").style.display="none";
		document.getElementById('task').style.display="none";

		task.value="";
		i++;
	}
	else{
		alert("enter a valid task");
	}
}
function del(id) {
	document.getElementById(id).style.display="none";
	count--;
	if(count==0){
		document.querySelector(".data").style.display="block";
	}
}
function mode() {
	if(document.body.style.backgroundColor=="white"){
	document.body.style.backgroundColor="black";
	document.querySelector(".dark").innerHTML="Light Mode";
	}
	else{
		document.body.style.backgroundColor="white";
		document.querySelector(".dark").innerHTML="Dark Mode";
	}
}