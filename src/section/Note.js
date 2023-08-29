import {MdDeleteForever} from "react-icons/md"

const notes = ({id,text,date, handleDelete}) => {
    return ( 
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em"
                onClick={()=>handleDelete(id)}/>
            </div>
        </div>
     );
}
 
export default notes;