
import './App.css';
import TodoFeature from './feartures/Todo';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import SearchForm from './feartures/Todo/components/SearchForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="Limit">
        <Header />
      </div>
      <Slideshow />
      <SearchForm />
      <Footer/>
    </div>
  );
}

export default App;
