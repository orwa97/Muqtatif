import Button from "../../button/Button";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.layout__header}>
      <div className={classes.header__btn}>
        <Button className={classes.signInBtn} type="text-only">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
