import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriends(res.data);
                console.log(friends);
            })
            .catch(err => {
                console.log("An error was found in your data", err);
            });
    }, []);

    return (
        <div>
            <div className="friend-container">
                {friends.length > 1
                    ? friends.map(friend => <Friend friend={friend} />)
                    : null}
            </div>
            <h4>not enough friends?</h4>
            <Link to="/protected-add">Add more friends</Link>
        </div>
    );
};

export default Friends;
