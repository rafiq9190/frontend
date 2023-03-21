import Nav from "./nav";
import Footer from './footer'



const Layout = ({ children, logo }) => (


  <>
    <Nav logo={logo} />

    {children}
    <Footer />
  </>

);

export default Layout;