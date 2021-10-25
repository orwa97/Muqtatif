import Content from "./content/Content";
import Header from "./header/Header";

const Layout = (props) => {
  return (
    <div className="layoutContainer">
      <Header />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Layout;
