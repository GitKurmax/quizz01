quiz();

function quiz(){
	let apples = document.querySelectorAll('.apple');
	let check = document.getElementById('check');

	for (let i = 0; i < apples.length; i++) {
		apples[i].addEventListener('click', select);
	}

	check.addEventListener('click', function () {
		let elem = document.querySelector('.selected');
		this.classList.remove('unabled');
		
		if (elem.classList.contains('red')) {
			stop(apples,elem,'#00CD2F','./sound/applause.mp3',check);
		}else{
			stop(apples,elem,'#FF0000','./sound/tolpa.mp3',check);
		}

	});

	function select() {
		this.classList.add('selected');
		check.disabled = false;
		check.classList.add('unabled');
		
			for (let i = 0; i < apples.length; i++) {
				if(apples[i] == this){
					continue;
				}
				if(this.classList.contains('selected')&&apples[i].classList.contains('selected')){
					apples[i].classList.toggle('selected');
				}else{

				}
			}
		}

	function stop(array,elem,color,sound,button){
		for(let i = 0; i < array.length; i++){
			array[i].removeEventListener('click', select);
		}

		elem.style.border = '4px solid' + color;
		let audio = new Audio(sound);
		audio.play();
		button.disabled = true;
	}
}