import Nav from "./nav";
import Footer from './footer'



const Layout = ({ children, logo }) => (


  <>
    <Nav />

    {children}
    <Footer />
  </>

);

export default Layout;