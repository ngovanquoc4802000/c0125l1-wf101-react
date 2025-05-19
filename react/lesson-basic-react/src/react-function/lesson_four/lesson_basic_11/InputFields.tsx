interface InputTs {
  type: string;
  id: string;
  name: string;
}

function InputFields({type,id,name}:InputTs) {
  return (
      <>
          <div className="input-fields">
              <label htmlFor={id}>{name}: </label>
              <input type={type} id={id} name={name} />
          </div>
      </>
  )
}
export default InputFields;