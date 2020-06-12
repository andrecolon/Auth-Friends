import React from 'react'

const FriendCard = props => {

//   const { name, age, email} ;

    return (
        <div className="card">
            <h2>name: {props.name}</h2>
            <div className="age">
                Age: <em>{props.age}</em>
            </div>
            <div className="email">
                Email: <strong>{props.email}</strong>
            </div>

        </div>
    )
}

export default FriendCard
