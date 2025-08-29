import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
      <AboutPage/>
      <MostrarNombre/>
      <MyButtonClicker/>
      <MostrarProductos/>
    </div>
  )
}
function MyButton() {
    function handleClick() {
    alert('¡Me hiciste clic!');
  }

  return (
    <button onClick={handleClick}>
      Hazme clic
    </button>
  );
}
function MyButtonClicker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  );
}
const user = {
  name: 'Julian Maldonado',
};
function MostrarNombre(){
  return(
      <h1>
    {user.name}
  </h1>
  )
}
const products = [
  { title: 'Col', id: 1 },
  { title: 'Ajo', id: 2 },
  { title: 'Manzana', id: 3 },
];
function MostrarProductos(){
  const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);return (
  <ul>{listItems}</ul>
);
}
export default App
