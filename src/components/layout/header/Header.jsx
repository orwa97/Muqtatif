import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.layout__header}>
      <div className={classes.header__btn}></div>
    </header>
  );
};

export default Header;
