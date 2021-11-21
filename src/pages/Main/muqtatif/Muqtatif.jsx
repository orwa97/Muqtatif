import Button from "../../../components/button/Button";
import Select from "../../../components/Select/Select";
import ColorPicker from "../../../components/colorPicker/ColorPicker";
import classes from "./Muqtatif.module.scss";
import { ReactComponent as Settings } from "../../../images/SVG/cog.svg";
import { ReactComponent as ColorLens } from "../../../images/SVG/color_lens.svg";
import { ReactComponent as Copy } from "../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../images/SVG/arrow_down.svg";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";

const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [defaultSelected, setDefaultSelected] = useState({});
  // Get Verses by chapter's ID
  useEffect(async () => {
    const response = await fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani_simple?chapter_number=${
        props.verseKey.split(":")[0]
      }`
    );
    const data = await response.json();
    // mapping the data we got to react-select's options [{value:  , label:  }, ...]
    const options = data.verses.map((item) => {
      return { value: item.id, label: item.text_uthmani_simple };
    });

    setVerses(options);
    console.log(options);
    // setDefaultSelected({ value: "vanilla", label: "Vanilla" });
  }, []);

  const [selectedVerse, setSelectedVerse] = useState("");
  const selectedVerseHandler = (e) => {
    setSelectedVerse(e.label);
    // console.log(e);
  };

  return (
    <div className={classes.muqtatifContainer}>
      <div className={classes["muq--header"]}>
        <div className={classes.headerPart}>
          <Select
            prefix="logo"
            options={verses}
            onSelect={selectedVerseHandler}
            // defaultValue={}
          />
          <Button
            type="icon-only"
            icon={<ColorLens />}
            tippyContent={<ColorPicker />}
          />

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
        <QuoteBackground>
          <QuoteArea quote={selectedVerse} />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
