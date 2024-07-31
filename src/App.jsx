import { ProductList } from './components/ProductList/ProductList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FormRemedy } from './components/FormRemedy/FormRemedy';
import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <ProductList />
      <FormRemedy />
      <Footer />
    </>
  );
};
