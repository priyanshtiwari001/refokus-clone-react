import Button from "./Button";

const Product = ({ product, mover, i }) => {
  return (
    <div className="w-full h-[21rem] py-20 text-white ">
      <div
        onMouseOver={() => mover(i)}
        className=" max-w-screen-xl mx-auto flex items-center justify-between px-10 "
      >
        <h2 className="text-6xl font-Poppins font-medium">{product.title}</h2>
        <div className="w-[30%] ">
          <p className="pb-4 text-sm">{product.description}</p>
          <div className="flex items-center gap-x-4">
            {product.live && <Button />}
            {product.case && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
