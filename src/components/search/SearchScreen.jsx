import React, { Fragment } from 'react'
import { useForm } from '../../hooks/useForm';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../selectors/toastInfo';
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

    const heroesFilted = getHeroesByName(q);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() <= 1) {
            notify();
        };
        navigate(`?q=${searchText}`)
        // reset();
    }
    return (
        <Fragment>
            <h1>Buscar héroes</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4 className="">Buscar</h4>
                    <hr />
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
                            Buscar
                        </button>
                        <ToastContainer
                            transition={Zoom}
                        />
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
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