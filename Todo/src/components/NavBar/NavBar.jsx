//Logo
import Logo from '../../assets/Logo.svg'


const NavBar = () => {
  return (
    <main className=' bg-Gray700 py-11 flex items-center justify-center '>
        <img 
        src={Logo} 
        alt="Todo"
        draggable='false'
        className=' my-4 ' />
    </main>
  )
}

export default NavBar