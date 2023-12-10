import { Component } from "react";
import ProfileImage from "@/components/profile-image";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface User {
  name: string;
  createdAt: string;
  avatar: string;
  nickname: string;
  cpf: string;
  emissaoCpf: string;
  id: string;

}

class Users extends Component {
  state = {
    users: [] as User[],
  };

  async componentDidMount() {
    await fetch('https://6574f0c7b2fbb8f6509ccc48.mockapi.io/api/pl/clientes/clientes')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  fakeCpf(cpf: string) {
    const newCPF = (+cpf + 12345678910).toString();
    return newCPF.substring(0, 3) + '.' + newCPF.substring(3, 6) + '.' + newCPF.substring(6, 9) + '-' + newCPF.substring(9, 11);
  }

  render() {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button>
            <Link to={'/create/users'}>
              Novo Cliente
            </Link>
          </Button>
        </div>

        <div className="border-2 rounded-lg border-black">
          <Table>
            <TableCaption>Clientes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Nome Social</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead className="text-right">Data de emissão CPF</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.users.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium flex items-center gap-4">
                    <ProfileImage image={user.avatar} />

                    {user.name}
                  </TableCell>
                  <TableCell>{user.nickname}</TableCell>
                  <TableCell>{this.fakeCpf(user.cpf)}</TableCell>
                  <TableCell className="text-right ">{this.formatDate(user.emissaoCpf)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div >
    );
  }
}

export default Users;