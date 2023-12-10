import { Component } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  value: string;
  id: string;

}

class Products extends Component {
  state = {
    product: [] as Product[],
  };

  componentDidMount() {
    fetch('https://65750a52b2fbb8f6509cdcce.mockapi.io/api/petlover/Product')
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }


  render() {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button>
            <Link to={'/create/products'}>
              Novo Produto
            </Link>
          </Button>
        </div>
        
        <div className="border-2 rounded-lg border-black">
          <Table>
            <TableCaption>Produtos.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.product.map(product => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium flex items-center gap-4">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Products;