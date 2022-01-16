import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useAtomValue } from "jotai/utils";
import { aspectRatioAtom } from "./muqHeader/settings/window/WindowAtoms";
import { useMemo } from "react";

const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  useEffect(() => {
    const response = fetch(
      `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${
        props.verseKey.split(":")[0]
      }`
    );
    const data = response
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const options = res.verses.map((item) => {
          return { value: item.verse_key, label: item.text_indopak };
        });
        setVerses(options);
      });
  }, []);
  // const incomingVerse = useMemo(() => {}, [verses]);
  const [selectedVerse, setSelectedVerse] = useState("");
  const selectedVerseHandler = (e) => {
    setSelectedVerse(e.label);
  };

  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");
  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color.hex);
  };

  return (
    <div className={classes.muqtatifContainer}>
      <MuqHeader
        onSelectVerse={selectedVerseHandler}
        verses={verses}
        onChangeQouteBgColor={qouteBGColorHandler}
        qouteBgColorValue={selectedQouteBGcolor}
      />
      <div className={classes["muq--body"]}>
        <QuoteBackground
          aspectRatio={useAtomValue(aspectRatioAtom)}
          backgroundColor={selectedQouteBGcolor}
        >
          <QuoteArea quote={selectedVerse} />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
