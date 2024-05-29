import DOMPurify from "dompurify";
import { marked } from "marked";
import { initial } from "./initial";

function App() {
  const str = DOMPurify.sanitize(marked.parse(initial));
  const md = { __html: str };

  return (
    <main className="container" style={{height: '100svh'}}>
      <section className="row text-center py-2">
        <h1>Render.md</h1>
      </section>
      <div className="row">
        <section className="col-12 col-lg-6">
          <textarea name="markdown" className="form-control" id="editor" rows="20">
            {initial}
          </textarea>
        </section>
        <section className="col-12 col-lg-6 overflow-x-hidden">
          <div id="preview" dangerouslySetInnerHTML={md} />
        </section>
      </div>
    </main>
  );
}

export default App;
