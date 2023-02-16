import './App.css';
import {useEffect, useState } from 'react';
import SearchBar from './search-bar/search-bar.component';
import CardList from './card-list/card-list.component';

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        setMonsters(users)
      )
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter(m => {
      return m.name.toLowerCase().includes(search.toLowerCase());
    }))
  }, [monsters,search])
  

  const onSearchChange = (event) => {
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

/*
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users })
      )
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }
  render() {

    const { monsters, search } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(m => {
      return m.name.toLowerCase().includes(search.toLowerCase());
    })

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
}
*/
export default App;
