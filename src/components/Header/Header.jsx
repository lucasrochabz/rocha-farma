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
      <header className="header-bg">
        <div className="header">
          <h2>Logo</h2>
          <div className="header-btns">
            <button onClick={handleLogin}>Login</button>
            <button onClick={HandleCarrinho}>Carrinho</button>
          </div>
        </div>
      </header>
    </>
  );
};
