import { TransactionList } from "..";
import { Title } from "../Title/Title";
import { Balance } from "../TrasanctionBalance/Balance";

const Dasboard = () => {
  return (
    <section>
      <Title
        title="Bienvenido !"
        subTitle="Este es tu dashboard"
      />
      <Balance />
      <TransactionList />
    </section>
  );
};


export default Dasboard
