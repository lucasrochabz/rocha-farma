import './FormRemedy.css';

export const FormRemedy = () => {
  return (
    <form className="form-remedy-teste">
      <label htmlFor="name">Nome do produto:</label>
      <input type="text" id="name" />

      <label htmlFor="dosage">Dosagem</label>
      <input type="text" id="dosage" />

      <label htmlFor="amount">Quantidade de comprimidos</label>
      <input type="number" id="amount" />

      <label htmlFor="brand">Marca</label>
      <input type="text" id="brand" />

      <label htmlFor="price">Preço</label>
      <input type="number" id="price" />

      <label htmlFor="info">Informações</label>
      <input type="text" id="info" />

      <label htmlFor="stock">Estoque</label>
      <input type="text" id="stock" />

      <button>Adicionar remédio</button>
    </form>
  );
};
