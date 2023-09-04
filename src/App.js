import { useState,useEffect } from "react";
import Header from "./section/header";
import NotesList from "./section/NotesList";
import {nanoid} from 'nanoid'
import Search from "./section/Search";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'This is our first note',
    date: '18/08/23'
  },
  {
    id: nanoid(),
    text: 'Here is our second note',
    date: '19/08/23'
  },
  {
    id: nanoid(),
    text: 'This is the third note',
    date: '20/08/23'
  },
  {
    id: nanoid(),
    text: 'Fourth note goes here',
    date: '21/08/23'
  }])

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notes-app')
    );

    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('notes-app',
    JSON.stringify(notes))
  },[notes]);

  const AddNote = (text)=>{
    const date = new Date();
    const newNote = {
      text:text,
      date:date.toLocaleDateString(),
      id:nanoid()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=>note.id  !== id)
    setNotes(newNotes)
  }

  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode = {setDarkMode}/>
        <Search handleSearchNote ={setSearchText}/>
        <NotesList notes ={notes.filter((note)=>
           note.text.toLowerCase().includes(searchText)
           )} 
           handleAddNote ={AddNote} 
           handleDelete ={deleteNote}/>
      </div>
    </div>

   );
}
 
export default App;