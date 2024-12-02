import MyComponent from './Components/MyComponent.jsx'; // Adjust the path if necessary
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ProductCategoryRow({ category }) {
  return (
    <TableRow>
      <TableCell>
        {category}
      </TableCell>
    </TableRow>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
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
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
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
