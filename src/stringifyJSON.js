// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arrayResult = [];
  var objResult = {};

  if(typeof(obj) === "number" || typeof obj === 'boolean'){
    return '' + obj;
  }

  if(obj === null) {
    return 'null';
  }

  if(typeof(obj)==="string") {
    return '"'+obj+'"';
  }

  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return "[]";
    }
    for(var i =0; i <obj.length; i++) {
        arrayResult.push(stringifyJSON(obj[i]));
    }
    return '['+arrayResult+']';
  }

  if(typeof obj === "object" && !Array.isArray(obj)){
    
    var arrayResult = [];
    if(Object.keys(obj).length === 0){
      return '{}';
    }
    for(var key in obj){
      if(typeof obj[key] === 'function'){
         return '{}';
      }
      arrayResult.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return  '{' + arrayResult + '}';
  }

};
