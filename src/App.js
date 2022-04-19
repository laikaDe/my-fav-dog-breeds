import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import layout
import Home from './components/layout/Home';
import About from './components/layout/About';
import Error from './components/layout/Error';
import Navbar from './components/layout/Navbar';
// import home
import Landing from './components/home/Landing';
import DogBreed from './components/home/DogBreed';
import DogForm from './components/home/DogForm';
// import store
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/create" component={DogForm}/>
        <Route path="/dogbreed/:id" component={DogBreed}/>
        <Route exact path="*" component={Error}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
