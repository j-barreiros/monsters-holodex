import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from './search-bar/search-bar.component';
import CardList from './card-list/card-list.component';
import { getData } from './util/data.util';

export type Monster = {
  id:string;
  name: string;
  email: string;
}

const App = () => {

  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [search, setSearch] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter(m => {
      return m.name.toLowerCase().includes(search.toLowerCase());
    }))
  }, [monsters, search])


  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <main>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBar
        classes=""
        searchChangeHandler={onSearchChange}
        placeholder="Search monster by name"
      />
      <CardList monsters={filteredMonsters} />
    </main>
  )
}

export default App;
