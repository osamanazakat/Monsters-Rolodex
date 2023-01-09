import "./card-list.styles.css";
import Card from "../card/card";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return <Card name={name} id={id} email={email} />;
    })}
  </div>
);

export default CardList;
