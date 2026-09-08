import CoursePart from './CoursePart'
import {type CoursePartProps} from './CoursePart'

const CourseParts = ({courseData}: {courseData: CoursePartProps[]}) => {
  return (
    <>
      {courseData.map(p => {
        return <CoursePart name={p.name} exerciseCount={p.exerciseCount} />
      })}
    </>
  )
}

export default CourseParts;
