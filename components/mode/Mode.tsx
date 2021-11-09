import { Toggle } from "@fluentui/react/lib/Toggle";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";

import { Icon } from "@fluentui/react/lib/Icon";

const Mode = () => {
  return (
    <Toggle
      label={
        <div>
          Custom inline label{" "}
          <TooltipHost content="Info tooltip">
            <Icon iconName="Info" aria-label="Info tooltip" />
          </TooltipHost>
        </div>
      }
      inlineLabel
      onText="On"
      offText="Off"
    />
  );
};

export default Mode;
