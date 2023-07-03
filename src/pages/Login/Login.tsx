
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import { InputLabel } from '../../components/Form/InputLabel.tsx';
import { button_login, container_login } from './Login.css.ts';
import { useGlobalState } from '../../hooks/useGlobalState.ts';
import { validationLogin } from '../../utilities/index.ts';
import { container_input } from '../../components/Form/Form.css.ts';
import { Button } from '../../components/Form/Button.tsx';
import { Title } from '../../components/index.ts';

type InitialValue = {
  name: string
};

const valueLoginComponent: InitialValue = {
  name: ''
};

const Login = () => {
  const { signUp } = useGlobalState();
  const navigate = useNavigate();

  const handleSignUp = (name: string) => {
    signUp(name);
    navigate('/')
  }

  return (
    <main>
      <Title title="Bienvenido!" subTitle="Inicia sesion para comenzar" />
      <Formik
        initialValues={valueLoginComponent}
        onSubmit={({ name }) => handleSignUp(name)}
        validationSchema={Yup.object(validationLogin)}>
        {() => (
          <Form className={`${container_login}`} noValidate>
            <InputLabel
              styles={`${container_input}`}
              label="Nombre"
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
            />

            <Button type="submit" value="Ingresar" style={`${button_login}`} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Login
