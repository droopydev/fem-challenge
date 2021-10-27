import * as React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import ChallengeCard from "../components/ChallengeCard/ChallengeCard.js";

import '../styles/main.scss';
import * as styles from  "../styles/pages/HomePage.module.scss"

const IndexPage = () => {
  return (
    <>
    <div className={styles.pageWrapper}>
      <Navbar/>
      <main className={styles.mainWrapper}>
          <h1>Frontend Mentor Challenge Solution</h1>
          <div className={styles.gridContainer}>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
          </div>
      </main>
    </div>
    </>
  )
}

export default IndexPage
