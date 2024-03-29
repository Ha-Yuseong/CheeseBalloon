import RankingLayout from "src/app/ranking/layout";
import Ranking from "src/containers/ranking/rankingIndex";

// ranking 페이지의 페이지 컴포넌트 정의
export default function RankingPage() {
  return (
    <RankingLayout>
      <h2>Ranking Page</h2>
      <div className="ranking-page">
        <Ranking />
      </div>
    </RankingLayout>
  );
}
