const misProductos = [
    {id: "1", nombre: "ArosCG", precio: 4000, img: "img/aroscg.jpeg", idCat:"3"},
    {id: "2", nombre: "ArosEstrella", precio: 4000, img: "img/arosestrella.jpeg", idCat:"3"},
    {id: "3", nombre: "BagNiñx", precio: 6000, img: "img/teabagniñx.jpeg", idCat:"2"},
    {id: "4", nombre: "BagQSALT", precio: 6000, img: "img/teabagqslt.jpeg", idCat:"2"},
    {id: "5", nombre: "IdealesPrimaveras", precio: 8000, img: "img/discoip.jpeg", idCat:"1"},
    {id: "6", nombre: "Homonimo", precio: 8000, img: "img/disco1.jfif", idCat:"1"}
]

export const getProductos = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(misProductos)
        }, 2000)
    })
}

export const getProductoPorId = (id) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCat = (idCat) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCat)
            resolve(productosCategoria);
        }, 200)
    })
}