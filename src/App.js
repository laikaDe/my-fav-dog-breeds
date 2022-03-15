import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import pages 
import Home from './components/layout/Home';
import About from './components/layout/About';
import SingleDogBreed from './components/layout/SingleDogBreed';
import Error from './components/layout/Error';
//import components 
import DogBreed from './components/DogBreed';
import DogBreedList from './components/DogBreedList';
import Loading from './components/layout/Loading';
import Navbar from './components/layout/Navbar';
// import SearchForm from './components/home/SearchForm';
import Landing from './components/home/Landing';
// import Store
import store from './store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Landing/>
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
    </Provider>
  );
}

export default App;
