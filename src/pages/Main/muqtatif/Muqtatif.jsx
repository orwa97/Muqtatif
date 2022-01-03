import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { defaultValues } from "./muqHeader/settings/defaultValues";
const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [defaultSelected, setDefaultSelected] = useState({});
  useEffect(async () => {
    const response = await fetch(
      `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${
        props.verseKey.split(":")[0]
      }`
    );
    const data = await response.json();
    const options = data.verses.map((item) => {
      return { value: item.id, label: item.text_indopak };
    });

    setVerses(options);
  }, []);

  const [selectedVerse, setSelectedVerse] = useState("");
  const selectedVerseHandler = (e) => {
    setSelectedVerse(e.label);
  };

  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");
  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color.hex);
  };
  const [isTextBgDropShadowDisabled, setIsTextBgDropShadowDisabled] =
    useState(true);
  const textBgDropShadowHandler = (e) => {
    setIsTextBgDropShadowDisabled(e);
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
        <QuoteBackground aspectRatio backgroundColor={selectedQouteBGcolor}>
          <QuoteArea
            quote={selectedVerse}
            width
            height
            backgroundColor
            opacity
            backgroundIsDisabled
            dropShadow={
              !isTextBgDropShadowDisabled
                ? `drop-Shadow(3px ${0}px ${0}px rgba(0, 0, 0, 0.45))`
                : "none"
            }
            fontSize
            textColor
            fontWeight
            fontFamily
          />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
