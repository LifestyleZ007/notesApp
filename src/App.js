import { useState } from "react";
import NotesList from "./section/NotesList";
import {nanoid} from 'nanoid'
import Search from "./section/Search";

const App = () => {
  const [notes, SetNotes] = useState([{
    id: nanoid(),
    text: 'A note of kings',
    date: '18/08/23'
  },
  {
    id: nanoid(),
    text: 'A note of kings2',
    date: '19/08/23'
  },
  {
    id: nanoid(),
    text: 'A note of kings3',
    date: '20/08/23'
  },
  {
    id: nanoid(),
    text: 'A note of kings4',
    date: '21/08/23'
  }])

  const AddNote = (text)=>{
    const date = new Date();
    const newNote = {
      text:text,
      date:date.toLocaleDateString(),
      id:nanoid()
    }
    const newNotes = [...notes,newNote];
    SetNotes(newNotes)
  }

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=>note.id  !== id)
    SetNotes(newNotes)
  }

  return ( 
    <div className="container">
      <Search/>
      <NotesList notes ={notes} handleAddNote ={AddNote} handleDelete ={deleteNote}/>
    </div>
   );
}
 
export default App;