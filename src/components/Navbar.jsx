const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          alt="Cartlogo"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 50,
    marginRight: 20,
    marginTop: 5,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cartIconContainer: {
    positon: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    position: "absolute",
    padding: "3px 8px",
    top: 5,
    right: 5,
  },
};

export default Navbar;
