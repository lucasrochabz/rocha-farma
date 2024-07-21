import { ProductList } from './components/ProductList/ProductList';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};
