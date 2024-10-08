function Product({title,price,feature}) {
  const list = feature.map((feature) => <li>{feature}</li>);
  let style = {backgroundColor: price>1001 ? "red": ""};
  return (
    <div style={style}>
      <h3>{title}</h3>
      <h5>{price}</h5>
      <p>{list}</p>
    </div>
  );
}
export default Product;
