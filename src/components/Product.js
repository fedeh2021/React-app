const productsList = [
    {
        "id": 1,
        "name": "Cafetera Moulinex Dolce Gusto Edited",
        "price": "10000",
        "description": "Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas o price.",
},
{
        "id": 2,
        "name": "Macbook Pro 2019",
        "price": "100000",
        "description": "Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\" Retina Apple Nueva Original. Importada de USA. Se entrega con la factura de compra para contar con la garantía del fabricante",
},
{
        "id": 3,
        "name": "Motorola G9",
        "price": "3552",
        "description": "Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrás colores brillantes y detalles precisos en todos tus contenidos.Disfrutá aún más del mejor entretenimiento gracias a su vasta pantalla y ángulos de visión amplios.",
},
{
        "id": 4,
        "name": "Nikon Reflex D3500 - Kit",
        "description": "Incluye la cámara D3500, el objetivo zoom AF-P DX NIKKOR 18-55mm y el superteleobjetivo zoom compacto AF-P DX NIKKOR 70-300mm. Ambos objetivos enfocan de forma rápida y silenciosa, lo que resulta ideal para grabar metraje de vídeo sin que se escuche apenas el ruido del accionamiento.",
        "price": 53000,
}
]

function Products(props){
    let id = Number(props.match.params.id);
    let product = productsList.find(oneProduct => oneProduct.id === id);
    return (
        <div>
        <h2>Soy Products</h2>
        {
            product  &&     //renderizado condicional, muestra lo que hay sino hay lo corta
            <>
        <p><b>ID:</b> {product.id}</p>
        <p><b>Nombre:</b> {product.name}</p>
        <p><b>Precio:</b> {product.price}</p>
        <p><b>Descripcion:</b> {product.description}</p>    
        </>
        }
        {
            !product && <p>no hay productos con ese id</p>
        }
        
        </div>
    )
}

export default Products;