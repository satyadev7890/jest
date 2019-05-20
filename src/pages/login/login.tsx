import React from "react";
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { store } from '../../redux/reducers';
import { setSessionFlag } from '../../redux/actions';
import './login.css';

export interface Props extends RouteComponentProps {
    setSessionFlag: (val: boolean) => void;
    isSessionValid: boolean;
};
interface State {
    userName: string;
    passWord: string;
    isInvalidFormDetails: boolean;
};

class Login extends React.Component<Props, State> {

    state: State = {
        userName: '',
        passWord: '',
        isInvalidFormDetails: false,
    };

    constructor(props: Props) {
        super(props);
        this.validateFormData = this.validateFormData.bind(this);
    }

    componentDidMount() {
        this.props.setSessionFlag(false);
    }

    validateFormData(event: React.FormEvent<HTMLInputElement>): void {
        if (this.state.userName === '') {
            this.setState({ isInvalidFormDetails: true });
            alert('please enter username');
        } else if (this.state.passWord === '') {
            this.setState({ isInvalidFormDetails: true });
            alert('please enter password');
        } else {
            this.setState({ isInvalidFormDetails: false });
            this.props.setSessionFlag(true);
        }
    }

    render() {
        // console.log('isSessionValid', this.props.isSessionValid);
        let { from } = { from: { pathname: "/" } };
        if (this.props.isSessionValid) return <Redirect to={from} />;

        return (
            <div className="container">
                <div className='formContainer'>
                    <form className="form">
                        <input className="formInput"
                            id="userName"
                            type="text"
                            value={this.state.userName}
                            onChange={(event) => this.setState({ userName: event.target.value })}
                            placeholder="Uers Name" />
                        <input className="formInput"
                            id="passWord"
                            type="password"
                            placeholder="Password"
                            value={this.state.passWord}
                            onChange={(event) => this.setState({ passWord: event.target.value })} />
                        <input className="formButton"
                            id="submit"
                            type="button"
                            onClick={this.validateFormData}
                            value="login" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ commonReducer }: store) => {
    return commonReducer;
}

export default withRouter(connect(mapStateToProps, { setSessionFlag })(Login));

