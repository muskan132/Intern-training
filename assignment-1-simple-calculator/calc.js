
var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit) {
	if(digit >= 0 && digit <= 9) {
		num.push(digit);
		for(i=0; i<num.length ; i++) {
			a = a + num[i];
		}
		displayText('screen',a);
		a = '';
	}
}

function sendOP(digit) { //doubt regarding operator conditioning
	num.push(digit);
	for(i=0; i<num.length ; i++) {
		a = a + num[i];
	}
	displayText('screen',a);
	a = '';
 }

function equalTo() {
	for(i=0; i<num.length ; i++){
		b = b + num[i];
 }
	ans = eval(b);
  displayText('screen');
	displayText('screen',ans);
	num = [];
	num.push(ans.toString());
	b = '';
}

function clearScreen() {
	displayText('screen');
	num = [];
	a = '';
	b = '';
}

function displayText(a , b = '') {
	document.getElementById(a).innerHTML = b;
}
