import PropTypes from "prop-types";

const Input = ({name, type, onChange}) => {
  return (
  <div>
        <label>{name}</label>
        <br />
      <input type={type} name={name} placeholder={name} className="border-2 border-slate-900 p-2" onChange={onChange}/>
  </div>
  )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type :PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired
}


export default Input