function isIsogram(str){
    //code goes here
    // lowercase the string since case doesnt matter.
    var string = str.toLowerCase();
    console.log(string);
    for (var key in string) {
      var num = Number(key);
      var current = string[num];
      console.log(num);
      console.log(string.indexOf(current));
      if (num !== string.indexOf(current)) {
        return false;
      }
    }
    return true;
  }


  // test cases
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter casevar a = 'Dermatoglyphics';
// var b = 'aba';
// var c = 'abcdefghijklmnopqrstuvwxyz';
// console.log(isIsogram(c));
