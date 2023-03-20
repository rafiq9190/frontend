import Nav from "./nav";
import dynamic from "next/dynamic";
// import Footer from './footer'

const Footer = dynamic(() => import('./footer'))

const Layout = ({ children, logo }) => (


  <html lang="en">
    <body>
      <Nav logo={logo} />
      <main style={{ minHeight: "500px", overflowY: 'hidden' }}>
        {children}
      </main>
      <Footer />
    </body>
  </html>

);

export default Layout;