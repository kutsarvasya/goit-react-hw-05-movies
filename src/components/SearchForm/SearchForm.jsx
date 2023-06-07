import { useState } from 'react';

function SearchForm({ resultBySearch }) {
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearch(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!search) return;
    resultBySearch(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search?.query ? search.query : ''}
        onChange={handleChange}
      />
      <button>search</button>
    </form>
  );
}
export default SearchForm;
