import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils';

export const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route render={props => (
      isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
    )}
    />
  )
}
