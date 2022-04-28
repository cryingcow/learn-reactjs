
import './App.css';
import TodoFeature from './feartures/Todo';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import SearchForm from './feartures/Todo/components/SearchForm';
import Footer from './components/Footer';
import ListHotel from './feartures/Todo/components/ListHotel';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="Limit">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<SearchForm />}>
        </Route>
        <Route path='/listHotel' element={
          <ListHotel />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
