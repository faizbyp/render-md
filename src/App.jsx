import DOMPurify from "dompurify";
import { marked } from "marked";

function App() {
  const current = '# Test\n`test code`';

  const str = DOMPurify.sanitize(marked.parse(current));
  const md = { __html: str };

  return (
    <main className="container-fluid" style={{height: '100svh'}}>
      <section className="row text-center">
        <h1>Render.md</h1>
      </section>
      <div className="row">
        <section className="col-12 col-lg-6">
          <textarea name="markdown" className="form-control" id="text" cols="30" rows="10">
            {current}
          </textarea>
        </section>
        <section className="col-12 col-lg-6">
          <div dangerouslySetInnerHTML={md} />
        </section>
      </div>
    </main>
  );
}

export default App;
