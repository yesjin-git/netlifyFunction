exports.handler = function(event, context, callback) {
  console.log(context)
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
    });  
  }