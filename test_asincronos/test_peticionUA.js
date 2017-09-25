var request = require('superagent')
var assert = require('assert')

describe('mi suite asíncrona', function(){
    
    //Este test en realidad está mal hecho, debería esperar la respuesta del servidor
    it ('la petición a www.ua.es contiene el nombre de la UA', function(){
        request
          .get('http://www.ua.es')
          .end(function(error, respuesta) {
            //indexOf devuelve la posición de una subcadena dentro de otra.
            //Si la subcadena no está devuelve -1
            assert(respuesta.text.indexOf("Universidad de Alicante")!=-1)
        })
    })

    it ('la petición a www.ua.es no contiene OLA K ASE', function(done){
        request
          .get('http://www.ua.es')
          .end(function(error, respuesta) {
            assert(respuesta.text.indexOf("OLA K ASE")==-1)
            done()
        })
    })
})