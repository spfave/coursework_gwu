// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  background: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: '100px',
  },
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element
  return (
    <header className='header' style={styles.background}>
      <h1 style={styles.text}>Welcome</h1>
    </header>
  );
}

export default Header;
