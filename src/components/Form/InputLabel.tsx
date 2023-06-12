import { useField } from 'formik';
import { InputProps } from '../../interfaces/index';

export const InputLabel = ({label, ...props}: InputProps): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <section>
      <label htmlFor={props.id || props.name}>{label}: </label>
      <input
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (<span>{meta.error}</span>)}
    </section>
  );
};
