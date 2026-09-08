import CourseParts from './CourseParts'
import {type CoursePartProps} from './CoursePart'

export type CourseProps = {
  courseName: string,
  totalExercises: number,
  courseParts: CoursePartProps[]
}
const Course = ({courseName, courseParts, totalExercises}: CourseProps) => {
  return(
    <>
      <h1> {courseName} </h1>
      <CourseParts courseData={courseParts}/>
      <p>
        Number of exercises {totalExercises}
      </p>
    </>
  )
}

export default Course
