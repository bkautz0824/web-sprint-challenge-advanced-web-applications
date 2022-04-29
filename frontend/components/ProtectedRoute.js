import react from 'react'
import { Route, Redirect} from 'react-router-dom'

export const ProtectedROute = (props) => {
    const { children, ...rest } = propsreturn(
        <Route
            { ...rest}
            render = {() => {
                if(localStorage.getItem("token")) {
                    return children;
                } else{
                    <Redirect to "/" />;    
                }
            }}
        />
    );
};