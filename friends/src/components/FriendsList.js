import React from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import FriendCard from "./FriendCard";


//  Object format
//{
//   id: 1
//     name: 'Joe',
//         age: 24,
//             email: 'joe@lambdaschool.com',
// }


class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    //UseEffect is the same as component did mount - lifeCycle 

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                this.setState({
                    friends: res.data
                });
            })
            .catch(err =>
                console.error("What's my error", err.message, err.response)
            );
    };

    formatData = () => {
        const formattedData = [];
        console.log('Is this working', this.state);
        return formattedData;
    };

    render() {
        //const friends = this.formatData();
         //console.log(friends);
        return (
        <div >
            <h1>Hello friends</h1>
            {this.state.friends.map(friend => (
                <><p>Hello Card</p>
                    <FriendCard 
                        key={friend.id} 
                        name={friend.name} 
                        age={friend.age} 
                        email={friend.email} 
                    />
                </>
        ))
        
    }
            </div>

        );
    }
}

export default FriendsList;
