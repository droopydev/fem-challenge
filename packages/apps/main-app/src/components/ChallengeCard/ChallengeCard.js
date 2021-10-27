import * as React from 'react';
import * as styles from './ChallengeCard.module.scss';

import {Link} from 'gatsby';
import testImage from '../../images/test.jpeg';

function ChallengeCard() {
    return (
        <article className={styles.componentContainer}>

            <div className={styles.mainContainer}>
                <div className={styles.imgContainer + ` mb-4`}>
                    <img src={testImage}></img>
                </div>

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
                    </div>

                    <div className={styles.liveLinkWrapper}>
                        <Link>View Live Site</Link>
                    </div>
                    
                </div>
            </div>


        </article>
    )
}

export default ChallengeCard;