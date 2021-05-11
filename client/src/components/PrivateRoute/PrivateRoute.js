import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ roles, ...rest }) => {
  const history = useHistory()
  const { user, isFetching } = useSelector(state => state.auth);

  if (isFetching) {
    return <Spinner />;
  }
console.log(user)
  if (user) {
    if (roles && !roles.includes(user.role)) {
      return <Redirect to='/' />;
    }
    return <Route {...rest} />;
  }

  return <Redirect to='/' />;
};

export default PrivateRoute;
