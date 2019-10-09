import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        });
    };

    const postFriend = () => {
        let anything = { ...friend };
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", anything)
            .then(res => {
                console.log(res);
                setFriend({
                    name: "",
                    age: "",
                    email: ""
                });
            })
            .catch(err => {
                console.log("An error", err);
            });
    };

    return (
        <div>
            <form onSubmit={postFriend}>
                <label>Friend's Name:</label> <br />
                <input
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                />
                <br />
                <label>Friend's Age:</label>
                <br />
                <input
                    type="number"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <br />
                <label>Friend's email:</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default AddFriend;
