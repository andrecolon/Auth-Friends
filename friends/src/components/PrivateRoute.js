import React from 'react';
import { Route, Redirect } from 'react-router-dom'

//This Route is a HOC - that is associated with our user and redirect us to the desired url
//it uses the same API as route<Route/> 
// It renders the Route and passes props through
//It checks if user is auth , if so...rebder compnent, else redirect to /login



const PrivateRoute = ({ component: Component, ...rest }) => {
    //pass in our props & destructure 
    // whereever we use Private Route it will take in that specific component and props nameley FriendsList --> see line 26
    // https://stackoverflow.com/questions/43484302/what-does-it-mean-rest-in-react-jsx
    // ...rest in { component: Component, ...rest } collects all other properties in the object rest.The question is about ...rest, not {...props }

    //component is the name of the prop {aka FriendsList}that will now
    return (
        <Route
            // pass down all the Route props
            {...rest}
            //Next call the local storage and see if there is a token
            render={props => {
                //Render is the ONLY way to convert components
                if (localStorage.getItem('token')) {
                    //token is a property of locaStorage - look for a token created by the API -...not sure
                    return <Component {...props} />
                    // Or return <FriendsList /> from App.js's component attr and send up the Routes props
                } else {
                    return (alert("Forbidden", setTimeout(5000)), <Redirect to="/login" />)
                }
            }}
        />

    )
};

export default PrivateRoute
