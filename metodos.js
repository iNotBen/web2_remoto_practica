//GET (obtener)

/*fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
*/

//POST(insercion)

/*fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({title:'Mi post prueba', body:'Contenido de prueba',userId:1000})
})
.then(response=>response.json())
.then(data=>console.log(data));
*/
//put

/*fetch('https://jsonplaceholder.typicode.com/posts/50',{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({id:50, title:'titulo actualizado', body:'Contenido actualizado',userId:5000})
})
.then(response=>response.json())
.then(data=>console.log(data));
*/
//delete
fetch('https://jsonplaceholder.typicode.com/posts/50',{
    method:'DELETE'
    
})
.then(response=>console.log('Respuesta del servidor',response.status));

