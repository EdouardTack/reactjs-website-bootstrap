import { getComponent } from "@src/Utils/Loader";
import Wrapper from "../src/Views/Layouts/Bootstrap/Wrapper";

/**
 * Components list
 * 
 * Cannot use alias config for loading components
 * 
 * All imports must start relative to the importing file.
 * @see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
 */
const HomePage = getComponent("../Components/HomePage.jsx");
const Login = getComponent("../Components/Auth/Login.jsx");

export const layouts = {
    "default": <Wrapper />
}

export const routes = {
    "home_page": {
        "component": <HomePage />,
        "path": "/"
    },
    "login": {
        "component": <Login />,
        "path": "/login"
    }
};