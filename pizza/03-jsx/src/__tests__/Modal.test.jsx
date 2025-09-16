import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import Modal from "../Modal";

test("", async () => {
  const intl = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const focusedOrder = "21356";
  const isLoadingFocusedOrder = false;
  const focusedOrderData = {
    orderItems: [
      {
        pizzaTypeId: "hawaiian",
        name: "The Hawaiian Pizza",
        category: "Classic",
        description: "Sliced Ham, Pineapple, Mozzarella Cheese",
        quantity: 1,
        price: 13.25,
        total: 13.25,
        size: "M",
        image: "/public/pizzas/hawaiian.webp",
      },
    ],
  };
  const screen = render(
    <>
      <div id="modal"></div>
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
      </Modal>
    </>
  );

  const img = screen.getByRole("img");
  expect(img.alt).toBe(focusedOrderData.orderItems[0].name);
  expect();
});
