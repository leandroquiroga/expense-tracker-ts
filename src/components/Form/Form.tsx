import { Button } from "./Button";
import { InputLabel } from "./InputLabel";
import { Form, Formik } from 'formik';
import { SelectOptions } from "./SelectOptions";
import { arrayOptions } from "../../utilities";
import { button_styles, container_button, container_form, container_input, select_styles } from "./Form.css";
import { validationForm } from '../../utilities/index';
import * as Yup from 'yup';

type InitialValue = {
  description: string;
  mount: number;
  options: string
};

const valueFormComponent: InitialValue = {
  description: "",
  mount: 0,
  options: ""
};

export const FormComponent = (): JSX.Element => {
  return (
    <Formik
      initialValues={valueFormComponent}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object(validationForm)}
    >
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

          <section className={`${container_button}`}>
            <Button
              type="submit"
              value="Agregar Monto"
              style={`${button_styles}`}
            />
            <Button type="reset" value="Resetear" style={`${button_styles}`} />
          </section>
        </Form>
      )}
    </Formik>
  );
}
