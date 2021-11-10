import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      height="100vh"
      userName="st_d05"
      userSecret="030205"
      projectID="1380bf86-dda4-4325-ba6c-f2505d5fcc15"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
        ).play()
      }
    />
  )
}



export default App
