import './App.css';
import './styles/global.css'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import {ChannelListContainer,ChannelContainer,Auth} from './Components'

const apiKey = '6vj8qt55kx6r'
const client = StreamChat.getInstance(apiKey);
const authToken = false;
function App() {
  if(!authToken){
    return <Auth/>
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <div className='sidebar_channellist'>
          <ChannelListContainer/>
        </div>
        <div  className='basis-4'>
          <ChannelContainer/>
        </div>
        
        <p className='font-bold underline'> fwd</p>
      </Chat>
    </div>
  );
}

export default App;
