import { useGlobalState } from "../../hooks/useGlobalState";
import {
  Balance,
  LinkButton,
  PageNotBalance,
  Title,
  TransactionList
} from "../index";

const Dasboard = () => {

  const { transactions } = useGlobalState();

  return (
    <section>
      <Title
        title="Bienvenido !"
        subTitle="Este es tu dashboard"
      />
      {
        (transactions.length === 0)
          ? <PageNotBalance />
          : <>
              <Balance />
              <TransactionList />
              <LinkButton/>
            </>  
      }
    </section>
  );
};


export default Dasboard
