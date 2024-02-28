document.querySelector('form').addEventListener('submit', function(e){
	//prevent from page reload on form submission
	e.preventDefault();

	time = 0;
	var min = document.getElementsByName('minutes')[0].value;
	var sec = document.getElementsByName('seconds')[0].value;

	outputWrap = document.getElementById('output');

	var timerWrap = document.createElement('div');

	timerWrap.innerHTML = '<span id="counterminute">'+ min + '</span> : <span id="countersecond">' + sec + '</span>';

	outputWrap.appendChild(timerWrap);
	setInterval(function(){
		sec = sec - 1;
		if(sec<=0){
			min = min-1;
			sec = 60;
		}
		timerWrap.innerHTML = '<span id="counterminute">'+ min + '</span> : <span id="countersecond">' + sec + '</span>';
		outputWrap.appendChild(timerWrap);
	}, 1000);
})
