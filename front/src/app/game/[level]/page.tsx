// 게임 실행 페이지
// 게임 레벨별로 백엔드에서 받아온 데이터를 이용하여 코딩 진행
const Game = ({ params }: { params: { level: string } }) => {
  return (
    <div>
      <h1>Game level : {params.level}</h1>
    </div>
  );
};
export default Game;
