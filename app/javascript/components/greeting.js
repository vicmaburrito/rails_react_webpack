import React from 'react';
import PropTypes from 'prop-types';

function Gretting({ message, language, position }) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{position}</th>
          <td>{message}</td>
          <td>{language}</td>
        </tr>
      </tbody>
    </>
  );
}

Gretting.propTypes = {
  message: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default Gretting;
