import Auth from "../pages/Auth";

export default function (props) {
    let output;
    if (props.isLoggedIn == true) {
        output = props.children
    } else {
        output = <Auth setIsLoggedIn = {props.setIsLoggedIn}/>
    }    
    return output;
}