import cn from "classnames";

import css from "./style.module.scss";

interface IProps {
  title: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: IProps) => {
  const { value, onChange, title } = props;

  return (
    <div className={css.container}>
      <input
        checked={value}
        onChange={onChange}
        type="checkbox"
        id="agreement"
      />
      <label className={cn(!value ? css.checkbox : css.checkboxActive)}>
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
