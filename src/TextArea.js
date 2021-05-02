import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const TextArea = (props) => {
    const { text, setText, data, setData, selectuser,setSelectuser,setId,id} = props;
    console.log(text);
  

    const handleClick = () => {
        var today = new Date()
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var datee = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        // var count = id;
        const obj = {
            id: id,
            username: selectuser,
            date: time+" "+datee,
            comment: text,
           
        }
        setData([obj,...data]);
        console.log("clickeddd")
        setText("");
        var x = id + 1;
        setId(x);
    }
    
    const handleUser = (val) => {
        console.log(val)
        setSelectuser(val);
        console.log(selectuser);
        
    }
    
    return (
        <div className="textarea">
        <select name="users" id="users" onChange={(e)=>handleUser(e.target.value)} >
          <option value="select user">select user</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
      </select>
            <textarea id="comment" value={text} onChange={(e) => setText(e.target.value)}>{text}</textarea>
            <Link to="/display"><button id="add" onClick={handleClick} >Add</button></Link>
      
        </div>
    );
}

export default TextArea;
