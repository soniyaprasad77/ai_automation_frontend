import React from "react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  width: '400px',
  maxWidth: '90%',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const closeButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#4F46E5',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
