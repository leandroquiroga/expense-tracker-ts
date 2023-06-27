import { useGlobalState } from "../../hooks/useGlobalState";
import { useTimeAgo } from "../../hooks/useTimeAgo";
import { amountNegative } from "../../utilities";
import { BalanceChart } from "../BalanceChart/BalanceChart";
import { card_amount_decrement, card_amount_increment } from "../TransactionList/TransactionList.css";
import {
  balance_informacion,
  container_balance
} from "./Balance.css";

const Balance = () => {
  const { totalAmount } = useGlobalState();
  const { dateTime } = useTimeAgo(+new Date());

  return (
    <article className={`${container_balance}`}>
      <section className={`${balance_informacion}`}>
      <BalanceChart />
        <p>
          {" "}
          Monto Total:
          <span
            className={`${
              amountNegative(totalAmount)
                ? `${card_amount_decrement}`
                : `${card_amount_increment}`
              }`}>
            {" "}
            ${totalAmount}
          </span>
        </p>
        <p>{dateTime} </p>
      </section>
    </article>
  );
}

export default Balance;