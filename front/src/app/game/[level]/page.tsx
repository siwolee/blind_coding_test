interface GameDataProps {
    title: string;
    content: string;
    language: string;
}

// 게임 실행 페이지
// 게임 레벨별로 백엔드에서 받아온 데이터를 이용하여 코딩 진행
const Game = ({ params }: { params: { level: string } }) => {
  const gameData: GameDataProps = {
      title: "write from 0 to 9",
      language: c,
      content: 'allowed functions: write'
  } 
  return (
    <div class={"game-container"}>
      <h1>Game level : {params.level}</h1>
      <h2>Title : {gameData.title}<h2>
      <
    </div>
  );
};
export default Game;
