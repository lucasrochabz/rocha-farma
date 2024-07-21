import { useState } from 'react';
import './AdminPage.css';

export const AdminPage = () => {
  const [remedyData, setRemedyData] = useState({
    name: '',
    brand: '',
    dosage: '',
    amount: '',
    info: '',
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
      <h2>AdminPage</h2>
      <form onSubmit={handleInserir}>
        <label htmlFor="name">Nome do produto</label>
        <input
          type="text"
          id="name"
          name="name"
          value={remedyData.name}
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

        <label htmlFor="dosage">Dosagem</label>
        <input
          type="text"
          id="dosage"
          name="dosage"
          value={remedyData.dosage}
          onChange={handleChange}
        />

        <label htmlFor="amount">Quantidade de comprimidos</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={remedyData.amount}
          onChange={handleChange}
        />

        <label htmlFor="info">Informações</label>
        <input
          type="text"
          id="info"
          name="info"
          value={remedyData.info}
          onChange={handleChange}
        />

        <button type="submit">Inserir</button>
      </form>
    </>
  );
};
