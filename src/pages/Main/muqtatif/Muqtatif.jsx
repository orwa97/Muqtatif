import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useCallback, useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useAtomValue } from "jotai/utils";
import { aspectRatioAtom } from "./muqHeader/settings/window/WindowAtoms";
import { useMemo } from "react";
import { selectedVerseAtom } from "./MuqtatifAtoms";
import { useAtom } from "jotai";
const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [selectedOption, setSelectedOption] = useAtom(selectedVerseAtom);
  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");
  const [selectedVerse, setSelectedVerse] = useState("");
  const verseKey = useMemo(() => {
    return props.verseKey.split(":");
  }, [props.verseKey]);
  useEffect(() => {
    const response = fetch(
      `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${verseKey[0]}`
    );
    const data = response
      .then((res) => res.json())
      .then((res) => {
        const options = res.verses.map((item) => {
          return { value: item.verse_key, label: item.text_indopak };
        });
        setVerses(options);
        setSelectedVerse(options[verseKey[1] - 1].label);
      });
  }, []);
  const selectedOptionHandler = (e) => {
    setSelectedOption(e.value);
    setSelectedVerse(e.label);
  };

  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color.hex);
  };

  console.log(selectedVerse);
  return (
    <div className={classes.muqtatifContainer}>
      <MuqHeader
        onSelectVerse={selectedOptionHandler}
        verses={verses}
        onChangeQouteBgColor={qouteBGColorHandler}
        qouteBgColorValue={selectedQouteBGcolor}
        value={selectedVerse}
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
