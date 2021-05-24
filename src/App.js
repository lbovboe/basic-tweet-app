import React,{useState} from 'react';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'

function App() {
  const [name,setName] = useState('');
  const [textInput,setTextInput] = useState('');
  const [tweets,setTweets] = useState([]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} 
      setTweets={setTweets} tweets={tweets}/>
      <TweetList tweets={tweets}/>
    </div>
  );
}

export default App;
