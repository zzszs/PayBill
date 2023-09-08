import { InputNumber } from "antd";
import { forwardRef } from "react";
import type { InputNumberProps } from "antd";

const MoneyInput = forwardRef<HTMLInputElement, InputNumberProps>((props, ref ) => {
  return <InputNumber ref={ref} {...props} />;
});

export default MoneyInput;
