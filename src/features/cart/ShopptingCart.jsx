import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "../../assets/cart.svg";
import { getCart, getTotalPrice } from "./cartSlice";

export default function ShopptingCart() {
  const cartItems = useSelector(getCart);
  const isCartEmpty = !Boolean(Object.keys(cartItems).length);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Dropdown drop="down-centered" autoClose={false}>
      <Dropdown.Toggle
        as="img"
        src={Cart}
        style={{ height: "2rem", filter: "invert(1)", cursor: "pointer" }}
      ></Dropdown.Toggle>
      <Dropdown.Menu style={{ left: "auto", right: 0 }}>
        {isCartEmpty && <Dropdown.Item>No Items!</Dropdown.Item>}
        {Object.entries(cartItems).map(([id, item]) => {
          return (
            <>
              <Dropdown.Item key={id}>
                {`${item.name} x ${item.count}`}
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          );
        })}
        {!isCartEmpty && (
          <>
            <Dropdown.Item>
              Total<b>{`= ${totalPrice}`}</b>
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
