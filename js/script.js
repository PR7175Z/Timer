document.querySelector('form').addEventListener('submit', function(e){
	e.preventDefault();
	time = 0;
	var min = document.getElementsByName('minutes')[0].value;
	var sec = document.getElementsByName('seconds')[0].value;
	time = min*60 + sec;
	document.getElementById('output').innerHTML = time
	setInterval(function(){
		document.getElementById('output').innerHTML = time - 1
		time = time-1;
	}, 1000);
})
