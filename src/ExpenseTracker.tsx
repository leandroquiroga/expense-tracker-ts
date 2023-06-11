import { GlobalProvaider } from './context/GlobalProvaider';
import { Header } from './components/Header/Header';

import './index.css';

export const ExpenseTracker = (): JSX.Element => {

  return (
    <GlobalProvaider>
      <Header />
    </GlobalProvaider>
  );
}

