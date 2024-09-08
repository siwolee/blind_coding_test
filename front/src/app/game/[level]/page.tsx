const Game = ({ params }: { params: { level: string } }) => {
  return (
    <div>
      <h1>Game level : {params.level}</h1>
    </div>
  );
};
export default Game;
