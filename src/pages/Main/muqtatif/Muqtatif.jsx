import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { defaultValues } from "./muqHeader/settings/defaultValues";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import {
  aspectRatioAtom,
  dropShadowAtom,
  textBgAtom,
  textBgColorAtom,
  textBgHeightAtom,
  textBgOpacityAtom,
  textBgWidthAtom,
} from "./muqHeader/settings/window/WindowAtoms";
import {
  fontColorAtom,
  fontFamilyAtom,
  fontSizeAtom,
  lineHeightAtom,
  textAlignAtom,
} from "./muqHeader/settings/editor/EditorAtoms";
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
        const options = res.verses.map((item) => {
          return { value: item.id, label: item.text_indopak };
        });
        setVerses(options);
      });
  }, []);

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
