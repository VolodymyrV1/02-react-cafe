import { useState } from "react";

import type { Votes } from "../../types/votes"

import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";


type VoteType = 'good' | 'neutral' | 'bad';


const votes: Votes = {
	good: 0,
	neutral: 0,
	bad: 0
}



// Додай у App функції для роботи зі станом:

// handleVote(type) – для оновлення стану голосів. Використовуй тип VoteType для типізації її параметра.
// resetVotes() – для скидання стану.


// Таким чином, votes буде центральним джерелом даних про голосування, а всі відповідні компоненти зможуть отримувати актуальні значення через пропси.



function App() {

  const [vote, setVote] = useState<Votes>(votes);


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions/>
    </div>

  )
}

export default App;
