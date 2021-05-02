import React from 'react';
import { Link } from 'react-router-dom';

const Reply = ({ reply, setReply,uniqId, setUniqId,data,setData,sendReply,setSendReply }) => {
    
    const handleReply = (id) =>
    {
        console.log(reply);
        const obj1 = {
            id: id,
            reply: reply,
        }
        setSendReply([...sendReply,obj1])
        
    }

    return (
        <div className="textarea">
            <div className="style"><Link to='/'><button>Add New Comment</button></Link>
            <Link to='/display'><button>All Comments</button></Link></div>
            <h1>Reply:</h1>
            <textarea id="reply"  onChange={(e) => setReply(e.target.value)}></textarea>
            <button type="button" onClick={()=>handleReply(uniqId)}>Reply</button>
        </div>
    );
}

export default Reply;
