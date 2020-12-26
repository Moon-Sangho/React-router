import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  // 기존의 방문 기록을 남기지 않음
  const replaceToHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    // 사용자가 페이지 이탈 시도할 시 다시 한 번 확인하기 위한 기능
    const unblock = history.block("Would you leave this page?");
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
}

export default HistorySample;
