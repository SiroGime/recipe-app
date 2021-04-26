import { BrowserRouter, Route, Switch } from 'react-router-dom';
import generateStore from './redux/store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Recipe from './pages/Recipe';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const store = generateStore();

  return (    
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={ Welcome } />          
          <Route path="/home" component={ Home } />          
          <Route path="/recipe" component={ Recipe } />          
          <Route path="/favorites" component={ Favorites } />       
          <Route component={ NotFound } />       
        </Switch>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
