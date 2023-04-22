import Nav from "./nav";
import Footer from './footer'
import CookieBanner from "./cookieBanner";



const Layout = ({ children, category, articles }) => (


  <>
    <Nav articles={articles} />

    {children}
    <CookieBanner />
    <Footer />
  </>

);

export default Layout;