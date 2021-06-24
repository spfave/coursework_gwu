// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const name = 'Sebastian';
  return (
    <div>
      <h1>Hello, My name is {name}</h1>
      <h3>My Interests</h3>
      <ul>
        <li>Hiking</li>
        <li>Anime</li>
        <li>Technology</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
