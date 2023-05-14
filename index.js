// Install request by running "npm install --save request"
const request = require('request')

const options = {
  method: 'GET',
  url: 'https://apis-i.redsys.es:20443/psd2/xs2a/api-entrada-xs2a/services/REPLACE_ASP-NAME/v1.1/multibanco/catalogue/REPLACE_MULTIBANCO-PAYMENT-TYPE',
  qs: {
    paymentReference: 'REPLACE_THIS_VALUE',
    instructedAmount: 'REPLACE_THIS_VALUE',
    requestedExecutionDate: 'REPLACE_THIS_VALUE'
  },
  headers: {
    accept: 'application/json',
    'tpp-signature-certificate': 'REPLACE_THIS_VALUE',
    signature: 'REPLACE_THIS_VALUE',
    digest: 'REPLACE_THIS_VALUE',
    authorization: 'Bearer 6yBnsqnMQQ',
    'x-request-id': 'REPLACE_THIS_VALUE',
    'x-ibm-client-id': 'REPLACE_THIS_KEY'
  }
}

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message)
  console.log('Success: ', body)
})