import { useEffect, useState } from 'react'
import { type DiaryEntry } from './types'
import service from './services/entries'
import Entries from './components/Entries.tsx'
function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  useEffect(
    () => {
      const getData = async () => {
        const data = await service.getAll()
        setEntries(data)
      }
      getData()
    },[])

  return(
    <div>
      <Entries entries={entries} />
    </div>
  )
}

export default App
