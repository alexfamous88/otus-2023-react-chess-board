import Cell from "./Cell";
import "./ChessBoard.scss";

type ChessBoardProps = {
  position: number;
  moves: number[];
  onClick: (p: number) => void;
};
export default function ChessBoard(props: ChessBoardProps) {
  const rows = new Array(8).fill(0);
  const cols = new Array(8).fill(0);

  return (
    <div className="board">
      {rows.map((_, rowIndex) => {
        return (
          <div className="row">
            {cols.map((_, colIndex) => {
              const cellIndex = (7 - rowIndex) * 8 + colIndex;
              return (
                <Cell
                  index={cellIndex}
                  knight={cellIndex === props.position}
                  valid={props.moves.includes(cellIndex)}
                  onClick={() => props.onClick(cellIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
