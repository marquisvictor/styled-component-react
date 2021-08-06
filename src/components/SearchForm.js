import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef('');

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        searchValue.current.focus();
    }, []);
    return (
        <section className='section search'>
            <form action='' className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Search your favourite cocktail</label>
                    <input
                        type='text'
                        id='name'
                        onChange={searchCocktail}
                        ref={searchValue}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
