import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { arrayOptions } from "../../utilities";
import { Button } from "./Button";
import { button_styles, container_button, container_form, container_input, select_styles } from "./Form.css";
import { InputLabel } from "./InputLabel";
import { SelectOptions } from "./SelectOptions";
import { useGlobalState } from "../../hooks/useGlobalState";
import { validationForm } from '../../utilities/index';

type InitialValue = {
  description: string;
  mount: number;
  options: string
  other?: string;
};

const valueFormComponent: InitialValue = {
  description: "",
  mount: 0,
  options: "",
  other: ""
};

export const FormComponent = (): JSX.Element => {
  const { newTransaction, selectOthers, setSelectOthers} = useGlobalState();

  // Resetea el valor del selectOthers, lo cambia a false ya que reseteamos el formulario
  const handleResetSelectOthers = () => setSelectOthers(false);

  return (
    <Formik
      initialValues={valueFormComponent}
      onSubmit={(values) => newTransaction(values)}
      validationSchema={Yup.object(validationForm)}>
      {() => (
        <Form className={`${container_form}`} noValidate>
          <InputLabel
            styles={`${container_input}`}
            label="Descripcion"
            name="description"
            type="text"
            placeholder="Ingrese una descripcion"
          />
          <InputLabel
            styles={`${container_input}`}
            label="Monto"
            name="mount"
            type="number"
            steps="0.01"
            placeholder="Ingrese un monto $10.00"
          />

          <SelectOptions
            data={arrayOptions}
            name="options"
            styles={`${select_styles}`}
            label="Seleccione una opcion"
          />

          {selectOthers && (
            <InputLabel
              styles={`${container_input}`}
              label="Opcion alternativa"
              name="others"
              type="text"
              placeholder="Describa la opcion alternativa"
            />
          )}

          <section className={`${container_button}`}>
            <Button
              type="submit"
              value="Agregar Monto"
              style={`${button_styles}`}
            />
            <Button
              action={handleResetSelectOthers}
              type="reset"
              value="Resetear"
              style={`${button_styles}`}
            />
          </section>
        </Form>
      )}
    </Formik>
  );
}
