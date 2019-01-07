exports.handler = function(event, context, callback) {
  console.log(context)
  let msg = handleCommand(event.body)
  callback(null, {
    statusCode: 200,
    body: `Hello, World /n
     ${msg}`
  })
}

function bodyUrlToObject(url) {
  const obj = url.split("&").reduce((accumulator, currentItem) => {
    const arr = currentItem.split("=")
    accumulator[arr[0]] = arr[1]
    return accumulator
  }, {})
  return obj
}

function slackCommandMsg(postReq) {
  const slackMsg = bodyUrlToObject(postReq["body"])
  return slackMsg['command']
}

function handleCommand(postReq) {
  //handle error 필요함. split 뒤에 잘못된 형식이 오는 경우
  const commandMsg = slackCommandMsg(postReq).split(' ')
  const command = commandMsg[0]
  const content = commandMsg[1]
  let msg = ''
  switch (command) {
    case 'startClass':
       msg = startClass(content)
      break
  }

  return msg
}

function startClass(date) {
  const msg = 'start class at : ' + date
  return msg
}

// const commandTest = 'startClass 190104'
// const testMsg = {
//   body:
//     `token=6ppvhwQjHuNjO7t7uVPArSqx&team_id=TEJ89DS4Q&team_domain=1t7-react&channel_id=GERUXGLNL&channel_name=privategroup&user_id=UEJR0QKT6&user_name=tiuln2010&command=${commandTest}&text=&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FTEJ89DS4Q%2F516687496594%2FBmBEFN6ajR9moteL3XrsGOid&trigger_id=516687496642`
// }
// handleCommand(testMsg)
