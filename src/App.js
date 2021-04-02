import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './routers/PrivateRoute';
import { Dashboard } from './components/Dashboard'
import { Home } from './components/Home'
import { Signin } from './components/Signin'
import { Posts } from './components/Posts'
import { Post } from './components/Post'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ background: 'lightblue' }}>navbar</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
