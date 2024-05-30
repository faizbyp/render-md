import DOMPurify from "dompurify";
import { marked } from "marked";
import { initial } from "./initial";
import { useState } from "react";

function App() {
  const [text, setText] = useState(initial);

  const str = DOMPurify.sanitize(marked.parse(text));
  const md = { __html: str };

  return (
    <main className="container" style={{height: '100svh'}}>
      <section className="row text-center py-2">
        <h1>Render.md</h1>
      </section>
      <div className="row">
        <section className="col-12 col-lg-6">
          <textarea value={text} className="form-control" id="editor" rows="20" onChange={e => setText(e.target.value)} />
        </section>
        <section className="col-12 col-lg-6 overflow-x-hidden">
          <div id="preview" dangerouslySetInnerHTML={md} />
        </section>
      </div>
    </main>
  );
}

export default App;
