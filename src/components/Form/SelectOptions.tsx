import { useField } from "formik";

import { OptionProps } from "../../interfaces";
import { container_select, error_message, label_styles } from "./Form.css";
import { useGlobalState } from "../../hooks/useGlobalState";

export const SelectOptions = ({ data, styles, label, ...props }: OptionProps): JSX.Element => {
  const [field, meta] = useField(props);
  const { handleToggle } = useGlobalState();
  
  return (
    <section className={`${container_select}`}>
      <label className={label_styles}>{label}: </label>
      <select
        {...props}
        {...field}
        className={styles}
        onChange={(e) => {
          handleToggle(e);
          // Utilizamos el atributo value con el campo de Fomik
          field.onChange(e);
        }}
        // Actualizamos el estado con el valor del objeto field.value de Formik
        value={field.value}>
        {data.map((e: string, i: number) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <span className={`${error_message}`}>{meta.error}</span>
      )}
    </section>
  );
};
