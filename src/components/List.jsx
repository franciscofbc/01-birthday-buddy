import Person from './Person';

const List = ({ people }) => {
  return (
    <section className="people">
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </section>
  );
};
export default List;
