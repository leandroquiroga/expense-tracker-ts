import { GlobalProvaider } from './context';
import { FormComponent, Header } from './components';

import './index.css';

export const ExpenseTracker = (): JSX.Element => {

  return (
    <GlobalProvaider>
      <Header />
      <FormComponent />
    </GlobalProvaider>
  );
}

