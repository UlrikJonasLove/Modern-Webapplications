import React from 'react';

function Info(props) {
    return <table>
      <thead>
      <tr>
        <th>Name of developer: </th>
        <th>Email: </th>
        <th>Phone: </th>
      </tr>
      </thead>
      <tbody>
      {
        props.workerInfo.map(worker =>
          <tr key = {worker.name}>
            <td>{worker.name}</td>
            <td>{worker.email}</td>
            <td>{worker.phone}</td>
          </tr>)
      }
      </tbody>
    </table>
  }

  class Worker extends React.Component {
    render() {
      const workerInfo = 
      [
        {name: "Jonas Rosberg", email: "Jonas.Rosberg@hotmail.com", phone: 12345678},
        {name: "Marcus Rosberg", email: 'Marcus.marcus@hotmail.com', phone: 12125125},
        {name: "Nermin Festa", email: 'Nermin.Nermin@hotmail.com', phone: 12215125},
      ];
  
    return (
      <div>
        <Info workerInfo = {workerInfo}/>
      </div>
    );
    }
  }

    export default Worker;