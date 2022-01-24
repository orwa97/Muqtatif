import classes from "./ShareDropDown.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import Tippy from "@tippyjs/react";
const ShareDropDown = (props) => {
  return (
    <Tippy
      content={
        <div className={classes.container}>
          <FacebookShareButton className={classes.btn} url={props.url}>
            <FacebookIcon
              round={true}
              size={25}
              bgStyle={{ fill: "transparent" }}
              className={classes.icon}
            />
          </FacebookShareButton>
          <TwitterShareButton className={classes.btn}>
            <TwitterIcon
              round={true}
              size={25}
              bgStyle={{ fill: "transparent" }}
              className={classes.icon}
            />
          </TwitterShareButton>
          <WhatsappShareButton className={classes.btn}>
            <WhatsappIcon
              round={true}
              size={25}
              bgStyle={{ fill: "transparent" }}
              className={classes.icon}
            />
          </WhatsappShareButton>
          <TelegramShareButton className={classes.btn}>
            <TelegramIcon
              round={true}
              size={25}
              bgStyle={{ fill: "transparent" }}
              className={classes.icon}
            />
          </TelegramShareButton>
        </div>
      }
      placement="bottom"
      interactive="true"
      delay={0}
      duration={100}
    >
      <div className={classes.arrowDown}>
        <ArrowDown />
      </div>
    </Tippy>
  );
};

export default ShareDropDown;
