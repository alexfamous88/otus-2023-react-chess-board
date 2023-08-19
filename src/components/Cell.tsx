import classNames from "classnames";
type CellProps = {
  index: number;
  knight: boolean;
  valid: boolean;
  onClick: () => void;
};

export default function Cell(props: CellProps) {
  const row = props.index >> 3;
  const col = props.index % 8;
  const dark = (col + (row % 2)) % 2 === 0;
  const disabled = !props.valid;
  const clickHandler = () => {
    props.valid && props.onClick();
  };
  return (
    <span
      className={classNames("cell", { dark, knight: props.knight, disabled })}
      onClick={clickHandler}
    >
      {props.knight ? <span>♘</span> : null}
    </span>
  );
}
