import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.muqLogo}>
        <h1>مُقْتَطِف</h1>
        <h6>MUQTATIF</h6>
      </div>
      <div className={classes.intro}>{props.paragraph}</div>
    </header>
  );
};

export default Header;
