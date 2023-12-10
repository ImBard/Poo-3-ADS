import { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='w-full flex items-center justify-between p-4'>
        <div className='flex gap-4 items-center'>
          <img
            src="https://github.com/imbard.png"
            alt="Logo"
            width={60}
            height={60}
            style={{ borderRadius: '100%' }}
          />
          <h1 className='text-2xl font-bold'>Pet-Lovers</h1>
        </div>
        <ul className='flex gap-4'>
          <li className=' text-lg'>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li className=' text-lg'>
            <Link to={'/users'}>
              Clientes
            </Link>
          </li>
          <li className=' text-lg'>
            <Link to={'/pets'}>
              Pets
            </Link>
          </li>
          <li className=' text-lg'>
            <Link to={'/products'}>
              Produtos
            </Link>
          </li>
          <li className=' text-lg'>
            <Link to={'/services'}>
              Serviços
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

