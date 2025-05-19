interface LessonBasicFour {
  message: string;
}
export default function LessonBasicFour({message}: LessonBasicFour) {
  return (
    <>
     <p>{message}</p>
    </>
  )
}