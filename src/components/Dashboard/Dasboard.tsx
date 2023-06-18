import { TransactionList } from "..";
import { Title } from "../Title/Title";

const Dasboard = () => {
  return (
    <section>
      <Title
        title="Bienvenido !"
        subTitle="Este es tu dashboard"
      />
      <TransactionList />
    </section>
  );
};


export default Dasboard
