let arr = [];
for(let i = 0; i < 5; i++){
  arr[i] = function(){
    return i;
  }
}

for(let i in arr){
  console.log(arr[i]());
}
