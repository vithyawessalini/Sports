import React from 'react';
import Fhead from '../components/Fhead';
import Fside from '../components/Fside';
 const Teams = [
  { tid: 1, teamName: 'Team A', points: 10 },
  { tid: 2, teamName: 'Team B', points: 15 },

];

function First() {
 
  return (
    <div className="app">
      <Fside />
        <div className="app-main">
       <Fhead />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <div class="container">
        <img src="https://img.freepik.com/free-photo/black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette_285396-1440.jpg?w=900&t=st=1693908221~exp=1693908821~hmac=95f130c3b5d7feeafc6f20e7a2984fb17e62452dda292f2a417383deba785309" alt="alter"class="image" />
        <h1 class="heading"><br></br>United We Play.<br></br> United We Win</h1>
       </div>
          <p id="p">
            Sports Program at SNU is designed to serve student interest in different sports and recreational activities.
            These interests can be competitive, recreational, or instructional in nature; students may represent the University
            in inter-university competition or intra-club (SNUSL) league activities such as tournament play, training,
            instruction, and social interaction (recreational) events.
          </p>
          <p id="p">
            Department of Physical Education desires to extend sporting and recreational events to any
            student/faculty/staff/family residents on campus & support staff (housekeeping, security, maintenance, etc.) at the university
            providing the opportunity to participate individually or in mass with a team in the sports program at SNU.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-4">
          
        </div>
        <div className="col-lg-7">
          <table className="table table-dark" style={{ width: '600px', height: '300px', fontSize: '30px' }}>
            <thead></thead>
            <tbody>
              {Teams.map((row) => (
                <tr key={row.tid}>
                  <th scope="row">{row.tid}</th>
                  <td colSpan="2">{row.teamName}</td>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <h1 className="teams">MEET the teams of SNU: </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="container-fuild flexing" style={{ width: 'auto' }}>
            {/* Add your team logos with links here */}
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <footer className="main-block dark-bg" style={{ background: 'black', padding: '90px' }}>
          <div className="container">
            <div className="row" style={{ flexWrap: 'wrap', display: 'flex' }}>
              <div className="col-lg-12" style={{ alignSelf: 'center' }}>
                <div className="copyright" style={{ textAlign: 'center' }}>
                  <p style={{ color: '#ccc' }}>Copyright © 2020 SNU Sports. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div></div></div>
  );
}

export default First;
