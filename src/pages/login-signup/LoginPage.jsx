import { Navbar } from "../../components";
import { Login } from "../../components/authComp/Login";
import "./login-signup-page.css";

const LoginPage = () => {
    return(
        <div>
        <Navbar />
        <Login />
        </div>
    )
}

export { LoginPage }