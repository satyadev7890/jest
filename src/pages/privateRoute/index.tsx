import React, { Component, ComponentClass } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { store } from '../../redux/reducers';

interface Props {
  component: ComponentClass,
  path: string;
  isSessionValid: boolean;
}

interface State { }

class PrivateRoute extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    console.log('aaaa', this.props);
    return (
      <Route
        {...rest}
        exact
        render={props =>
          this.props.isSessionValid ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    );
  }
}

const mapStateToProps = ({ commonReducer }: store) => {
  return commonReducer;
}

export default connect(mapStateToProps, {})(PrivateRoute);