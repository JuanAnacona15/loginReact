import { useState } from "react"
import "./Income.css"
import iconAstronaut from "../../Images/astronauta.png"

const Income = ()=>{
    const [formSignIn, setFormSignIn] = useState(false)
    const [formLogin, setFormLogin] = useState(true)

    const toggleForms = () => {
        setFormSignIn(!formSignIn);
        setFormLogin(!formLogin);
    };

    return (
        <div className="contIncome">
            <div className="income">
                <div className="contFormsIncome">
                    {formSignIn && (
                    <SignIn></SignIn>
                    )}
                    {formLogin && (
                    <Login></Login>
                    )}
                </div>
                <Description toggleForms={toggleForms} formSignIn={formSignIn} />
            </div>           
        </div>
    );
}

const SignIn = ()=>{
    return(
        <form className="form col">
            <h2>Sign In</h2>
            <label className="mb-3">
                <p>New user name</p>
                <input className="userInput" type="username" name="username"></input>
            </label>
            <label className="mb-3">
                <p>Password</p>
                <input type="password" name="password"></input>
            </label>
            <button type="submit" className="btn btn-primary btn-dark">Create acount</button>
        </form>
    );
}

const Login = ()=>{
    return(
        <form className="form col">
            <h2>Log In</h2>
            <label className="mb-3">
                <p>User name</p>
                <input type="username" name="username"></input>
            </label>
            <label className="mb-3">
                <p>Password</p>
                <input type="password" name="password"></input>
            </label>
            <button type="submit" className="btn btn-primary btn-dark">Get into</button>
        </form>
    );
}

const Description = ({ toggleForms, formSignIn })=>{
    return(
        <div className="description">
            <img src={iconAstronaut} alt="astronauta"></img>
            <p>
                Welcome to RedM, the social network where you can connect with your friends 
                from anywhere in the world and in just a few clicks.
            </p>
            <button className="btn btn-light" onClick={toggleForms}>
                {formSignIn ? "Login" : "Sign In"}
            </button>
        </div>
    );
}

export default Income