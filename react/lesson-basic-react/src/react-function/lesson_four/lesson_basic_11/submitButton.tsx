interface SubmitTs {
  title: string;
}
function SubmitButton({title} : SubmitTs) {
  return (
    <>
      <button>{title}</button>
    </>
  );
}

export default SubmitButton;