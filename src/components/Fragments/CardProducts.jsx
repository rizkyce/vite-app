import Button from "../Elements/Button";

function CardProducts(props) {
  const { children } = props;
  return (
    <div className="max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-4 my-4 flex flex-col justify-between ">
      {children}
    </div>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <img
      className="rounded-t-lg h-48 w-full object-cover"
      src={image}
      alt="{image}"
    />
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name.substring(0, 15)} ...
        </h5>
      </a>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {children.substring(0, 100)} ...
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, onAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-4 pb-4">
      <span className="text-3xl font-bold text-white ">
        {price.toLocaleString("en-EN", { style: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-blue-700" onClick={() => onAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
