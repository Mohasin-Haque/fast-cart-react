import { Navbar } from "../../components"
import { Signup } from "../../components/authComp/Signup"
import "./login-signup-page.css";

const SignupPage = () => {
    return (
        <div>
            <Navbar />
            <Signup />
        </div>
    )
}

export { SignupPage }