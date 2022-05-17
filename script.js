const boton = document.querySelector("#btn");
const container = document.querySelector(".container");

const verRecetas = ()=>{
    fetch("datos.json")
        .then(response =>response.json())
        .then(result=>{
            let recetas=result;
            recetas.forEach(user=>{
                container.innerHTML +=`
                <h2>${user.nombre}</h2>
                <h3>${user.ingredientes}</h3>
                <p>${user.receta}</p>
                `
            })
        })
        .catch(error=>console.log(error))
}

boton.onclick=()=>{
    verRecetas();
}
