import { useGlobalState } from "../../hooks/useGlobalState";

const Dasboard = () => {
  const { transactions } = useGlobalState();
  return (
    <section>
      <h1>
        Dahsboard
      </h1>
      {
        transactions.map(transaction => (
          <article key={transaction.id}>
            <h1>{transaction.description}</h1>
            <p>${transaction.mount}</p>
            <small>{transaction.options}</small>
          </article>
        ))
      }
    </section>
  );
};


export default Dasboard
