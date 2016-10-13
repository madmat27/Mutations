function mutation(arr) {
  
  var atl = [];
  for (var i = 0; i < arr.length; i++) {
    atl.push(arr[i].toLowerCase());
  }
  
  if (atl.indexOf(atl[1]) === atl[0])
    {
      return true;
    }
  else return false;
 
}


mutation(["hello", "Hello"]);