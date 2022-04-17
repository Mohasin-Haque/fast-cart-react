import { Link } from "react-router-dom";

const Signup = () => {
    return(
<section className="badge_container-main flex-center">
            <div className="center flex-center">
                <h1>Signup</h1>
                <form method="post">
                    <div className="input-container font-size-one">
                        <p className="label-text">Full Name</p>
                        <input className="input input-text" type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="input-container font-size-one">
                        <p className="label-text">Email address</p>
                        <input className="input input-text" type="text" placeholder="banarasi@saree.com" />
                    </div>
                    <div className="input-container font-size-one">
                        <p className="label-text">Password</p>
                        <input className="input input-text" type="password" placeholder="********" />
                    </div>
                    <div className="input-container font-size-one">
                        <p className="label-text">Confirm Password</p>
                        <input className="input input-text" type="text" placeholder="Re-Enter your password" />
                    </div>
                    <div className="radio-actions flex-center">
                        <label htmlFor="radio-unchecked">
                            <input className="radio-unchecked" name="radio" type="checkbox" />
                            I accept Terms & Conditions
                        </label>
                    </div>
                    <button className="btn btn-secondary font-size-one login-btn padding-one">Signup</button>
                    <p className="signup-text font-size-one">Already have an account <Link to="/login"
                            className="signup-link padding-one"> &gt; </Link > </p>
                </form>
            </div>
        </section>
    )
}

export { Signup }