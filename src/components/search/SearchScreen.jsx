import React, { Fragment, useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyInfo } from '../../selectors/toastInfo';
import HeroCard from '../hero/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';

const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [values, handleInputChange, reset]
        = useForm({
            searchText: q,
        });
    const { searchText } = values;

    const heroesFilted = useMemo(() => {
        return getHeroesByName(q);
    }, [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() <= 1) {
            notifyInfo();
        };
        navigate(`?q=${searchText}`)
        // reset();
    }
    return (
        <Fragment>
            <h1 className="text-center">Buscar héroes</h1>
            <hr />
            <div className="d-flex flex-column">
                <div className="">
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder="Buscar héroe..."
                            name="searchText"
                            className="form-control"
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2 btn-block"
                            type="submit"
                        >
                            BUSCAR
                        </button>
                        <ToastContainer
                            transition={Zoom}
                        />
                    </form>
                </div>
                <div className="mt-3 text-center">
                    <h4>Resultados</h4>
                    <hr />
                </div>
                <div className="d-flex flex-column flex-md-row flex-md-wrap justify-content-around">
                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar heroe</div>
                            : (heroesFilted.length === 0)
                            && <div className="alert alert-info">No hay resultados con: {q}</div>
                    }

                    {
                        heroesFilted.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default SearchScreen