import React from "react";

const ContentAlarm = () => {
  return (
    <div className="mt-2">
      <div className="card m-3">
        <div className="card-header fw-bold">TABLE DATA</div>
        <div className="card-body">
          <table className="table">
            <thead className="thead bg-info">
              <tr>
                <th scope="col">NO</th>
                <th scope="col">Alarm Time</th>
                <th scope="col">Normal Time</th>
                <th scope="col">Date</th>
                <th scope="col">Alarm Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>21.02.04</td>
                <td>21.02.04</td>
                <td>23/06/2023</td>
                <td>Emergency Stop</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>21.02.04</td>
                <td>21.02.04</td>
                <td>23/06/2023</td>
                <td>Emergency Stop</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>21.02.04</td>
                <td>21.02.04</td>
                <td>23/06/2023</td>
                <td>Emergency Stop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentAlarm;
