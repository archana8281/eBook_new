import Home from "../pages/home";
import Login from "../pages/login";
import Recentview from "../pages/recentview";
import Signup from "../pages/signup";
import View from "../pages/user-view";

const ROUTER = [
    {
        url: "/",
        component: Home
    },
    {
        url:"/login",
        component:Login
    },
    {
        url:"/signup",
        component: Signup 
    },
    {
        url:"/view/*",
        component:View
    },
    {
        url:"/view/review",
        component:Recentview
    }

]
export { ROUTER};