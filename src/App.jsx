import { Route, Switch } from 'react-router-dom';
import './App.css';
import './reset.css';
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/LoginPage';
import UserOnlyPage from '../src/pages/UserOnlyPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App container'>
      <Header/>
      <Switch>
        <Route path={'/user-page'}>
          <UserOnlyPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
