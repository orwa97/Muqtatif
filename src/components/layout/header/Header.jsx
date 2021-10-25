import Button from "../../button/Button";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.layout__header}>
      <Button className={classes.header__signInBtn} type="text-only">
        Sign In
      </Button>
      <div className={classes.header__intro}>
        <div className={classes.intro__muqtatifLogo}>Muqtatif</div>
        <p className={classes.intro__mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          rutrum lorem. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Ut posuere neque neque, id.
        </p>
      </div>
    </header>
  );
};

export default Header;
