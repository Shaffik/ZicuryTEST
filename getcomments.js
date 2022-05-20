const base = 'https://gorest.co.in/public/v2/'; //declaramos la url base de las consultas
global.XMLHttpRequest = require('xhr2'); // se declara xhr en todo el  entorno
var xhr = new XMLHttpRequest(); //se declara xhr como una variable para realizar peticiones xhr

xhr.onload = function(){// Procesa la respuesta después de terminar la consulta
    if(xhr.status>=200 && xhr.status<300){ //Procesamos y validamos la respuesta del servidor 200 ok
        console.log(xhr.responseURL)
        console.log(xhr.status, 'Petición existosa'); //Lo que se hace con la respuesta del server
    }else{
        console.log(xhr.responseURL)
        console.log(xhr.status, 'Ha ocurrido un Error, Petición fallida');// lo que hace cuando la respuesta falla
    }
};

xhr.open('GET', `${base}comments`);//especifica la ruta de acceso y el método

xhr.send(null);// Se encarga de encviar la petición