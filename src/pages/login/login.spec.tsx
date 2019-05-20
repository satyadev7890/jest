import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './login';

configure({ adapter: new Adapter() });

const props = {
    setSessionFlag: jest.fn(),
    isSessionValid: false,
}

describe('Login snapshot testing', () => {
    it('create snapshot with theme', () => {
      const login = shallow(<Login.WrappedComponent  {...props} />);
      expect(login).toMatchSnapshot();
    });
  });

describe('Login page testing', () => {
    let login: any = ''

    beforeEach(() => {
        login = shallow(<Login.WrappedComponent  {...props} />);
    });

    test('Login form validation with state change', () => {
        login.instance().setState({ userName: 'satya', passWord: 'password' });
        const submitBtn = login.find('#submit');
        submitBtn.simulate('click');
        expect(login.state().isInvalidFormDetails).toBeFalsy();
    })

    test('Login form validation with only username', () => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        const userName = login.find('#userName');
        userName.simulate('change', { target: { value: 'satya' } })
        const submitBtn = login.find('#submit');
        submitBtn.simulate('click');
        expect(login.state().isInvalidFormDetails).toBeTruthy();
        window.alert = jsdomAlert;
    })

    test('Login form validation with only password', () => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        const password = login.find('#passWord');
        password.simulate('change', { target: { value: 'password' } })
        const submitBtn = login.find('#submit');
        submitBtn.simulate('click');
        expect(login.state().isInvalidFormDetails).toBeTruthy();
        window.alert = jsdomAlert;
    })

    test('Login form validation with both username and password', () => {
        const userName = login.find('#userName');
        userName.simulate('change', { target: { value: 'satya' } })
        const password = login.find('#passWord');
        password.simulate('change', { target: { value: 'password' } })
        const submitBtn = login.find('#submit');
        submitBtn.simulate('click');
        expect(login.state().isInvalidFormDetails).toBeFalsy();
    })

});