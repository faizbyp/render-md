import DOMPurify from "dompurify";
import { marked } from "marked";
import { initial } from "./initial";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { Analytics } from "@vercel/analytics/react"

function App() {
  marked.setOptions({
    breaks: true
  })

  const [text, setText] = useState(initial);
  const [isCopied, setIsCopied] = useState(false);
  const str = DOMPurify.sanitize(marked.parse(text));
  const md = { __html: str };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  return (
    <>
    <main className="container" style={{height: '100svh'}}>
      <section className="row text-center py-2">
        <h1 className="text-body-secondary">Render.md</h1>
      </section>
      <div className="row">
        <section className="col-12 col-lg-6">
          <p className="text-body-tertiary">{`// Input`}</p>
          <textarea value={text} className="form-control mb-3" id="editor" rows="15" onChange={e => setText(e.target.value)} />
        </section>
        <section className="col-12 col-lg-6 overflow-x-hidden">
          <div className="row">
            <div className="col">
              <p className="text-body-tertiary">{`// Output`}</p>
            </div>
            <div className="col text-end">
              <Popover isOpen={isCopied} positions={["top", "left"]} onClickOutside={() => setIsCopied(false)} content={<p className="text-warning">Copied!</p>}>
                <button className="btn btn-secondary me-2" onClick={handleCopy}>Copy</button>
              </Popover>
            </div>
          </div>
          <div id="preview" dangerouslySetInnerHTML={md} />
        </section>
      </div>
    </main>
    <Analytics />
    </>
  );
}

export default App;
