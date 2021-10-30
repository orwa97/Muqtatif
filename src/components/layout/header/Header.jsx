import Button from "../../button/Button";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.layout__header}>
      <Button className={classes.header__signInBtn} type="text-only">
        Sign In
      </Button>
    </header>
  );
};

export default Header;
