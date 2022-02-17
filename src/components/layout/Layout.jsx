import Content from "./content/Content";
import Header from "./header/Header";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={`${classes.layoutContainer} ${props.className}`}>
      <Header paragraph={props.headerParagraph} />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Layout;
