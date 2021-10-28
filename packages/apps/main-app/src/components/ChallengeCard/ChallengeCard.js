import * as React from 'react';
import * as styles from './ChallengeCard.module.scss';

import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import testImage from '../../images/test.jpeg';

const techColour = {
    'HTML': styles.htmlColour,
    'CSS': styles.cssColour,
    'JS': styles.jsColour,
    'React': styles.reactColour
}

const getColour = (tech) => {
    let classColour;
    for (const [k, v] of Object.entries(techColour)) {
        if (k === tech) {
            classColour = v;            
        };
    }
    return classColour
}

const ChallengeCard = props => {
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
                                {props.challenge.techStack.map( tech => {return <li className={getColour(tech)}>{tech}</li>})}
                            </ul>
                        </div>
                        <h3>{props.challenge.title}</h3>
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