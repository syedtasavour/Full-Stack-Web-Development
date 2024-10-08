import Product from "./product.jsx";

function ProductTab() {
  let options = ["f1","f2","f3"];
    return (
      

      <>
        <Product title="Title 2"price={1002}  feature={options}/>
        <Product title="Title 1"price={1001} feature={options}/>
        <Product title="Title 3"price={1003}feature={options} />
      </>
    );
  }

export default ProductTab;