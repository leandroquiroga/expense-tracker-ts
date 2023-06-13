import { useField } from 'formik';
import { InputProps } from '../../interfaces/index';
import { error_message, input_styles, label_styles } from './Form.css';

export const InputLabel = ({label, styles ,...props}: InputProps): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <section className={styles}>
      <label htmlFor={props.id || props.name} className={`${label_styles}`}>
        {label}:
      </label>
      <input className={`${input_styles}`} {...field} {...props} />

      {meta.touched && meta.error && (
        <span className={`${error_message}`}>{meta.error}</span>
      )}
    </section>
  );
};
