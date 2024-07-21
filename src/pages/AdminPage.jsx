import { useState } from 'react';
import './AdminPage.css';

export const AdminPage = () => {
  const [remedyData, setRemedyData] = useState({
    name: '',
    dosage: '',
    amount: '',
    brand: '',
    price: '',
    info: '',
    stock: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRemedyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInserir = (event) => {
    event.preventDefault();
    console.log(remedyData);
  };

  return (
    <>
      <form className="form-remedy" onSubmit={handleInserir}>
        <label htmlFor="name">Nome do produto</label>
        <input
          type="text"
          id="name"
          name="name"
          value={remedyData.name}
          onChange={handleChange}
        />

        <label htmlFor="dosage">Dosagem</label>
        <input
          type="text"
          id="dosage"
          name="dosage"
          value={remedyData.dosage}
          onChange={handleChange}
        />

        <label htmlFor="amount">Quantidade de comprimidos por caixa</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={remedyData.amount}
          onChange={handleChange}
        />

        <label htmlFor="brand">Marca</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={remedyData.brand}
          onChange={handleChange}
        />

        <label htmlFor="brand">Preço</label>
        <input
          type="number"
          id="price"
          name="price"
          value={remedyData.price}
          onChange={handleChange}
        />

        <label htmlFor="info">Informações</label>
        <input
          type="text"
          id="info"
          name="info"
          value={remedyData.info}
          onChange={handleChange}
          placeholder="Nome, dosagem, quantidade e marca"
        />

        <label htmlFor="stock">Estoque</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={remedyData.stock}
          onChange={handleChange}
        />

        <button type="submit">Inserir</button>
      </form>
    </>
  );
};
