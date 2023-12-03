import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header id="header">
       <NavBar/>
      </header>
      <main>
       <Home/>
      </main>
    </div>
  );
}

export default App;
