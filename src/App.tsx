import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './pages/privateRoute';
// import { PersistGate } from 'redux-persist/integration/react'

interface Props { };
interface State { };

class App extends React.Component<State, Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <PrivateRoute path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </Provider>
    );
  }
}

export default App;
