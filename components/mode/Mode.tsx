import React from "react";
import { mode, right } from "./style";
import { Toggle, TooltipHost, Icon } from "@fluentui/react";

import { useDispatch } from "react-redux";
import { toggleActionSaga } from "@store/mode";

const Mode = () => {
  const dispatch = useDispatch();

  const onToggle = (ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {
    dispatch(toggleActionSaga(checked as boolean));
  };

  return (
    <div css={right}>
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
