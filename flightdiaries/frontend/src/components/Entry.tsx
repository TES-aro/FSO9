import {type DiaryEntry} from '../types.ts';

const Entry = (entry: DiaryEntry) => {
  if (entry.comment){
    return(
      <li key={entry.id}>
        {entry.date} <br />
        Weather: {entry.weather} Visiibility: {entry.visibility} <br />
        Comment: <br/>
        {entry.comment}
      </li>
    )
  }
  return (
    <li key={entry.id}>
      {entry.date} <br/>
      Weather: {entry.weather} Visibility: {entry.visibility} 
    </li>
  )
}

export default Entry;
