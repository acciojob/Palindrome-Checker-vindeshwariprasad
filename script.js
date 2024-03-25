// complete the given function

function palindrome(str){
	let a = ""
	for (let s of str){
		if (s!==" "){
			a+=s.toLowerCase();
		}
		
	}
	let n = a.length;
	let i = 0;
	let j = n-1;
	while (j>i){
		if (a[i]!==a[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;

}
module.exports = palindrome
