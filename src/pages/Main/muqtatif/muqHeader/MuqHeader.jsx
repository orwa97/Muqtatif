import Tippy from "@tippyjs/react";
import { useMemo, useState } from "react";
import { SketchPicker } from "react-color";
import { ReactComponent as SettingsIcon } from "../../../../images/SVG/cog.svg";
import { ReactComponent as Brush } from "../../../../images/SVG/brush.svg";
import { ReactComponent as Copy } from "../../../../images/SVG/copy.svg";
import { ReactComponent as ArrowDown } from "../../../../images/SVG/arrow_down.svg";
import { ReactComponent as Themes } from "../../../../images/SVG/themes.svg";
import Button from "../../../../components/button/Button";
import classes from "./MuqHeader.module.scss";
import Settings from "./settings/Settings";
import Select from "../../../../components/Select/Select";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { copyImageToClipboard } from "copy-image-clipboard";
import { useCallback } from "react";
import { useAtom } from "jotai";
import { muqBGcolorAtom } from "../MuqtatifAtoms";
const MuqHeader = (props) => {
  const [selectedMuqBGcolor, setSelectedMuqBGcolor] = useAtom(muqBGcolorAtom);

  const vk = useMemo(() => {
    const arr = props.verseKey.split(":");
    const cl = arr[0].length;
    const vl = arr[1].length;
    const l = cl > vl ? cl : vl;
    const maxL = l === 1 ? l + 1 : l;
    return arr.map((ele) => {
      while (ele.length < maxL) ele = "0" + ele;
      return ele;
    });
  }, [props.verseKey]);
  const getHtmlImage = useCallback(async () => {
    const data = document.getElementById("toBeExported");
    return await htmlToImage.toPng(data).then((dataUrl) => dataUrl);
  }, []);

  const onExport = useCallback(() => {
    getHtmlImage().then((img) => {
      download(img, `Muq-${vk[0]}-${vk[1]}`);
    });
  }, [vk]);

  const onCopy = useCallback(() => {
    getHtmlImage().then((img) => {
      copyImageToClipboard(img);
    });
  }, []);
  const muqBGColorHandler = (color) => {
    setSelectedMuqBGcolor(color.hex);
  };
  return (
    <div className={classes["muq--header"]}>
      <div className={classes.headerPart}>
        <Select
          prefix="logo"
          options={props.verses}
          onSelect={props.onSelectVerse}
          defaultValue
        />
        <Tippy
          content={
            <SketchPicker
              onChange={muqBGColorHandler}
              color={selectedMuqBGcolor}
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
            icon={<Brush style={{ fill: `${selectedMuqBGcolor}` }} />}
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
        <Button type="icon-only" icon={<Themes />} onClick />
      </div>
      <div className={classes.headerPart}>
        <Button type="icon-only" icon={<Copy />} onClick={onCopy} />
        <Button type="text-only" postfix={<ArrowDown />} onClick={onExport}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default MuqHeader;
