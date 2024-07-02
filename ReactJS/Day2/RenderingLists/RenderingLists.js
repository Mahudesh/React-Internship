import './Assets/RenderingLists.css'
const products = [
    {title: 'Apple',type: 'Fruit', id: 1,quantity: '1Kg',price: 200},
    {title: 'Tomato',type: 'Vegetable' ,id: 2,quantity: '2Kg',price: 60},
    {title: 'Onion',type: 'Vegetable', id: 3,quantity: '3Kg',price: 100},
];
function RenderingLists()
{
    return(
        <div className='box'> 
           <ul className="inline-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-title">{product.title}</span>
            <span>{product.type}</span>
           <span className="gap"> {product.quantity}</span>
           <span className="gap"> {product.price}</span>
          </li>
        ))}
           </ul>
        </div>
    );
}
export default RenderingLists;
