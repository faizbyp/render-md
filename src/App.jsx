import { marked } from "marked";

function App() {
  const str = marked.parse('# Test')

  return (
    <>
      <h1>Render.md</h1>
      <div>
        {str}
      </div>
    </>
  );
}

export default App;
