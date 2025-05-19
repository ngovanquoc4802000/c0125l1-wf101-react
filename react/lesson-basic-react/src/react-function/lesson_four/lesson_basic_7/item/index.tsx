interface ItemTs {
  title: string;
  date: string;
}
function LessonBasicItem({title,date} : ItemTs) {
  return ( 
    <>
    <h1>Tiêu đề: {title}</h1>
    <h2>Ngày tháng: {date}</h2>
</>
   );
}

export default LessonBasicItem;