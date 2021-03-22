import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './routers/PrivateRoute';
import { Dashboard } from './components/Dashboard'
import { Home } from './components/Home'
import { Signin } from './components/Signin'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ background: 'lightblue' }}>navbar</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
