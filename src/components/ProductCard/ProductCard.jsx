import './ProductCard.css';

export const ProductCard = ({ remedio, handleComprar }) => {
  return (
    <>
      <div className="product-card">
        <p>Imagem</p>
        <h4>{remedio.info}</h4>
        <h2>{remedio.name}</h2>
        <h3>{remedio.price}</h3>
        <h5>Restam apenas: {remedio.stock} unidades</h5>
        <button onClick={handleComprar}>Comprar</button>
      </div>
    </>
  );
};
