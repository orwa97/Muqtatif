import Button from "../../../components/button/Button";
import Select from "../../../components/Select/Select";
import classes from "./Muqtatif.module.scss";
import { ReactComponent as Settings } from "../../../images/SVG/cog.svg";
import { ReactComponent as ColorLens } from "../../../images/SVG/color_lens.svg";
import { ReactComponent as Copy } from "../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../images/SVG/arrow_down.svg";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";

const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  // Get Verses by chapter's ID
  useEffect(async () => {
    const response = await fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${
        props.verseKey.split(":")[0]
      }`
    );
    const data = await response.json();
    // mapping the data we got to react-select's options [{value:  , label:  }, ...]
    const options = data.verses.map((item) => {
      return { value: item.id, label: item.text_uthmani };
    });

    setVerses(options);
  }, []);

  // get verses options
  // let verses = [];
  // getOptions(
  // `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${
  //   props.verseKey.split(":")[0]
  // }`
  // ).then((res) => {
  //   verses = res.verses.map((item) => {
  //     return { value: item.id, label: item.text_uthmani };
  //   });
  // });
  // console.log(verses);
  // const versesOptions = verses.map((item) => {
  //   return { value: item.id, label: item.text_uthmani };
  // });

  return (
    <div className={classes.muqtatifContainer}>
      <div className={classes["muq--header"]}>
        <div className={classes.headerPart}>
          <Select
            prefix="logo"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
          <Select
            prefix="logo"
            options={verses}
            // selected={props.verseKey.split(":")[1]}
          />
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
        <QuoteBackground>
          <QuoteArea />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
