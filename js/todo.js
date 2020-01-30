let todoStorage = [];

if (localStorage.getItem('todoKey') != undefined) {
	todoStorage = JSON.parse(localStorage.getItem('todoKey'));
	loadToDo();
}

document.querySelector('.body-input__btn').onclick = function createToDo (event) {	
	event.preventDefault();
	let val = document.querySelector('.body-input__textarea').value;
	if (val == '') {
		return false;
	}	
	todoStorage.push(val.trim());
	localStorage.setItem('todoKey', JSON.stringify(todoStorage));	
	loadToDo ();		
}



function loadToDo () {	
	let out = '';
	todoStorage = JSON.parse(localStorage.getItem('todoKey'));		
	for (var i = 0; i < todoStorage.length; i++){
		out += '<p class="todoBody">' + todoStorage[i] + '<button class="btn-floating right todo-btn">' + '&#10008;' + '</button>' + '</p>';			
	}
	document.querySelector('.body-output').innerHTML = out;	

	let allBtn = document.querySelectorAll('.todo-btn');
	for (let i = 0; i < allBtn.length; i++) {
		allBtn[i].onclick = remBtn;
	}	
}

function remBtn (e) {	
	this.parentElement.remove();	
}

//---------------- remove All todos-----------------------//

document.querySelector('.header-btn').onclick = modalWin;

function modalWin () {	
	let modal = document.createElement('div');
	modal.classList.add('agryment');

	let modalWrap = document.createElement('div');
	modalWrap.classList.add('modalWrap');
	document.body.appendChild(modalWrap);
	modalWrap.appendChild(modal);	

	let closeBtn = document.createElement('button');
	let i = document.createElement('i');
	i.classList.add('material-icons');
	closeBtn.classList.add('btn-floating');
	closeBtn.classList.add('clBtn');
	modal.appendChild(closeBtn);	
	let notAgry = document.createTextNode('no');
	closeBtn.appendChild(notAgry);

	
	let agryBtn = document.createElement('button');
	let i1 = document.createElement('i');
	i1.classList.add('material-icons');
	agryBtn.classList.add('btn-floating');
	agryBtn.classList.add('ok');
	let agry = document.createTextNode('yes');
	modal.appendChild(agryBtn);	
	agryBtn.appendChild(agry);
	

	let agryText = document.createElement('p');
	let Text = document.createTextNode('Are you sure you want to delete all Todos?');
	agryText.classList.add('text');
	agryText.appendChild(Text);
	modal.appendChild(agryText);	
	
	document.querySelector('.ok').onclick = removeAllTodos;
	document.querySelector('.clBtn').onclick = closeModal;
	document.querySelector('.modalWrap').onclick = closeModal;

	document.body.addEventListener('keydown', (event) => {
		console.log(event);	
		if (event.keyCode == 27) {
			closeModal();
		}
	})
}


	
function removeAllTodos (){
	let p = document.querySelectorAll('.todoBody');
	document.querySelector('.body-output').innerHTML = '';	
	localStorage.clear('todoKey');
	location.reload();
}

function closeModal () {
	let modalWrap = document.querySelector('.modalWrap');
	modalWrap.remove();
}



//------------------- Date ------------------------------------//

setInterval(() => {
	Data = new Date();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
	if (Minutes < 10) Minutes = "0" + Minutes;
	if (Seconds < 10) Seconds = "0" + Seconds;
	document.querySelector('.header__clock').innerHTML = (Hour+":"+Minutes+":"+Seconds);
},1000)















