
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FriendCard from './FriendCard';

const Friend = ({ addToSavedList }) => {
    const [friend, setFriend] = useState(null);
    const params = useParams();

    const fetchFriend = (id) => {
        axios
            .get(`/${id}`)
            .then((res) => setFriend(res.data))
            .catch((err) => console.log(err.response));
    };

    const saveFriend = () => {
        addToSavedList(friend);
    };

    useEffect(() => {
        fetchFriend(params.id);
    }, [params.id]);

    if (!friend) {
        return <div>Loading movie information...</div>;
    }

    return (
        <>
            <FriendCard friends={friends}/>
        <div className="save-button" onClick={saveFriend}> Save</div>
        </>
    )
}

export default Friend