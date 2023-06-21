import { useGlobalState } from "../../hooks/useGlobalState";
import { amountNegative } from "../../utilities";
import { card_amount_decrement, card_amount_increment } from "../TransactionList/TransactionList.css";
import {
  balance_chart,
  balance_informacion,
  balance_information_title,
  container_balance
} from "./Balance.css";

export const Balance = () => {

  const { totalAmount, dateTime, timeAgoUpdate } = useGlobalState();


  return (
    <article className={`${container_balance}`}>
      <section className={`${balance_chart}`}>Chart</section>
      <section className={`${balance_informacion}`}>
        <h4 className={`${balance_information_title}`}>Informacion </h4>
        <p>Fecha actual: {dateTime} </p>
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
        <p>Ultima Actualizacion: {timeAgoUpdate} </p>
      </section>
    </article>
  );
}
