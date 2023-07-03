const Person = (person) => {
  return (
    <article className="person">
      <img className="img avatar" src={person.image} alt={person.name} />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  );
};
export default Person;
