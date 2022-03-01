//Horoskop

let tombol = document.getElementById('tombol');


tombol.addEventListener('click', () => {

	
	let hHoroskop = document.querySelector('.hasil-horoskop');
	let text = document.createElement('h2');
	hHoroskop.appendChild(text);

	
	let bil = Math.round(Math.random() * 20);


	if(bil >=1 && bil <= 4) {
		let textBaru = document.createTextNode('Hebat!!')
		text.appendChild(textBaru);

	} else if(bil >=4 && bil <= 8) {

		let textBaru = document.createTextNode('Boleh Juga!')
		text.appendChild(textBaru);

	} else if(bil >=8 && bil <= 12) {

		let textBaru = document.createTextNode('Lumayan!')
		text.appendChild(textBaru);

	}else if(bil >=12 && bil <= 16) {

		let textBaru = document.createTextNode('Good Luck!')
		text.appendChild(textBaru);

	}else if(bil >=16 && bil <= 20) {

		let textBaru = document.createTextNode('Terlalu Hebat!')
		text.appendChild(textBaru);

	}else {

		let textBaru = document.createTextNode('Mengerikan!')
		text.appendChild(textBaru);
	}

	hHoroskop.style.display = 'block';

});


//---------Fizz Buzz---////////

let tombol2 = document.getElementById('tombol2');

	

tombol2.addEventListener('click', () => {
	let number = parseInt(document.getElementById('number').value);

	let hFizz = document.querySelector('.hasil-fizz');
	let h2 = document.createElement('h2')
	hFizz.appendChild(h2);

	if(number == 0 || isNaN(number)) {
		let h2Text = document.createTextNode('Invalid Input');
		h2.appendChild(h2Text);

	} else if(number % 3 == 0 && number % 5 == 0) {

		let h2Text = document.createTextNode('Fizz Buzz');
		h2.appendChild(h2Text);

	} else if(number % 3 == 0) {

		let h2Text = document.createTextNode('Fizz');
		h2.appendChild(h2Text);

	} else if(number % 5 == 0) {

		let h2Text = document.createTextNode('Buzz');
		h2.appendChild(h2Text);

	}

	else{

		let h2Text = document.createTextNode(number);
		h2.appendChild(h2Text);

	};

});








