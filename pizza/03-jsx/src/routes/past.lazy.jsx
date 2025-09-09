import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Modal from "../Modal.jsx";
import getPastOrders from "../api/getPastOrders";
import getPastOrder from "../api/getPastOrder";
import ErrorBoundary from "../ErrorBoundary.jsx";

const intl = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryWrappedPastOrderRoutes,
});

function ErrorBoundaryWrappedPastOrderRoutes(props) {
  return (
    <ErrorBoundary>
      <PastOrdersRoute props />
    </ErrorBoundary>
  );
}

function PastOrdersRoute() {
  throw new Error("omg error");

  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState();

  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });

  const { isLoading: isLoadingFocusedOrder, data: focusedOrderData } = useQuery(
    {
      queryKey: ["focused-order", focusedOrder],
      queryFn: () => getPastOrder(focusedOrder),
      staleTime: 86400000,
      enabled: !!focusedOrder,
    }
  );

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>LOADING ...</h2>
      </div>
    );
  }

  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr
              onClick={() => setFocusedOrder(order.order_id)}
              key={order.order_id}
            >
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {focusedOrder ? (
        <Modal>
          <h2>Order #{focusedOrder}</h2>
          {!isLoadingFocusedOrder ? (
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {focusedOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{intl.format(pizza.price)}</td>
                    <td>{intl.format(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading ...</p>
          )}
          <button onClick={() => setFocusedOrder()}>Close</button>
        </Modal>
      ) : null}
    </div>
  );
}
