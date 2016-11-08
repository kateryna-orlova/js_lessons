function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/*var arr=[];
for (var i=0;i<10;i++){
	arr.push(rand(0,100));
}
console.log(arr);

for (var i=(arr.length-1);i>=0;i--){
	console.log (arr[i]);
}*/

//ДЗ
var array=[];
for(var i=0;i<30;i++){
	if((i%2)>0){
		array.push(rand(-100,0));
	}
	else{
		array.push(rand(0,100));
	}
}

for (var i=4;i<array.length;i+=5){
		console.log ((i+1)+ ": "+array[i]);
	}











