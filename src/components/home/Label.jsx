import PropTypes from "prop-types"

const Label = ({label}) => {
  return (
    <div className="text-center py-4">{label}</div>
  )
}
Label.propTypes ={
  label:PropTypes.string.isRequired,
}


export default Label