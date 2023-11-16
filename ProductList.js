import React from "react"; 
import UserCard from "./UserCard";

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(users => (
                <UserCard id={users.id} userdata={user}/>
            )
                )}
        </div>
    );
}

export default UserList; 