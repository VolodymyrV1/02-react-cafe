import { useState } from "react";

import type { Votes, VoteType } from "../../types/votes"

import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";







// Додай у App функції для роботи зі станом:

// handleVote(type) – для оновлення стану голосів. Використовуй тип VoteType для типізації її параметра.
// resetVotes() – для скидання стану.


// Таким чином, votes буде центральним джерелом даних про голосування, а всі відповідні компоненти зможуть отримувати актуальні значення через пропси.


function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  function handleVote(type: VoteType) {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }))

}

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0})

}



  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {}
      {/* <Notification /> */}
    </div>

  )
}

export default App;
