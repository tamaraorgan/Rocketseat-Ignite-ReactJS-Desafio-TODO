import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

export interface PropsTasks {
  content: string
}

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </div>
  )
}

export default App
