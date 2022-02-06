import Tippy from "@tippyjs/react";
import { useMemo } from "react";
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
import ThemesDropDown from "./themesDropDown/ThemesDropDown";
import { muqBgColorAtom } from "../MuqtatifAtoms";
const MuqHeader = (props) => {
  const [selectedMuqBGcolor, setSelectedMuqBGcolor] = useAtom(muqBgColorAtom);

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
  const muqBGColorHandler = useCallback((color) => {
    setSelectedMuqBGcolor(color.hex);
  }, []);
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
          />
        </Tippy>
        <Tippy
          content={<Settings />}
          placement="bottom"
          trigger="click"
          interactive="true"
          delay={0}
          duration={100}
        >
          <Button type="icon-only" icon={<SettingsIcon />} />
        </Tippy>

        <Tippy
          content={<ThemesDropDown />}
          placement="bottom"
          trigger="click"
          interactive="true"
          delay={0}
          duration={100}
        >
          <Button type="icon-only" icon={<Themes />} />
        </Tippy>
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
