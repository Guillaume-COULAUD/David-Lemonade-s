var btnpop = document.getElementById('btnpop');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');

btnpop.addEventListener('click', openModal);
pop.addEventListener('click', closepop);

function openModal(){
	overlay.style.display = 'block';
}

function closepop(){
	overlay.style.display = 'none';
}