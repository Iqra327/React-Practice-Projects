import styles from './Button.module.css';

const Button = ({icon, text, isOutline, ...rest}) => {

  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button;