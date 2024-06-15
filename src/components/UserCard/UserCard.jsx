import styles from "./UserCard.module.css"

const UserCard = ({ user }) => {
  return (
    <article className={styles.user_card}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email: {user.email}</p>
      <p>UserID: {user.id}</p>
    </article>
  );
};

export default UserCard;
