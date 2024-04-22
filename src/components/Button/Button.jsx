import PropTypes from 'prop-types';

export const Button = ({ variant = 'primary', children }) => {
  return (
    <button className={`text-white py-2 px-4 text-center inline-block font-md rounded-md cursor-pointer w-fit ${variant}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string
}


export const Btn = ({types,label,bgColor}) => {
  const styles = types === "primary" ? `text-white bg-${bgColor}` : `bg-transparent border-2 border-${bgColor} text-${bgColor}`
  return (
    <button  className={`py-2 px-4 text-center inline-block font-md rounded-md cursor-pointer w-fit ${styles}`}>
      {label}
    </button>
  )
}

Btn.propTypes = {
  types:PropTypes.bool,
  label : PropTypes.string,
  bgColor:PropTypes.string
}