import '../style/Interface.css';
import { useState } from 'react';
const Interface=()=>{
    const [issue,setIssue] = useState({query:null,confession:null})
    let name,value
    const handleInput=(e)=>{
        // console.log(e)
        name=e.target.name
        value=e.target.value
        setIssue({...issue,[name]:value})
        
    }
    const postdata=async(e)=>{
        e.preventDefault()
        const {query,confession} = issue
        const res = await fetch("/confessionform",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                query,confession
            })
        })
        const data = await res.json()
        if(!data){
            window.alert("Error in sending the form, try again later.")
        }else{
            window.open("http://localhost:3000/submit","_self")
        }
    }
    // console.log(query)
    return(
        <form method="POST">
            <div className="cont">
            <label className="label1">Query for the Counsellor:</label>
            <textarea name="Query" className="Query" value={issue.query} onChange={handleInput} rows={5}></textarea>
            </div>
            <br></br>
            <div className="cont">
            <label className="label2">Anonymous Confession:</label>
            <textarea name="Confession" className="Confession" value={issue.confession} onChange={handleInput} rows={5}></textarea>
            </div>
            <br></br>
            <button className="finish" type="submit" onClick={postdata}>Submit</button>
        </form>
    );
}

export default Interface;