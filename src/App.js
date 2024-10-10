import "./index.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import SidebarCart from "./components/SidebarCart/SidebarCart.js";
import Acount from "./components/Acount/Acount.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);// mostra quantos produtos tem dentro do carrinho através de selectedProduct.length
  const [cartTotal, setCartTotal] = useState(0);// Conta quantos produtos tem dentro do carrinho através de cartTotal + productToAdd

  useEffect(() => {
    fetch('/db.json').then(res => res.json())//fetch('/db.json') acessa o data base, o .then(res => res.json()) trás uma resposta com esses dados no 
      .then((data) => setProducts(data.products));// tempo necessário e no formato json.
  }, [])//  o .then((data) => setProducts(data.products))  acessa os dados da tabela products no db.json no tempo necessário e seta eles no useState.

  const addProductToCart = (id) => {// Função que adiciona um produto(quantidade e valor) ao carrinho
    const productToAdd = products.filter((product) => product.id === id)[0];// filter cria um novo array só com o id dos produtos da tabela products
    if (selectedProduct.includes(productToAdd)) return;// e compara esses id com o id recebido como parametro da função addProductToCart através do
    setSelectedProduct(selectedProduct.concat(productToAdd));// onClick={() => addProductToCart(id)} do componente Product.
    setCartTotal(cartTotal + productToAdd.price);//Se o produto selecionado pra ir pro carrinho ja tiver sido colocado nele retornamos tudo do começo
  };//para não adicionarmos o mesmo produto duas vezes.
   // SelectProduct foi concatenado com productToAdd(produto adicionado ao carrinho) SelectProduct agora tem mesmo valor de productToAdd

  // cartTotal irá mostrar a quantidade de produto dentro do carrinho através da  bolinha vermelha e também irá mostrar dentro do carrinho o preço
  // total de cada produto selecionado através de  productToAdd.price.

  const removeProductFromCart = (id) => {// Função que remove um produto do carrinho
    const newSelectedProduct = selectedProduct.filter(// Cria um array através dos ids dos produtos selecionados cujo ids sejam diferentes do id
      (product) => product.id !== id// que será removido, que sera o id passado como parâmetro para função  removeProductFromCart em SidebarProduct
    );
    setSelectedProduct(newSelectedProduct);
  };

  const addToCartTotal = (value) => setCartTotal(cartTotal + value);//Função que adiciona um valor total, somando a quantidade de produto + seu valor
  //esse valor será usado pelo SidebarProduct onde ele será uma props que será importada pelo SidebarCart e será mostrado aqui na página em SidebarCart


  return (
    <Router>
      <div className="App">

          {/* Resultado das funções que serão mostrados na página */}

        <Navbar selectedProduct={selectedProduct} />

        <SidebarCart
          addToCartTotal={addToCartTotal}// Mostra o valor total de todos os produtos no carrinho
          selectedProduct={selectedProduct}// Mostra dentro do carrinho todos os produtos que foram selecionados
          cartTotal={cartTotal}// Mostra o preço total de todos os produto selecionado que está dentro do carrinho 
          removeProductFromCart={removeProductFromCart}// Remove um produto do carrinho através da função removeProductFromCart
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage products={products}
              addProductToCart={addProductToCart}
              selectedProduct={selectedProduct}
              cartTotal={cartTotal}
              removeProductFromCart={removeProductFromCart}
              addToCartTotal={addToCartTotal}
            />} />

            <Route path="/products" element={<ProductsPage products={products}
              addProductToCart={addProductToCart}
            />} />

            <Route path="/acount" element={<Acount/>} />

            <Route path="/contact" element={<Contact/>} />

            <Route path="/about" element={<About/>} />

            </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
