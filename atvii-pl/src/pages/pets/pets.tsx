import { Component } from "react";
import ProfileImage from "@/components/profile-image";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Pet {
  createdAt: string,
  name: string,
  avatar: string,
  breed: string,
  gender: string,
  cpfOwner: string,
  id: string,
}

class Pets extends Component {
  state = {
    pets: [] as Pet[],
  };

  componentDidMount() {
    fetch('https://6574f0c7b2fbb8f6509ccc48.mockapi.io/api/pl/clientes/pets')
      .then(response => response.json())
      .then(data => this.setState({ pets: data }));
  }

  fakeType() {
    const types = ['Cachorro', 'Gato', 'Pássaro', 'Peixe', 'Outros'];
    const random = Math.floor(Math.random() * types.length);
    return types[random];
  }

  fakeCpf(cpf: string) {
    const newCPF = (+cpf + 12345678910).toString();
    return newCPF.substring(0, 3) + '.' + newCPF.substring(3, 6) + '.' + newCPF.substring(6, 9) + '-' + newCPF.substring(9, 11);
  }

  render() {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Pets</h1>
          <Button>
            <Link to={'/create/pets'}>
              Novo Pet
            </Link>
          </Button>
        </div>

        <div className="border-2 rounded-lg border-black">
          <Table>
            <TableCaption>Pets</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Raça</TableHead>
                <TableHead>Sexo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="text-right">CPF do Dono</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.pets.map(pet => (
                <TableRow key={pet.id}>
                  <TableCell className="font-medium flex items-center gap-4">
                    <ProfileImage image={pet.avatar} />
                    {pet.name}
                  </TableCell>
                  <TableCell>{pet.breed}</TableCell>
                  <TableCell>{pet.gender}</TableCell>
                  <TableCell>{this.fakeType()}</TableCell>
                  <TableCell className="text-right ">{this.fakeCpf(pet.cpfOwner)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Pets;