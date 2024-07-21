import './ProductCard.css';

export const ProductCard = ({ remedio, handleComprar }) => {
  return (
    <>
      <div className="product-card">
        <p>Imagem</p>
        <h4>{remedio.description}</h4>
        <h2>{remedio.name}</h2>
        <h3>{remedio.price}</h3>
        <button onClick={handleComprar}>Comprar</button>
      </div>
    </>
  );
};
