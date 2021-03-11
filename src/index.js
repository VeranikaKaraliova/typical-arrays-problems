
exports.min = function min (array=[]) {
  if(array.length > 0){
    let minNum = array[0];
    for(let i=0; i<array.length;i++){
      if(minNum > array[i]){
        minNum = array[i];
      };
    };
    return minNum;
  };
  return 0;
}

exports.max = function max (array=[]) {
  if(array.length > 0){
    let maxNum = array[0];
    for(let i=0; i<array.length;i++){
      if(maxNum < array[i]){
        maxNum = array[i];
      };
    };
    return maxNum;
  };
  return 0;
}

exports.avg = function avg (array=[]) {
  if(array.length >0){
    let sumArr = array.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    return sumArr / array.length;
  };
  return 0;
}
