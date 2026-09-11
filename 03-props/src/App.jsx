import Card from "./components/Card";

const App = () => {
  return (
    <div className="Parent">
      
      <Card user = "Ibn e Ameen" age={24} bio="I am a student of Computer Science. I am also interested in App development."/>
      <Card user = "John Doe" age={30} bio="I am a software engineer."/>
      <Card user = "Jane Smith" age={25} bio="I am a graphic designer."/>
    </div>
  );
};

export default App;
