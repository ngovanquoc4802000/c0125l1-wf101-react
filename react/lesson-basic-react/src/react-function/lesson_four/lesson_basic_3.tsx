interface LessonBasicThreeTs {
  age: string
}
export default function LessonBasicThree({age}: LessonBasicThreeTs) {
  return (
    <>
      <p>Tuổi của bạn là: {age}</p>
    </>
  )
}