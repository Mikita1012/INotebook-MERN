import { useState } from "react";
import NotesContext from "./NotesContext";


const NotesState = (props) => {
    const s1 = {
        name: "Mikita",
        mobile: "7249253908"
    };

    const[state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
         setState({
            name: "Moksh",
            mobile: "7020526058"
        })   
        }, 5000)
        
    }

    return (
        <NotesContext.Provider value={{state, update}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;