import React from "react";
import { withRouter, RouteComponentProps , Link} from "react-router-dom";
import './home.css';
import { connect } from 'react-redux'

interface Props extends RouteComponentProps { };
interface State {
    userName: string;
    passWord: string;
};

class Home extends React.Component<Props, State> {

    state: State = {
        userName: '',
        passWord: '',
    };

    constructor(props: Props) {
        super(props);
    }

    render() {
        
        return (
            <div className="container">
                <div className='formContainer'>
                    <h1>Home</h1>
                </div>
                {/* <Link to="/about">Login</Link> */}
            </div>
        );
    }
}

export default withRouter(Home);
