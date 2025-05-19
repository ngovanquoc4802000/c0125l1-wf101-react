import './App.css'
import Bai1 from './baitap/bai_1';
import Bai2 from './baitap/bai_2';
import Bai3 from './baitap/bai_3';
import Bai4 from './baitap/bai_4';
import Example4 from "./react-js/fruit/example4";
function App() {
  const fruits: string[] = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
  return (
    <div className='App'>
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <h1>List of fruits</h1>
        <ul>
          {
            fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))
          }
        </ul>
      </header>
      {/*<Example1 />*/}
      {/*<Example2 />*/}
      {/*<Example3 />*/}
      <Example4 />

        <Bai1/>
        <Bai2/>
        <Bai3/>
        <Bai4/>
    </div>
  )
}

export default App



