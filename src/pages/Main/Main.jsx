import React from "react";
import { useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import classes from "./Main.module.scss";
import Muqtatif from "./muqtatif/Muqtatif";
import { ReactComponent as IconTheme } from "../../images/SVG/themes.svg";
import { ReactComponent as IconSettings } from "../../images/SVG/cog.svg";

const Main = () => {
  const { verseKey } = useParams();
  return (
    <Layout
      className={classes.layout}
      headerParagraph={
        <p className={classes.headerParagraph}>
          Start styling by clicking on
          <span className={classes.iconContainer}>
            <IconSettings className={classes.icon} />
          </span>
          or pick a theme
          <br />
          from
          <span className={classes.iconContainer}>
            <IconTheme className={classes.icon} />
          </span>
          to start with some prestyles.
          <br />
        </p>
      }
    >
      <Muqtatif verseKey={verseKey} />
    </Layout>
  );
};

export default Main;
