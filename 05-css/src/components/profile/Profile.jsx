import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h3 className={styles.title}>Profile</h3>
      <p className={styles.description}>
        MY Name is Ibne Amin I am a CS Student and my goal to become a
        App developer.
      </p>
      <button className={styles.btn}>view profile</button>
    </div>
  );
};

export default Profile;
