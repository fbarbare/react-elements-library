export default {
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'block',
    width: '100%',
    maxWidth: '150px',
    margin: 'auto'
  },
  circleContainer: {
    position: 'relative',
    paddingTop: '100%'
  },
  circle: {
    position: 'absolute',
    top: '0',
    left: '0',
    boxSizing: 'border-box',
    width: 'calc(100% - 20%)',
    height: 'calc(100% - 20%)',
    margin: '10%',
    animation: 'Loader_Rotate 2s infinite ease',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#ea4335 #eee #eee',
    borderRadius: '50%'
  },
  text: {
    fontFamily: 'inherit',
    position: 'absolute',
    top: '50%',
    right: '0',
    left: '0',
    display: 'block',
    padding: '0 20px',
    transform: 'translateY(-50%)',
    textAlign: 'center'
  }
};
