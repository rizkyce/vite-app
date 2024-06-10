/* eslint-disable react-hooks/exhaustive-deps */
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const token = localStorage.getItem("token");

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    setUsername(getUsername(token));
  });

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  //useRef
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "block";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="flex px-10 h-20 justify-end items-center text-white bg-gray-700">
        <p className="text-lg font-bold">{username}</p>
        <Button variant="bg-red-700 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-auto flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header image={product.image} />
                <CardProducts.Body name={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price}
                  id={product.id}
                  onAddToCart={handleAddToCart}
                />
              </CardProducts>
            ))}
        </div>
        <div className="w-1/4 h-1/2 bg-white px-10 flex flex-col  shadow-sky-300 shadow-md border border-blue-500 m-4 rounded-xl">
          <h1 className="text-2xl font-semibold mt-4 ml-5 mb-2 text-blue-700">
            Cart
          </h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="table-auto">
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="text-left" title={product.title}>
                        {product.title.substring(0, 5)}...
                      </td>
                      <td>
                        {product.price.toLocaleString("en-EN", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("en-EN", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div className="mt-auto pb-5">
            <hr className="border my-2 border-blue-600" />
            <p
              ref={totalPriceRef}
              className="text-xl text-end text-blue-600 font-semibold"
            >
              Total:{" "}
              {totalPrice.toLocaleString("en-EN", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
}

export default ProductsPage;
