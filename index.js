let display = () => {
	let days, hours, minutes, seconds;

	const today = new Date();
	const z2021 = new Date('2021/09/05 11:00');
	const diff = z2021 - today;

	if (diff < 0) {
		days = hours = minutes = seconds = 0;
		return ;
	}

	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	seconds = Math.floor((diff % (1000 * 60)) / 1000);

	document.getElementById('area').innerHTML ="<div class=\"days square\"> \
	<div class=\"numbers\">" + days + "</div>DAYS</div> \
  <div class=\"hours square\"> \
	<div class=\"numbers\">" + hours + "</div>HOURS</div> \
  <div class=\"minutes square\"> \
	<div class=\"numbers\">" + minutes + "</div>MINUTES</div> \
  <div class=\"seconds square\"> \
	<div class=\"numbers\">" + seconds + "</div>SECONDS</div> \
  </div>";
  
  return ;

};
display();
setInterval(display, 1000);