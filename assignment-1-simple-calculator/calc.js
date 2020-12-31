
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
	/*for(i=0; i<num.length ; i++){
		b = b + num[i];
 }
	ans = eval(b);*/
	ans = evaluate(num);
  displayText('screen');
	displayText('screen',ans);
	num = [];
	num.push(ans.toString());
	b = '';
}

function evaluate() { // function made to replace eval , still need to be made more efficient
	var tmp = [];
	var j=0;
	var tmp2 ;
	var x;
	for(i=0; i<num.length ; i++) {
		b = num[i] ;
		if(b >= 0 && b <=9) {
			continue;
		}
		else {
			if (b == '*' || b == '/') {
				tmp2 = 2;
			}
			else {
				tmp2 = 1;
			}
			while(var[j] >= tmp2) {
				if(b == '+')
			   x = num[i-1] + num[i+1];
			  if(b == '*')
	      	x = num[i-1] * num[i+1];
	    	if(b == '/')
	        x = num[i-1] / num[i+1];
	      if(b == '-')
          x = num[i-1] - num[i+1];
				num[i-1] = x;
				num = num.splice(i , 2);
		    i = i-1;
			  tmp[j] = tmp2;
		}
		j++;
		}
	}
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
