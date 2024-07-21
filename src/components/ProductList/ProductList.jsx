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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur!',
    },
    {
      id: '2',
      name: 'Ibuprofeno',
      price: 6,
      quantity: 20,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur!',
    },
    {
      id: '18d4',
      name: 'Dipirona',
      price: 5,
      quantity: 8,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur!',
    },
  ];

  return (
    <>
      <span className="carrinho-span">{item}</span>
      <div className="product-list">
        {remedios.map((remedio, index) => (
          <ProductCard
            key={index}
            remedio={remedio}
            handleComprar={handleComprar}
          />
        ))}
      </div>
    </>
  );
};
