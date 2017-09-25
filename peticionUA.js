var request = require('superagent')

request
   .get('http://www.ua.es')
   .end(function(error, respuesta){
       console.log(respuesta.text)
    })