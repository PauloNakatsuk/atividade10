import MyComponent from './Components/MyComponent.jsx'; // Adjust the path if necessary

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div >
      <SearchBar />
      <ProductTable products={products} />
      <MyComponent />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$12", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$12", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$23", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$24", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$45", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$12", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
