import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import pages 
import Home from './pages/Home';
import About from './pages/About';
import SingleDogBreed from './pages/SingleDogBreed';
import Error from './pages/Error';
//import components 
import DogBreed from './components/DogBreed';
import DogBreedList from './components/DogBreedList';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/dogbreed/:id">
          <SingleDogBreed/>
        </Route>
        <Route exact path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
