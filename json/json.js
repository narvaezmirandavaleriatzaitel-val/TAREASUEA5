//buscar una respuesta

fetch('json.json')
.then(response => response.json())
.then(json=>{

    document.getElementById('adn').innerHTML=json.frase1;
    document.getElementById('id').innerHTML=json.frase2;
    document.getElementById('numero').innerHTML=json.cantidad1

    console.log(json)
})