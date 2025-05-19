import LessonBasicItem from "../item";

const array = [
  {
      title: "Ronaldo",
      date: "02/12/1987",
  },
  {
      title: "Messi",
      date: "11/4/1892",
  },
  {
      title: "Maradona",
      date: "12/12/1985",
  }
]
function LessonBasicList() {
  return ( 
    <>
    <ul>
        {
            array.map((item, index) => (
                <li key={index}>
                    <LessonBasicItem title={item.title} date={item.date}  />
                </li>
            ))
        }
    </ul>
</>
   );
}

export default LessonBasicList;