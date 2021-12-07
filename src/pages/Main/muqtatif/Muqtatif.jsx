import Button from "../../../components/button/Button";
import Select from "../../../components/Select/Select";
import ColorPicker from "../../../components/colorPicker/ColorPicker";
import classes from "./Muqtatif.module.scss";
import { ReactComponent as SettingsIcon } from "../../../images/SVG/cog.svg";
import { ReactComponent as ColorLens } from "../../../images/SVG/color_lens.svg";
import { ReactComponent as Copy } from "../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../images/SVG/arrow_down.svg";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import Settings from "./settings/Settings";

const Muqtatif = (props) => {
  const [verses, setVerses] = useState([]);
  const [defaultSelected, setDefaultSelected] = useState({});
  // Get Verses by chapter's ID
  useEffect(async () => {
    const response = await fetch(
      `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${
        props.verseKey.split(":")[0]
      }`
    );
    const data = await response.json();
    // mapping the data we got to react-select's options [{value:  , label:  }, ...]
    const options = data.verses.map((item) => {
      return { value: item.id, label: item.text_indopak };
    });

    setVerses(options);
    // console.log(options);
    // setDefaultSelected({ value: "vanilla", label: "Vanilla" });
  }, []);

  const [selectedVerse, setSelectedVerse] = useState("");
  const selectedVerseHandler = (e) => {
    setSelectedVerse(e.label);
    // console.log(e);
  };
  // const [textBgWnHDefualts, setTextBgWnHDefaults] = useState()
  const [selectedPresetSize, setSelectedPresetSize] = useState("16:9");
  const presetSizeHandler = (e) => {
    // console.log(e.target.value);
    setSelectedPresetSize(e.target.value);
  };
  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");
  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color);
  };
  const [isTextBgDisabled, setIsTextBgDisabled] = useState(false);
  const textBgHandler = (e) => {
    setIsTextBgDisabled(e);
    // console.log(e);
  };
  const [textBgWidth, setTextBgWidth] = useState("45");
  const textBgWidthHandler = (e) => {
    setTextBgWidth(e.target.value);
  };
  const [textBgHeight, setTextBgHeight] = useState("45");
  const textBgHeightHandler = (e) => {
    // console.log(e);
    setTextBgHeight(e.target.value);
  };
  const [textBgOpacity, setTextBgOpacity] = useState("1");
  const textBgOpacityHandler = (e) => {
    setTextBgOpacity(e.target.value);
    // console.log(e.target.value);
  };
  const [textBgColor, setTextBgColor] = useState("rgba(255, 255, 255, 1)");
  const textBgColorHandler = (e) => {
    const rgba = `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b})`;
    setTextBgColor(rgba);
    // console.log(e);
  };
  const [isTextBgDropShadowDisabled, setIsTextBgDropShadowDisabled] =
    useState(true);
  const textBgDropShadowHandler = (e) => {
    setIsTextBgDropShadowDisabled(e);
    // console.log(e);
  };
  const [textBgDropShadowOffset, setTextBgDropShadowOffset] = useState("3");
  const textBgDropShadowOffsetHandler = (e) => {
    setTextBgDropShadowOffset(e.target.value);
    // console.log(e.target.value);
  };
  const [textBgDropShadowBlur, setTextBgDropShadowBlur] = useState("10");
  const textBgDropShadowBlurHandler = (e) => {
    setTextBgDropShadowBlur(e.target.value);
    // console.log(e.target.value);
  };
  const [textFontSize, setTextFontSize] = useState("2");
  const textFontSizeHandler = (e) => {
    setTextFontSize(e.target.value);
    // console.log(e.target.value);
  };
  const [textFontWeight, setTextFontWeight] = useState("400");
  const textFontWeightHandler = (e) => {
    setTextFontWeight(e.target.value);
    // console.log(e.target.value);
  };
  const [textColor, setTextColor] = useState("#000");
  const textColorHandler = (e) => {
    setTextColor(e.hex);
    // console.log(e.hex);
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
            tippyContent={
              <ColorPicker
                onColorChange={qouteBGColorHandler}
                color={selectedQouteBGcolor}
              />
            }
            tippyPlacement="bottom"
            tippyTrigger="click"
            backgroundColor={selectedQouteBGcolor}
            // style={{ fill: selectedQouteBGcolor }}
          />

          <Button
            type="icon-only"
            icon={<SettingsIcon />}
            tippyContent={
              <Settings
                onChangePresetSize={presetSizeHandler}
                onChangeTextBg={textBgHandler}
                onChangeTextBgWidth={textBgWidthHandler}
                widthValue={textBgWidth}
                heightValue={textBgHeight}
                onChangeTextBgHeight={textBgHeightHandler}
                onChangeTextBgColor={textBgColorHandler}
                textBgColor={textBgColor}
                onChangeTextBgOpacity={textBgOpacityHandler}
                opacityValue={textBgOpacity}
                onChangeDropShadow={textBgDropShadowHandler}
                onChangeDropShadowOffset={textBgDropShadowOffsetHandler}
                offsetYValue={textBgDropShadowOffset}
                onChangeDropShadowBlur={textBgDropShadowBlurHandler}
                blurValue={textBgDropShadowBlur}
                onChangeFontSize={textFontSizeHandler}
                fontSizeValue={textFontSize}
                onChangeFontWeight={textFontWeightHandler}
                fontWeightValue={textFontWeight}
                onChangeTextColor={textColorHandler}
                textColorValue={textColor}
              />
            }
            tippyPlacement="bottom"
            tippyTrigger="click"
          />
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
        <QuoteBackground
          aspectRatio={selectedPresetSize}
          backgroundColor={selectedQouteBGcolor}
        >
          <QuoteArea
            quote={selectedVerse}
            width={textBgWidth}
            height={textBgHeight}
            backgroundColor={textBgColor}
            opacity={textBgOpacity}
            backgroundIsDisabled={isTextBgDisabled}
            dropShadow={
              !isTextBgDropShadowDisabled
                ? `drop-Shadow(3px ${textBgDropShadowOffset}px ${textBgDropShadowBlur}px rgba(0, 0, 0, 0.45))`
                : "none"
            }
            fontSize={textFontSize}
            textColor={textColor}
            fontWeight={textFontWeight}
          />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
