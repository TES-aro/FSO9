

type CourseName = {
  courseName: string
}

const Header = ({courseName}:CourseName) => {
  const name = courseName;
  return(
    <>
      <h1> {name} </h1>
    </>
  )
}

export default Header;
