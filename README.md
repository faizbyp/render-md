# Render.md

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
</p>

https://render-md.vercel.app/

A Markdown Previewer made using React JS and Bootstrap. The initial text state was saved inside a JavaScript string and then imported into the `App` component to be edited. When the user edits the `textarea`, the previewer will automatically be updated using `useState`. Then the plain markdown text will be converted into HTML elements in the preview element. The user can also copy the text with a button click.

![Website Preview (shots.so)](https://github.com/faizbyp/render-md/assets/65883882/1b236977-fc5f-4d6d-b255-9aebc4fb288d)

## User Stories

User Story #1: I can see a `textarea` element with a corresponding `id="editor"`.

User Story #2: I can see an element with a corresponding `id="preview"`.

User Story #3: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the `textarea`.

User Story #4: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.

## All Tests Passed

Visit the [test deployment](https://jocular-stroopwafel-c3e932.netlify.app/)

![Screenshot of the tests](https://github.com/faizbyp/render-md/assets/65883882/a40e3cbe-6622-4b36-a108-c1a4d7f572ab)

![All tests passed](https://github.com/faizbyp/render-md/assets/65883882/8728384e-cd7c-4c32-8552-ab0b82db1902)
