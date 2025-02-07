import React from 'react';

interface ToolbarProps {
  title: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  title,
  leftButtonLabel,
  rightButtonLabel
}) => {
  return (
    <div style={styles.toolbarContainer}>
      <div style={styles.title}>{title}</div>
    </div>
  );
};

const styles = {
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  leftSection: {
    flex: 1,
  },
  title: {
    flex: 2,
    textAlign: 'center' as 'center', // explicitly define type here
    fontSize: '18px',
    fontWeight: 'bold',
  },
  rightSection: {
    flex: 1,
    textAlign: 'right' as 'right', // explicitly define type here
  },
  button: {
    padding: '8px 16px',
    margin: '0 5px',
    backgroundColor: '#555',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Toolbar;
