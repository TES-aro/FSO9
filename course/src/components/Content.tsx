import CourseParts from './CourseParts';
import {type CoursePartProps} from './CoursePart'

const Content = ({content}: {content: CoursePartProps[]}) => {
  return(
    <>
      <CourseParts courseData={content} />
    </>
  )
}

export default Content;
