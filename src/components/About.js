import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/notes/NotesContext'

function About() {
  const a = useContext(NotesContext);
  useEffect(() =>{
    a.update();
    // eslint-disable-next-line
  }, [])
  return (
    <div>About {a.state.name} and contact number is {a.state.mobile}</div>
  )
}

export default About