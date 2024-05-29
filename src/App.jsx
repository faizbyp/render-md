import DOMPurify from "dompurify";
import { marked } from "marked";

function App() {
  const str = DOMPurify.sanitize(marked.parse('# Test\n`test code`'));
  const md = { __html: str };

  return (
    <>
      <h1>Render.md</h1>
      <div dangerouslySetInnerHTML={md} />
    </>
  );
}

export default App;
