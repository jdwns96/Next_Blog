import { Toggle, TooltipHost, Icon } from "@fluentui/react";

const Mode = () => {
  return (
    <div>
      <Toggle
        label={
          <div>
            <TooltipHost content="Info tooltip">
              <Icon iconName="Info" />
            </TooltipHost>
          </div>
        }
        inlineLabel
        onText="dark"
        offText="light"
      />
    </div>
  );
};

export default Mode;
