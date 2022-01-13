import classes from "./Muqtatif.module.scss";
import QuoteArea from "./quoteArea/QuoteArea";
import QuoteBackground from "./quoteBackground/QuoteBackground";
import { useEffect, useState } from "react";
import MuqHeader from "./muqHeader/MuqHeader";

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
  const [selectedPresetSize, setSelectedPresetSize] = useState("16:9");
  const presetSizeHandler = (e) => {
    setSelectedPresetSize(e.target.value);
  };
  const [selectedQouteBGcolor, setSelectedQouteBGcolor] = useState("#393939");
  const qouteBGColorHandler = (color) => {
    setSelectedQouteBGcolor(color.hex);
  };
  const [isTextBgDisabled, setIsTextBgDisabled] = useState(false);
  const textBgHandler = (e) => {
    setIsTextBgDisabled(e);
  };
  const [textBgWidth, setTextBgWidth] = useState("45");
  const textBgWidthHandler = (e) => {
    setTextBgWidth(e.target.value);
  };
  const [textBgHeight, setTextBgHeight] = useState("45");
  const textBgHeightHandler = (e) => {
    setTextBgHeight(e.target.value);
  };
  const [textBgOpacity, setTextBgOpacity] = useState("1");
  const textBgOpacityHandler = (e) => {
    setTextBgOpacity(e.target.value);
  };
  const [textBgColor, setTextBgColor] = useState({
    r: 255,
    g: 255,
    b: 255,
  });
  const textBgColorHandler = (e) => {
    setTextBgColor(e.rgb);
    console.log(e.rgb);
  };
  const [isTextBgDropShadowDisabled, setIsTextBgDropShadowDisabled] =
    useState(true);
  const textBgDropShadowHandler = (e) => {
    setIsTextBgDropShadowDisabled(e);
  };
  const [textBgDropShadowOffset, setTextBgDropShadowOffset] = useState("3");
  const textBgDropShadowOffsetHandler = (e) => {
    setTextBgDropShadowOffset(e.target.value);
  };
  const [textBgDropShadowBlur, setTextBgDropShadowBlur] = useState("10");
  const textBgDropShadowBlurHandler = (e) => {
    setTextBgDropShadowBlur(e.target.value);
  };
  const [textFontSize, setTextFontSize] = useState("2");
  const textFontSizeHandler = (e) => {
    setTextFontSize(e.target.value);
  };
  const [textFontWeight, setTextFontWeight] = useState("400");
  const textFontWeightHandler = (e) => {
    setTextFontWeight(e.target.value);
  };
  const [textColor, setTextColor] = useState("#393939");
  const textColorHandler = (e) => {
    setTextColor(e.hex);
  };
  const [fontFamily, setFontFamily] = useState("Al-Qalam");
  const fontFamilyHandler = (e) => {
    setFontFamily(e);
  };
  const [textAlign, setTextAlign] = useState("right");

  const textAlignHandler = (e) => {};

  return (
    <div className={classes.muqtatifContainer}>
      <MuqHeader
        onSelectVerse={selectedVerseHandler}
        verses={verses}
        onChangeQouteBgColor={qouteBGColorHandler}
        qouteBgColorValue={selectedQouteBGcolor}
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
        onChangeFontFamily={fontFamilyHandler}
        fontFamilyValue={fontFamily}
        onChangeTextAlign={textAlignHandler}
        textAlignValue={textAlign}
      />
      {/* <div className={classes["muq--header"]}>
        <div className={classes.headerPart}>
          <Select
            prefix="logo"
            options={verses}
            onSelect={selectedVerseHandler}
          />
          <Tippy
            content={
              <SketchPicker
                onChange={qouteBGColorHandler}
                color={selectedQouteBGcolor}
                disableAlpha={true}
              />
            }
            placement="bottom"
            trigger="click"
            interactive="true"
            delay={0}
            duration={100}
          >
            <Button
              type="icon-only"
              icon={<ColorLens />}
              backgroundColor={selectedQouteBGcolor}
            />
          </Tippy>
          <Tippy
            content={
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
                onChangeFontFamily={fontFamilyHandler}
                fontFamilyValue={fontFamily}
                onChangeTextAlign={textAlignHandler}
                textAlignValue={textAlign}
              />
            }
            placement="bottom"
            trigger="click"
            interactive="true"
            delay={0}
            duration={100}
          >
            <Button type="icon-only" icon={<SettingsIcon />} />
          </Tippy>
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
      </div> */}
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
            fontFamily={fontFamily}
          />
        </QuoteBackground>
      </div>
    </div>
  );
};

export default Muqtatif;
