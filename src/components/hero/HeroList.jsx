import { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => {
        return getHeroByPublisher(publisher)
    }, [publisher]);

    return (
        <div
            className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center
        animate__animated animate__fadeIn
        ">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    >
                    </HeroCard>
                ))
            }
        </div>
    )
}

export default HeroList