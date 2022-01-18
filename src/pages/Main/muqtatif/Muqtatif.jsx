import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useCallback, useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";
import { useAtomValue } from "jotai/utils";
import { aspectRatioAtom } from "./muqHeader/settings/window/WindowAtoms";
import { useMemo } from "react";
import { isSelectedAtom, selectedVerseAtom } from "./MuqtatifAtoms";
import { useAtom } from "jotai";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { copyImageToClipboard } from "copy-image-clipboard";
const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [incomingVerse, setIncomingVerse] = useState("");
  const [isSelected, setIsSelected] = useAtom(isSelectedAtom);
  const [selectedVerse, setSelectedVerse] = useAtom(selectedVerseAtom);
  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");

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
        setIncomingVerse(options[verseKey[1] - 1]);
      });
  }, []);
  const selectedOptionHandler = (e) => {
    setIsSelected(true);
    setSelectedVerse(e);
  };

  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color.hex);
  };

  const quote = useMemo(() => {
    return isSelected ? selectedVerse.label : incomingVerse.label;
  }, [isSelected, selectedVerse, incomingVerse]);

  const onExport = () => {
    const data = document.getElementById("toBeExported");
    htmlToImage.toPng(data).then((dataUrl) => {
      // download(dataUrl, "my-node.png");
      // const img = new Image(dataUrl);
      // img.src = dataUrl;
      copyImageToClipboard(dataUrl)
        .then(() => {
          console.log("Image Copied");
        })
        .catch((e) => {
          console.log("Error: ", e.message);
        });
    });
  };
  return (
    <div className={classes.muqtatifContainer}>
      <MuqHeader
        onSelectVerse={selectedOptionHandler}
        verses={verses}
        onChangeQouteBgColor={qouteBGColorHandler}
        qouteBgColorValue={selectedQouteBGcolor}
        value={selectedVerse}
        onExport={onExport}
      />
      <div className={classes["muq--body"]} id="toBeExported">
        <QuoteBackground
          aspectRatio={useAtomValue(aspectRatioAtom)}
          backgroundColor={selectedQouteBGcolor}
        >
          <QuoteArea quote={quote} />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
