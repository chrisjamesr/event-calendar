import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/modal.css'

const LoginModal = ({ handleClose, show, message }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (

    <div className={showHideClassName}
         onClick={handleClose}>
      <section className="modal-main">
        {message}
      </section>
    </div>
  );
};

LoginModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  message: PropTypes.string
}

export default LoginModal