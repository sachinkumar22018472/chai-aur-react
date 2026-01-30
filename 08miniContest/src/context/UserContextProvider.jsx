import React from "react";

import UserContext from "./UserContext";

//joo bhi prop jai rhe hai usko as it is rakho jaise layout ka concept tha
//joo bhi children aaye usko as it is render krwa sakte hai chahe card ho component ho


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>

        {children}


        </ UserContext.Provider>
    )
}

export default UserContextProvider