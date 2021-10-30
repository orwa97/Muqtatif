import Content from "./content/Content";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Layout;
