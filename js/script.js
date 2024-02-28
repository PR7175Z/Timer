document.querySelector('form').addEventListener('submit', function(e){
	//prevent from page reload on form submission
	e.preventDefault();

	outputWrap = document.getElementById('output');

	var min = document.getElementsByName('minutes')[0].value;
	var sec = document.getElementsByName('seconds')[0].value;
	var msg = document.createElement('p');
	msg.innerHTML = "Times up";

	if(!min){
		min = 0;
	} if(!sec){
		sec = 0;
	}

	var timerWrap = document.createElement('div');

	var addval = add_zero_for_one_digit(min, sec);

	var newmin = addval[0];
	var newsec = addval[1];

	timerWrap.innerHTML = '<span id="counterminute">'+ newmin + '</span> : <span id="countersecond">' + newsec + '</span>';

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
		addval = add_zero_for_one_digit(min, sec);
		newmin = addval[0];
		newsec = addval[1];

		timerWrap.innerHTML = '<span id="counterminute">'+ newmin + '</span> : <span id="countersecond">' + newsec + '</span>';
		outputWrap.appendChild(timerWrap);
	}, 1000);

});

function add_zero_for_one_digit(min, sec){
	var newmin = (min.toString().length === 1)? '0'+min : min;
	var newsec = (sec.toString().length === 1)? '0'+sec : sec;

	return [newmin, newsec];
}
