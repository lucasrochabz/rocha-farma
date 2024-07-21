import { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const [item, setItem] = useState(0);

  const handleComprar = () => {
    setItem((prevItem) => prevItem + 1);
    console.log(item + 1);
  };

  const remedios = [
    {
      id: '1',
      name: 'Paracetamol',
      price: 4.5,
      quantity: 10,
      info: 'Paracetamol 750mg 20 Comprimidos',
    },
    {
      id: '2',
      name: 'Ibuprofeno',
      price: 6,
      quantity: 20,
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur!',
    },
    {
      id: '18d4',
      name: 'Dipirona',
      price: 5,
      quantity: 8,
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur!',
    },
  ];

  return (
    <>
      <span className="carrinho-span">{item}</span>
      <section className="product-list">
        {remedios.map((remedio, index) => (
          <ProductCard
            key={index}
            remedio={remedio}
            handleComprar={handleComprar}
          />
        ))}
      </section>
    </>
  );
};
