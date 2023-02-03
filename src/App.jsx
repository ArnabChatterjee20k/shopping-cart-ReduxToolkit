import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import Navigationbar from "./components/Navbar";
import ProductLists from "./features/product/productLists";
import {
  fetchingStatus,
  fetchProducts,
  getProductList,
} from "./features/product/productSlice.";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(fetchingStatus);
  const list = useSelector(getProductList);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()).unwrap();
    }
  }, [dispatch, status]);

  const [count, setCount] = useState(0);

  return (
    <>
      <Navigationbar />
      {status === "loading" ? <Loader /> : <ProductLists />}
    </>
  );
}

export default App;
