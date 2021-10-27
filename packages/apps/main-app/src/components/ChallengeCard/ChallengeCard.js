import * as React from 'react';
import * as styles from './ChallengeCard.module.scss';

import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import testImage from '../../images/test.jpeg';

function ChallengeCard() {
    return (
        <article className={styles.componentContainer}>

            <div className={styles.mainContainer}>

                <Link to="/description">
                    <div className={styles.imgContainer + ` mb-4`}>
                        <div className={styles.imgHover}><span>Read More</span></div>
                        <img src={testImage}></img>
                    </div>
                </Link>

                <div className={styles.descriptionContainer}>

                    <div className={styles.copyWrapper}>
                        <div className={styles.techLists}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                        <h3>Card Title</h3>
                        <FontAwesomeIcon icon="fas fa-ad" />
                    </div>

                    <div className={styles.liveLinkWrapper}>
                        <a href="https://droopy-attempts-fem-challenge.netlify.app/vanilla-apps/newbie-challenge01-stack01/">View Live Site  <FontAwesomeIcon icon={faArrowRight}/></a>
                    </div>
                    
                </div>
            </div>

            <div className={styles.shadow}></div>


        </article>
    )
}

export default ChallengeCard;