import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
