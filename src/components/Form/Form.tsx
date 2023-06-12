import { Button } from "./Button";
import { InputLabel } from "./InputLabel";
import { Form, Formik } from 'formik';

type InitialValue = {
  description: string;
  mount: number;
};

const valueFormComponent: InitialValue = {
  description: '',
  mount: 0 ,
}

export const FormComponent = (): JSX.Element => {
  return (
    <Formik
      initialValues={valueFormComponent}
      onSubmit={(values) => console.log(values)}>
      {() => (
        <Form noValidate>
          <InputLabel
            label="Descripcion"
            name="description"
            type="text"
            placeholder="Ingrese una descripcion"
          />
          <InputLabel
            label="Monto"
            name="mount"
            type="number"
            steps="0.01"
            placeholder="Ingrese un monto $10.00"
          />

          <Button type="submit" value="Agregar Monto" />

          <Button type="reset" value="Resetear" />
        </Form>
      )}
    </Formik>
  );
}
