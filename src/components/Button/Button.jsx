import PropTypes from 'prop-types';

export const Button = ({ variant = 'primary', children }) => {
  return (
    <button className={`text-white py-2 px-4 text-center inline-block font-md rounded-md cursor-pointer ${variant}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string
}
