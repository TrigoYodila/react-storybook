import PropTypes from 'prop-types'

export const Input = ({size='medium', type="text", style, ...rest}) => {
  const sizable = size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-xl' 
  return (
    <input type={type} className={`${style} ${sizable} outline-none block w-[400px] px-4 rounded-md border border-gray bg-white ${rest}`} {...rest} />
  )
}

Input.propTypes = {
    size: PropTypes.string.isRequired,
    type:PropTypes.string,
    style:PropTypes.string
}

