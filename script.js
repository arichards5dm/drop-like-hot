function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}

function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
document.getElementById('reset-button').addEventListener('click', function() {
	location.reload();
});
document.getElementById('check-button').addEventListener('click', function () {
	check();
});
}

dragElement(document.getElementById('cherry'));
dragElement(document.getElementById('chocolate-syrup'));
dragElement(document.getElementById('caramel-syrup'));
dragElement(document.getElementById('sprinkles'));
dragElement(document.getElementById('peanuts'));
dragElement(document.getElementById('whip-cream'));



function check(e) {

	che1 = document.getElementById('cherry').x;
	che2 = document.getElementById('cherry').y;
	cho1 = document.getElementById('chocolate-syrup').x;
	cho2 = document.getElementById('chocolate-syrup').y;
	car1 = document.getElementById('caramel-syrup').x;
	car2 = document.getElementById('caramel-syrup').y;
	spr1 = document.getElementById('sprinkles').x;
	spr2 = document.getElementById('sprinkles').y;
	pea1 = document.getElementById('peanuts').x;
	pea2 = document.getElementById('peanuts').y;
	whi1 = document.getElementById('whip-cream').x;
	whi2 = document.getElementById('whip-cream').y;
	sun1 = document.getElementById('sundae').x;
	sun2 = document.getElementById('sundae').y;
	console.log(sun1, sun2, che1, che2);
	if (che1>sun1 && che1<(sun1+666) && che2>sun2 && che2<(sun2+666) && cho1>sun1 && cho1<(sun1+666) && cho2>sun2 && cho2<(sun2+666) &&
	car1>sun1 && car1<(sun1+666) && car2>sun2 && car2<(sun2+666) && spr1>sun1 && spr1<(sun1+666) && spr2>sun2 && spr2<(sun2+666) &&
	pea1>sun1 && pea1<(sun1+666) && pea2>sun2 && pea2<(sun2+666) && whi1>sun1 && whi1<(sun1+666) && whi2>sun2 && whi2<(sun2+666)) {
		alert("Nice Job!");
	} else {
		alert("WRONG");
	}

}

function coords(e) {
	posX = e.clientX;
	posY = e.clientY;
	console.log(posX, posY);
}
