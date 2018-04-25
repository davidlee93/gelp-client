import React from 'react';
import Header from './header';
import './signup.css';


export default class Signup extends React.Component {
    render() {
        return (
            <div className="signUpPage">
                <Header />
                <section className="signup-section">
                    <h3>Sign Up for Gelp</h3>
                    <form className='signup-form'>
                        <div className="name">
                            <label for="first-name"></label>
                            <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                            <label for="last-name"></label>
                            <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                        </div>
                        <div>
                            <label for="username"></label>
                            <input type="text" name='username' id='username' placeholder='email' />
                        </div>
                        <div>
                            <label for="password"></label>
                            <input type="password" name='password' id='password' placeholder='password' />
                        </div>
                        <div>
                            <label for="zipcode"></label>
                            <input type="text" name='zipcode' id='zipcode' placeholder='zipcode' />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                </section>
            </div>
        );
    }
}
