const list = [
  {
      title: "Facebook",
      address: "https://www.facebook.com/"
  },
  {
      title: "Amazon",
      address: "https://www.amazon.com/"
  },
  {
      title: "Netflix",
      address: "https://www.netflix.com/"
  },
  {
      title: "Google",
      address: "https://www.google.com/"
  },
]

function LessonBasicTen() {
  return (
    <>
      <div>
        {
          list.map((link, index) => (
            <div key={index}>
              <a href={link.address} target="_blank">{link.title}</a>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default LessonBasicTen;