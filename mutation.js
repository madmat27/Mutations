function mutation(arr) {
  
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  
  if (str2.indexOf(str1) === 0)
    {
      return true;
    }
  else return false;
 
}

mutation(["hello", "Hello"]);