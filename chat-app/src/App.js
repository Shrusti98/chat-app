import Navbar from "./components/Navbar";

import {auth} from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/Chat";



const style = {
  appContainer:'max-w-[680px] mx-auto text-center',
  sectionContainer:'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-2xl border relative'
}

function App() {
  const [user] = useAuthState(auth);
  console.log(user);



  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      <Navbar/>
      {user ? <Chat/> : null}

      </section>
        
    </div>
  );
}

export default App;
