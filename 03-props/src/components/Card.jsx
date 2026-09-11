const Card = (props) => {
  return (
    <div className="card">
      {/* <h1>Name: {props.user}</h1>
        <p>bio: {props.bio}</p>
        <p>Age: {props.age}</p>
      </div> */}
      <img
        src="https://images.unsplash.com/photo-1742745181459-815e9815ac05?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
      ></img>
      <h1>{props.user}</h1>
      <p>
        I am a student of Computer Science. I am also interested in App
        development.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
