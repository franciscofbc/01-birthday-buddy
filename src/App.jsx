import { useState } from 'react';
import data from './data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <section className="container">
      <h1 className="title">{people.length} birthdays today</h1>
      <List people={people} />
      <button className="btn btn-block" onClick={() => setPeople([])}>
        clear all
      </button>
    </section>
  );
};
export default App;
