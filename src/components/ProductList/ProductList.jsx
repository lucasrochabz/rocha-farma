import { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const [remedios, setRemedios] = useState([]);
  const [item, setItem] = useState(0);

  const handleComprar = () => {
    setItem((prevItem) => prevItem + 1);
    console.log(item + 1);
  };

  const loadRemedio = async () => {
    const response = await fetch('http://localhost:3000/remedio');
    const data = await response.json();
    setRemedios(data);
  };

  useEffect(() => {
    loadRemedio();
  }, []);

  return (
    <>
      <span className="carrinho-span">{item}</span>
      <section className="product-list">
        {remedios.map((remedio) => (
          <ProductCard
            key={remedio.id}
            remedio={remedio}
            handleComprar={handleComprar}
          />
        ))}
      </section>
    </>
  );
};
