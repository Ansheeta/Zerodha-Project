import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`)
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Time</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Type</th>
            <th>Status</th>
          </tr>

          {allOrders.map((order, index) => {
            const typeClass = order.mode === "BUY" ? "loss" :  "profit" ;

            return (
              <tr key={index}>
                <td>
                  {new Date(order.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td className={typeClass}>{order.mode}</td>
                <td className="profit">Completed</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Orders;
