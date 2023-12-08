import Footer from "./navbar/Footer";
import Header from "./navbar/Header";

const Layouts = ({children}) => {
  return <>
  <Header/>
  <main>{children}</main>
  <Footer/>
  </>;
};

export default Layouts;
