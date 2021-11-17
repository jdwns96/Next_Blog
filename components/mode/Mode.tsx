import React from "react";
import { mode } from "./style";
import { Toggle, TooltipHost, Icon } from "@fluentui/react";

import { useDispatch } from "react-redux";
import { darkAction, lightAction } from "@store/mode";

const Mode = () => {
  const dispatch = useDispatch();

  const onToggle = (ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {
    checked ? dispatch(darkAction()) : dispatch(lightAction());
  };

  return (
    <div>
      <Toggle
        label={
          <div>
            <span>MODE</span>
            <TooltipHost content="Info tooltip">
              <Icon iconName="Info" />
            </TooltipHost>
          </div>
        }
        inlineLabel
        defaultChecked
        onText="dark"
        offText="light"
        onChange={onToggle}
        css={mode}
      />
    </div>
  );
};

export default Mode;
