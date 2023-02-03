import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
import { addToCart, getItemById, removeFromCart } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formotCurrency } from "../../utils/formatCurrenct";

export const Product = ({id,image,name,description,price}) => {
    const dispatch = useDispatch()
    const item = useSelector((state)=>getItemById(state,id))
  return (
    <Card style={{ width: "18rem" , margin:0}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>Rs. {formotCurrency(price)}</Card.Title>
        <Card.Text>
          {description.substring(0,100)}....
        </Card.Text>
        <Stack direction="horizontal" style={{gap:"10px"}}>
            <Button variant="primary" onClick={()=>dispatch(addToCart({id,name,price}))}>+</Button>
            <h2>{item}</h2>
            <Button variant="primary" onClick={()=>dispatch(removeFromCart(id))}>-</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};