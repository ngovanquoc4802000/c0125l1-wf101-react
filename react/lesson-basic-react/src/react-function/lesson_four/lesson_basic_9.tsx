interface LessonBasicNineTs {
  type: string;
  message: string;
}
function LessonBasicNine({ type, message } : LessonBasicNineTs) {
  const getBgColor = () => {
    switch (type) {
      case 'success':
        return "lightgreen";
      case 'warning':
        return "khaki";
      case 'error':
        return "lightcoral";
      default:
        return "lightgray";
    }
  }
  const style = {
    backgroundColor: getBgColor(),
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
    fontWeight: "bold"
  }
  return (
    <>
      <div style={style}>{message}</div>
    </>
  );
}

export default LessonBasicNine;