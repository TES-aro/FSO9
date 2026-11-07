import Entry from './Entry.tsx'
import { type DiaryEntry } from '../types.ts'

const Entries = ({ entries }: {entries:DiaryEntry[]}) => {
  return(
    <>
      <ul>
        {entries.map(e => {
          return( <Entry entry={e} key={e.id} />)
        })}
      </ul>
    </>
  )
}

export default Entries;
