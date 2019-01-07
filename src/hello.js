exports.handler = function(event, context, callback) {
  console.log(context)
  let msg = handleEvent(event.body)
  console.log(event.body)

  // let fs = require("fs")
  // fs.writeFile("test.txt", event.body, function(err) {
  //   if (err) {
  //     console.log(err)
  //   }
  // })

  callback(null, {
    statusCode: 200,
    body: `Hello, World /n
     ${msg}`
  })
}

function parseQuery(url) {
  const queryString = require('querystring')
  const obj = queryString.parse(url)
  return obj
}

function handleEvent(postReq) {
  //handle error 필요함. split 뒤에 잘못된 형식이 오는 경우
  const slackMsg = parseQuery(postReq['body'])
  const command = slackMsg['command']
  const text = slackMsg['text']

  let msg = ""
  switch (command) {
    case "/startclass":
      msg = startClass(text)
      break
  }
  console.log(msg)

  return msg
}

function startClass(date) {
  const msg = "start class at : " + date
  return msg
}

// const commandTest = '/startClass'
// const textTest = '102030'
// const testMsg = {
//   body:
//     `token=6ppvhwQjHuNjO7t7uVPArSqx&team_id=TEJ89DS4Q&team_domain=1t7-react&channel_id=GERUXGLNL&channel_name=privategroup&user_id=UEJR0QKT6&user_name=tiuln2010&command=${commandTest}&text=${textTest}&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FTEJ89DS4Q%2F516687496594%2FBmBEFN6ajR9moteL3XrsGOid&trigger_id=516687496642`
// }
// handleEvent(testMsg)
