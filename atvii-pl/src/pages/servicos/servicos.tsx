import { Component } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Service {
  value: string;
  id: string;

}

class Services extends Component {
  state = {
    services: [] as Service[],
  };

  componentDidMount() {
    fetch('https://65750a52b2fbb8f6509cdcce.mockapi.io/api/petlover/Services')
      .then(response => response.json())
      .then(data => this.setState({ services: data }));
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  fakeService(index: number) {
    const services = ['Banho', 'Tosa', 'Hidratação', 'Corte de Unha', 'Outros'];
    return services[index];
  }

  render() {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Serviços</h1>
          <Button>
            <Link to={'/create/services'}>
              Novo Cliente
            </Link>
          </Button>
        </div>
        <div className="border-2 rounded-lg border-black">

          <Table>
            <TableCaption>Serviços.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Serviço</TableHead>
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.services.slice(0, 5).map((service, index) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium flex items-center gap-4">
                    {this.fakeService(index)}
                  </TableCell>
                  <TableCell>R${service.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Services;