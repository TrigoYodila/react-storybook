import PropTypes from 'prop-types';

const Button = ({ variant = "primary", children, ...rest }) => {
  return (
    <button className={`border-none text-white py-2 px-4 text-center inline-block font-md rounded-sm cursor-pointer bg-${variant} ${rest}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string
}

export default Button;