// TODO: Add a comment explaining what a react component is
// A react component is small UI component that can be reused through a react app  to keep code DRY
function HelloReact() {
  const text = 'all the texts';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is HTML and JS code in a react component that is parsed to create
  // curly braces signify variables to be replace with their content
  return (
    <div>
      <p>
        Hello World! Here is some {text} and {text} again
      </p>
    </div>
  );
}

export default HelloReact;
