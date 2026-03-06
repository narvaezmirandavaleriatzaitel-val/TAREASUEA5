fetch('json.json')
.then(response => response.json())
.then(json=>{
    document.getElementById("json").innerHTML=json.
    console.log(json.frase);
})