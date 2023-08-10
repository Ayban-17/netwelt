import PropTypes from "prop-types";
const Button = ({name}) => {
  return (
    <button type="submit" className="bg-gray-200 text-black px-4 py-1 self-end border-2 border-slate-900">{name}</button>
  )
}
Button.propTypes = {
  name: PropTypes.string,
 
}

export default Button