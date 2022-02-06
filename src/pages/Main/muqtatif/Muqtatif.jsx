import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useAtomValue } from "jotai/utils";
import { aspectRatioAtom } from "./muqHeader/settings/window/WindowAtoms";
import { useMemo } from "react";
import { muqBgColorAtom, selectedVerseAtom } from "./MuqtatifAtoms";
import { useAtom } from "jotai";

const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedVerseValue, setSelectedVerseValue] =
    useAtom(selectedVerseAtom);
  const [selectedVerseText, setSelectedVerseText] = useState("");

  // verseKey (from the url param)
  const verseKey = useMemo(() => {
    return props.verseKey.split(":");
  }, [props.verseKey]);

  // getting chapter's verses based on the incoming verseKey (from the url param)
  useEffect(() => {
    const response = fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani_simple?chapter_number=${verseKey[0]}`
    );
    const data = response
      .then((res) => res.json())
      .then((res) => {
        const options = res.verses.map((item) => {
          return { value: item.verse_key, label: item.text_uthmani_simple };
        });
        setVerses(options);
      });
  }, []);

  // getting the selected verse by its verseKey (what the user selects)
  useEffect(() => {
    const vk = selectedVerseValue || props.verseKey;
    const response = fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=${vk}`
    );
    const data = response
      .then((res) => res.json())
      .then((res) => {
        const { verses: verse } = res;
        const label = verse[0].text_uthmani;
        setSelectedVerseText(label);
        setSelectedOption({ value: vk, label: label });
      });
  }, [selectedVerseValue]);

  const selectedOptionHandler = (e) => {
    setSelectedVerseValue(e.value);
  };

  return (
    <div className={classes.muqtatifContainer}>
      <MuqHeader
        onSelectVerse={selectedOptionHandler}
        verses={verses}
        value
        verseKey={selectedVerseValue || props.verseKey}
      />
      <div className={classes["muq--body"]} id="toBeExported">
        <QuoteBackground
          aspectRatio={useAtomValue(aspectRatioAtom)}
          backgroundColor={useAtomValue(muqBgColorAtom)}
        >
          <QuoteArea quote={selectedVerseText} />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
