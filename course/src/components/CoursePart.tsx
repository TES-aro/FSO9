export type CoursePartProps = {
  name: string,
  exerciseCount: number
}

const CoursePart = ({name, exerciseCount}: CoursePartProps) => {
  return (
    <>
      <p>
        {name} {exerciseCount}
      </p>
    </>
  )
}

export default CoursePart
