import { Header } from './components/Header';
import { AddTask } from './components/AddTask';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <main>    
        <AddTask />
      </main>
    </div>
  )
}

export default App
