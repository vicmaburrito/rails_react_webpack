import React from 'react';

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

export default Gretting;
