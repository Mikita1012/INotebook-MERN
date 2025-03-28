// import { useState } from "react";
import { useState } from "react";
import NotesContext from "./NotesContext";


const NotesState = (props) => {
    const initialNotes = [
        {
          "_id": "67e289a3781b930f502ecb37",
          "user": "67e1430de78f21084478573d",
          "title": "My first note",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2025-03-25T10:46:59.961Z",
          "__v": 0
        },
        {
          "_id": "67e28a2e781b930f502ecb3a",
          "user": "67e1430de78f21084478573d",
          "title": "My Second Note Updated",
          "description": "Hello from second note - updated",
          "tag": "personal",
          "date": "2025-03-25T10:49:18.941Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes);

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;