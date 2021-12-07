import * as React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import ChallengeCard from "../components/ChallengeCard/ChallengeCard.js";

import '../styles/main.scss';
import * as styles from  "../styles/pages/HomePage.module.scss"

const challengesLists = [
  {
      title: 'Order Summary Component',
      techStack: ['HTML', 'CSS', 'React'],
  },
  {
      title: 'Stats Preview Card Component',
      techStack: ['HTML', 'CSS', 'JS']
  },
  {
      title: 'Typemaster Pre-launch landing page',
      techStack: ['HTML', 'CSS', 'JS']
  },
  {
      title: 'Huddle landing page with a single introductory section',
      techStack: ['HTML', 'CSS', 'JS']
  },
]

const IndexPage = () => {
  return (
    <>
    <div className={styles.pageWrapper}>
      <Navbar/>
      <main className={styles.mainWrapper}>
          <h1>
            {/* <span>DroopyDev's</span> */}
            Frontend Mentor Challenge Solutions
          </h1>

          <div className={styles.gridContainer}>
            {
              challengesLists.map( item => {
              return <ChallengeCard challenge={item}/>
            })
            }
          </div>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default IndexPage
