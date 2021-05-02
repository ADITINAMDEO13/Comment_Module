import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import DisplayComment from './DisplayComment'
import TextArea from './TextArea';
import Reply from './Reply';


function App() {
  const [text, setText] = useState("");
  const [id, setId] = useState(4);
  const [uniqId, setUniqId] = useState();
  const [reply, setReply] = useState();
  const [sendReply, setSendReply] = useState([
    
  ]);
  const [data, setData] = useState([
    {
      id:1,
      username: "Aditi",
      date: "13/11/99",
      comment: "Hye   nnnnn        nnnnnnnnn nnnnnnnnnnnnnnnn",
      // replies: []
    },
    {
       id:2,
      username: "Aditi",
      date: "13/11/99",
       comment: "Hye   nnnnn        nnnnnnnnn nnnnnnnnnnnnnnnn",
        // replies: []
    },
    {
      id:3,
      username: "Aditi",
      date: "13/11/99",
      comment: "Hye   nnnnn        nnnnnnnnn nnnnnnnnnnnnnnnn",
      // replies: [
      //   {
      //     comments:"good one",
      //   }
      //  ]
    },
  ]);
  const [selectuser, setSelectuser] = useState("");

  

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <TextArea id={id} setId={setId} text={text} setText={setText} data={data} setData={setData} selectuser={selectuser} setSelectuser={setSelectuser} uniqId={uniqId} setUniqId={setUniqId}/>
          </Route>
             
          <Route path="/display" exact>
            <DisplayComment text={text} setText={setText} data={data} setData={ setData } selectuser={selectuser} reply={reply} setReply={setReply} uniqId={uniqId} setUniqId={setUniqId}/>
          </Route>
          <Route path="/reply" exact>
            <Reply reply={reply} setReply={setReply} uniqId={uniqId} setUniqId={setUniqId} data={data} setData={setData} sendReply={sendReply} setSendReply={ setSendReply }/>
          </Route>
        </Switch>
      </BrowserRouter>
        
      
      
    </div>
    // <div>
    //   <BrowserRouter>
    //     <Route path='/' exact>
    //       <Register/>
    //     </Route>
    //     <Route path="/display" exact>
    //       <Display/>
    //     </Route>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
