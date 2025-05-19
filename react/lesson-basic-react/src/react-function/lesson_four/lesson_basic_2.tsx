interface LessonBasicTwoTs {
  name: string
}
export default function LessonBasicTwo({name}: LessonBasicTwoTs) {
  return (
    <>
      <h1>Xin Chào {name}</h1>
    </>
  )
}