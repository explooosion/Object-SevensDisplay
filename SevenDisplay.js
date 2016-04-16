var sevenDisplay = new Object(); // setting

var dp = new Object();
dp = [
	"1,1,1,1,1,1,0",
	"0,1,1,0,0,0,0",
	"1,1,0,1,1,0,1",
	"1,1,1,1,0,0,1",
	"0,1,1,0,0,1,1",
	"1,0,1,1,0,1,1",
	"1,0,1,1,1,1,1",
	"1,1,1,0,0,0,0",
	"1,1,1,1,1,1,1",
	"1,1,1,1,0,1,1"
];

(function($) {
	$.fn.extend({
		sevenDisplay: function(array) {
			sevenDisplay = array;
			if (sevenDisplay.speed == undefined)
			{
				sevenDisplay.speed = 1000;
			}
			AutoPlay();

		}
	});
})(jQuery);

var counter = 0;

function AutoPlay() {

	var num = dp[counter].split(",");
	num.forEach(function(value, index) {
		index++;
		if (value == 1) {
			$('.sevenDisplay div:nth-child(' + index + ')').show();
		} else {
			$('.sevenDisplay div:nth-child(' + index + ')').hide();
		}
	});

	if (counter == 9) {
		counter = 0;
	} else {
		counter++;
	}

	setTimeout(AutoPlay, sevenDisplay.speed);


}