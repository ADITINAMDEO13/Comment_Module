import { getAllByLabelText } from '@testing-library/dom';
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const DisplayComment = ({ data, setData, selectuser, text, setText,reply,setReply, UniqId,setUniqId, sendReply,setSendReply}) => {
   
    const replyComment = (id) => {
        setUniqId(id);
    }

    const handledelete = (id) => {
        setData(data.filter(it=>it.id!==id))
    }
    console.log(sendReply);
    return (
        <div>
        <div className="commentDisplay">
            <Link to="/"><button>Add More Data</button></Link>
            {data.map((item,index) => {
                return (
                    <div  key={index} className="items">
                        <h3>{item.username} <span>{ item.date}</span></h3>
                       
                        <h3>{item.comment}</h3>
                        <div className="replydesign">
                            {sendReply.filter((i) => i.id === item.id).map((a,index) => {
                                return (
                                    // 
                                    <div key={index}>
                                        <h4>replies:</h4>
                                        <h4>{a.replycomment}</h4>
                                    </div>
                                );
                            })}
                        </div>
                        <Link to="/reply"><button type="button" onClick={()=>replyComment(item.id)}>Reply</button></Link>
                        <button type="button" onClick={()=>handledelete(item.id)}>Delete</button>
                        
                    </div>
                )
            })}
            
            </div>
         </div>
    );
}

export default DisplayComment;
