import { useState } from 'react'
import Menu from './components/Menu'
import Sports from './components/Sports'

import './App.css'

import { sports } from './data'

const schedulers = ['all', ...new Set(sports.map(sport => sport.schedule))]

function App() {

  const [lists, setLists] = useState(sports)

  const handleSports = schedule => {
    if (schedule === 'all') {
      setLists(sports)
      return
    }

    const newList = sports.filter(sport => sport.schedule === schedule)
    setLists(newList)
  }

  return (
    <div className="App">
      
      <div className="app__wrapper">
        <h1 className="app__title">Choose your sports below:</h1>
        <Menu handleSports={ handleSports } schedulers={ schedulers } />
        <Sports lists={ lists } />
      </div>
      
    </div>
  )
}

export default App;
