interface LessonBasicFiveTs {
  props: string;
}
export default function LessonBasicFive({props}: LessonBasicFiveTs) {
  return (
    <>
     <p>{props}</p>
    </>
  )
}