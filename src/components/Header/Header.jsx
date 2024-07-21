import './Header.css';

export const Header = () => {
  const handleLogin = () => {
    console.log('Clicou em Login');
  };

  const HandleCarrinho = () => {
    console.log('Clicou em Carrinho');
  };

  return (
    <>
      <header className="header">
        <h2>Logo</h2>
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={HandleCarrinho}>Carrinho</button>
        </div>
      </header>
    </>
  );
};
