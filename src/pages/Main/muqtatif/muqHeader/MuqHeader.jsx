import Tippy from "@tippyjs/react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { ReactComponent as SettingsIcon } from "../../../../images/SVG/cog.svg";
import { ReactComponent as ColorLens } from "../../../../images/SVG/color_lens.svg";
import { ReactComponent as Copy } from "../../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../../images/SVG/arrow_down.svg";
import Button from "../../../../components/button/Button";
import classes from "./MuqHeader.module.scss";
import Settings from "./settings/Settings";
import Select from "../../../../components/Select/Select";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { copyImageToClipboard } from "copy-image-clipboard";
import { useCallback } from "react";
const MuqHeader = (props) => {
  const getHtmlImage = useCallback(async () => {
    const data = document.getElementById("toBeExported");
    return await htmlToImage.toPng(data).then((dataUrl) => dataUrl);
    // const data = document.getElementById("toBeExported");
    // htmlToImage.toPng(data).then((dataUrl) => {
    //   // download(dataUrl, "my-node.png");
    //   // const img = new Image(dataUrl);
    //   // img.src = dataUrl;
    //   copyImageToClipboard(dataUrl)
    //     .then(() => {
    //       console.log("Image Copied");
    //     })
    //     .catch((e) => {
    //       console.log("Error: ", e.message);
    //     });
    // });
  }, []);
  const onExport = useCallback(() => {
    getHtmlImage().then((img) => {
      download(img, "my-node.png");
    });
  }, []);
  const onCopy = useCallback(() => {
    getHtmlImage().then((img) => {
      copyImageToClipboard(img)
        .then(() => {
          console.log("Image Copied");
        })
        .catch((e) => {
          console.log("Error: ", e.message);
        });
    });
  }, []);
  return (
    <div className={classes["muq--header"]}>
      <div className={classes.headerPart}>
        <Select
          prefix="logo"
          options={props.verses}
          onSelect={props.onSelectVerse}
          defaultValue={props.value}
        />
        <Tippy
          content={
            <SketchPicker
              onChange={props.onChangeQouteBgColor}
              color={props.qouteBgColorValue}
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
            backgroundColor={props.qouteBgColorValue}
          />
        </Tippy>
        <Tippy
          content={
            <Settings
              onChangePresetSize={props.onChangePresetSize}
              onChangeTextBg={props.onChangeTextBg}
              onChangeTextBgWidth={props.onChangeTextBgWidth}
              widthValue={props.widthValue}
              heightValue={props.heightValue}
              onChangeTextBgHeight={props.onChangeTextBgHeight}
              onChangeTextBgColor={props.onChangeTextBgColor}
              textBgColor={props.textBgColor}
              onChangeTextBgOpacity={props.onChangeTextBgOpacity}
              opacityValue={props.opacityValue}
              onChangeDropShadow={props.onChangeDropShadow}
              onChangeDropShadowOffset={props.onChangeDropShadowOffset}
              offsetYValue={props.offsetYValue}
              onChangeDropShadowBlur={props.onChangeDropShadowBlur}
              blurValue={props.blurValue}
              onChangeFontSize={props.onChangeFontSize}
              fontSizeValue={props.fontSizeValue}
              onChangeFontWeight={props.onChangeFontWeight}
              fontWeightValue={props.fontWeightValue}
              onChangeTextColor={props.onChangeTextColor}
              textColorValue={props.textBgColor}
              onChangeFontFamily={props.onChangeFontFamily}
              fontFamilyValue={props.fontFamilyValue}
              onChangeTextAlign={props.onChangeTextAlign}
              textAlignValue={props.textAlignValue}
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
        <Button type="icon-only" icon={<Copy />} onClick={onCopy} />
        <Button type="text-only" postfix={<ArrowDown />}>
          Share
        </Button>
        <Button type="text-only" postfix={<ArrowDown />} onClick={onExport}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default MuqHeader;
