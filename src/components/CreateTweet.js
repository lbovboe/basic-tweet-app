import React,{useState} from 'react';

const CreateTweet = ({tweets,setTextInput,setTweets,textInput}) => {
    
    
    const userInputHandler = (e)=>{
        setTextInput(e.target.value);
    }

    const submitTweets = (e)=>{
        e.preventDefault();
        setTweets([...tweets,textInput]);
        setTextInput('')
    }
    return (
        <form>
            <textarea value={textInput} onChange={userInputHandler} cols="30" rows="10"></textarea>
            <button onClick ={submitTweets}>Submit</button>
        </form>
    )
}
export default CreateTweet;