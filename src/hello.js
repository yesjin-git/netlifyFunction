exports.handler = function(event,context,callback) {
  console.log(context)
  callback(null,{
    statusCode: 200,
    body: `Hello, World
     ${allKeys(event.headers)}`
  });
}

function allKeys(obj,array) {
  if(typeof array === 'undefined' || typeof array === null) {
    array = new Array();
  }
  for(var property in obj) {
    if(obj.hasOwnProperty(property)) {
      if(typeof obj[property] === "object") {
        array.push(`${property}: ${obj[property]}`);
        array.concat(allKeys(obj[property],array));
      } else {
        array.push(`${property}: ${obj[property]}`);
      }
    }
  }
  return array;
}
