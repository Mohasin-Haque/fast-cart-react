import { Link } from "react-router-dom";

const  Login = () => {
  return (
    <section className="badge_container-main flex-center">
    <div className="center flex-center">
        <h1>Login</h1>
        <form method="post">
            <div className="input-container font-size-one">
                <p className="label-text">Email address</p>
                <input className="input input-text" type="text" placeholder="banarasi@saree.com" />
            </div>
            <div className="input-container font-size-one">
                <p className="label-text">Password</p>
                <input className="input input-text" type="text" placeholder="********" />
            </div>
            <div className="radio-actions flex-center">
                <label htmlFor="radio-unchecked">
                    <input className="radio-unchecked" name="radio" type="checkbox" />
                    Remember me
                </label>
                <Link to="/signup" className="forgot-link">Forgot your password?</Link>
            </div>
            <button className="btn btn-secondary font-size-one login-btn padding-one">Login</button>
            <p className="signup-text font-size-one">Create new account <Link to="/signup"
                    className="signup-link padding-one"> &gt; </Link> </p>
        </form>
    </div>
</section>
  )
}

export { Login }