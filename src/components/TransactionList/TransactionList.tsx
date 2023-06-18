import { useGlobalState } from "../../hooks/useGlobalState";
import { card, card_description, container_card } from "./TransactionList.css";

const TransactionList = () => {
  const { transactions } = useGlobalState();
  
  return (
    <article className={`${container_card}`}>
      {transactions.map((transaction) => (
        <article key={transaction.id} className={`${card}`}>
          <div className={`${card_description}`}>
            <h1>{transaction.description}</h1>
            <small>{transaction.options}</small>
          </div>
          <p>${transaction.mount}</p>
        </article>
      ))}
    </article>
  );
};

export default TransactionList;
