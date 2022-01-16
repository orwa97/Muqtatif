import { useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import classes from "./Main.module.scss";
import Muqtatif from "./muqtatif/Muqtatif";

const Main = () => {
  const { verseKey } = useParams();
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes["muq--intro"]}>
          <div className={classes.intro__muqtatifLogo}>Muqtatif</div>
          <p className={classes.intro__mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            rutrum lorem. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <Muqtatif verseKey={verseKey} />
      </div>
    </Layout>
  );
};

export default Main;
