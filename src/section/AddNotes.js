import { useState } from "react";

const AddNotes = ({handleAddNote}) => {
    const[noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleChange = (e)=>{
        if(characterLimit-e.target.value.length >= 0){
            setNoteText(e.target.value)
        }
    }

    const handleSave = ()=>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('');
        }
    }
        
    return ( 
        <div className="note new">
            <textarea 
            cols="10" 
            rows="8"
            placeholder="Type to Add a Note.."
            onChange={handleChange}
            value={noteText}
            >
    
            </textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length}</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
     );
}
 
export default AddNotes;