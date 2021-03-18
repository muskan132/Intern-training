
var a = '';
var b = '';
var num = [];
var ans;

/*var tmp = [];
var j=0;
var tmp2=0 ;
var x=0;*/
function sendNum(digit) {
	/*if(digit >= 0 && digit <= 9) {*/
		num.push(digit);
		for(i=0; i<num.length ; i++) {
			a = a + num[i];
		}
		displayText('screen',a);
		a = '';
	//}
}

function sendOP(digit) {
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
	//evaluate();
	//ans=num[0];
  displayText('screen');
	displayText('screen',ans);
	num = [];
	num.push(ans.toString());
	b = '';
}

/*function evaluate() { // function made to replace eval , still need to be made more efficient
  j=0;
	tmp=[];
	tmp2=0;
	x=0;
	for(i=0; i<num.length && num.length>1 ; i++) {
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
			while((tmp[j] >= tmp2 && j>0) || i==num.length-2) {
				if(b == '+')
			   x = num[i-1] + num[i+1];
			  else if(b == '*')
	      	x = num[i-1] * num[i+1];
	    else if(b == '/')
	        x = num[i-1] / num[i+1];
	     else if(b == '-')
          x = num[i-1] - num[i+1];
				num[i-1] = x;
				num.splice(i , 2);
		    i = i-1;
				j--;
				if(num.length == 1)
				break;
				b=num[i-1];
		}
		//j++;
		tmp[j]=tmp2;
		j++;
		}
	}
}*/

function clearScreen() {
	displayText('screen');
	num = [];
	a = '';
	b = '';
}

function displayText(a , b = '') {
	document.getElementById(a).innerHTML = b;
}
