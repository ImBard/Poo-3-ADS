import FormPet from "@/pages/pets/formPet";
import Pets from "@/pages/pets/pets";
import FormProdutos from "@/pages/produtos/formProdutos";
import Products from "@/pages/produtos/produtos";
import FormServico from "@/pages/servicos/formServicos";
import Services from "@/pages/servicos/servicos";
import FormUsers from "@/pages/users/formUsers";
import Users from "@/pages/users/users";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Routes>

        <Route path="/" element={
          <div className="flex w-full m-auto h-[500px] justify-center items-center">
            <h1 className="text-2xl font-bold">PET LOVERS</h1>
          </div>
        } />

        <Route path="/users" element={<Users />} />
        <Route path="/create/users" element={<FormUsers />} />
        
        <Route path="/pets" element={<Pets />} />
        <Route path="/create/pets" element={<FormPet />} />

        <Route path="/products" element={<Products />} />
        <Route path="/create/products" element={<FormProdutos />} />

        <Route path="/services" element={<Services />} />
        <Route path="/create/services" element={<FormServico />} />
      </Routes >
    );
  }
}

export default Router