import Button from "../../../components/button/Button";
import Select from "../../../components/Select/Select";
import classes from "./Muqtatif.module.scss";
import { ReactComponent as Settings } from "../../../images/SVG/cog.svg";
import { ReactComponent as ColorLens } from "../../../images/SVG/color_lens.svg";
import { ReactComponent as Copy } from "../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../images/SVG/arrow_down.svg";
import QuoteArea from "../../../components/quoteArea/QuoteArea";

const Muqtatif = () => {
  return (
    <div className={classes.muqtatifContainer}>
      <div className={classes["muq--header"]}>
        <div className={classes.headerPart}>
          <Select prefix="logo" options={["a", "b", "c"]} />
          <Select prefix="logo" options={["a", "b", "c"]} />
          <Button type="icon-only" icon={<ColorLens />} />
          <Button type="icon-only" icon={<Settings />} />
        </div>
        <div className={classes.headerPart}>
          <Button type="icon-only" icon={<Copy />} />
          <Button type="text-only" postfix={<ArrowDown />}>
            Share
          </Button>
          <Button type="text-only" postfix={<ArrowDown />}>
            Export
          </Button>
        </div>
      </div>
      <div className={classes["muq--body"]}>
        <QuoteArea />
      </div>
    </div>
  );
};

export default Muqtatif;
