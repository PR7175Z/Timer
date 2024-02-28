document.querySelector('form').addEventListener('submit', function(e){
	//prevent from page reload on form submission
	e.preventDefault();

	var min = document.getElementsByName('minutes')[0].value;
	var sec = document.getElementsByName('seconds')[0].value;
	var msg = document.createElement('p');
	msg.innerHTML = "Times up";

	if(!min){
		min = 0;
	} if(!sec){
		sec = 0;
	}

	outputWrap = document.getElementById('output');

	var timerWrap = document.createElement('div');

	timerWrap.innerHTML = '<span id="counterminute">'+ min + '</span> : <span id="countersecond">' + sec + '</span>';

	outputWrap.appendChild(timerWrap);
	var x = setInterval(function(){
		if(sec<=0){
			min = min-1;
			sec = 60;
		}
		sec = sec - 1;
		if(min == 0 && sec == 0){
			clearInterval(x);
			outputWrap.appendChild(msg);
		}
		timerWrap.innerHTML = '<span id="counterminute">'+ min + '</span> : <span id="countersecond">' + sec + '</span>';
		outputWrap.appendChild(timerWrap);
	}, 1000);

})
