import { Checkbox } from "@fluentui/react";
import { checkboxStyle } from "./style";

const Header = () => {
  return (
    <div>
      <Checkbox label="Unchecked checkbox (uncontrolled)" styles={checkboxStyle} />
      <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked styles={checkboxStyle} />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
    </div>
  );
};

export default Header;
