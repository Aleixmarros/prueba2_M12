import React, { Component } from 'react';
import '../App.css';
import barça from "../components/logoC/barça.png"
import "bootstrap/dist/css/bootstrap.min.css";
import madrid from '../components/logoC/real madrid.png';
import atlético from '../components/logoC/atlético de madrid.png';
import sociedad from '../components/logoC/real sociedad.png';
import betis from '../components/logoC/betis.png';
import villareal from '../components/logoC/villareal.png';
import athletic from '../components/logoC/athletic.png';
import rayo from '../components/logoC/rayo.png';
import osasuna from '../components/logoC/osasuna.png';
import celta from '../components/logoC/celta.png';
import mallorca from '../components/logoC/mallorca.png';
import girona from '../components/logoC/girona.png';
import getafe from '../components/logoC/getafe.png';
import sevilla from '../components/logoC/sevilla.png';
import cádiz from '../components/logoC/cádiz.png';
import valladolid from '../components/logoC/valladolid.png';
import español from '../components/logoC/español.png';
import valencia from '../components/logoC/valencia.png';
import almeria from '../components/logoC/almeria.png';
import elche from '../components/logoC/elche.png';
export default class Classification extends Component {
  render() {
    const PT1 = [68], PT2 = [56], PT3 = [51], PT4 = [48], PT5 = [45], PT6 = [41], PT7 = [36], PT8 = [36], PT9 = [34], PT10 = [34], PT11 = [32], PT12 = [31], PT13 = [29], PT14 = [28], PT15 = [28], PT16 = [28], PT17 = [27], PT18 = [26], PT19 = [26], PT20 = [13];
  const PJ1 = [26];
  const PG1 = [22], PG2 = [17], PG3 = [15], PG4 = [14], PG5 = [13], PG6 = [12], PG7 = [10], PG8 = [9], PG12 = [8], PG13 = [7], PG15 = [6], PG20 = [2];
  const PP1 = [2];
  const GF1 = [49];
  const GC1 = [9], GC2 = [24];
    return (
      <div className='classificacion'>
      <div class="row">
          <div class="col-17">
            {/* <marquee scrollamount="20">LaLiga Santander Qualifiers 2022 - 2023</marquee> */}
        </div>
      </div><br></br>
      <div className="table-responsive">
      <table className="table table-sv">
        <thead className="table-active">
          <tr>
            <th>Id</th>
            <th>Equipos</th>
            <th>PT</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>K1LLERS TEAM</td>
        <td>{PT1.map((PT1) => (
          <p key={PT1}>{PT1}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG1.map((PG1) => (
          <p key={PG1}>{PG1}</p>
        ))}</td>
         <td>{PE1.map((PE1) => (
          <p key={PE1}>{PE1}</p>
        ))}</td>
         <td>{PP1.map((PP1) => (
          <p key={PP1}>{PP1}</p>
        ))}</td>
         <td>{GF1.map((GF1) => (
          <p key={GF1}>{GF1}</p>
        ))}</td>
         <td>{GC1.map((GC1) => (
          <p key={GC1}>{GC1}</p>
        ))}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>PEPE´s FC</td>
        <td>{PT2.map((PT2) => (
          <p key={PT2}>{PT2}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG2.map((PG2) => (
          <p key={PG2}>{PG2}</p>
        ))}</td>
         <td>{PE1.map((PE1) => (
          <p key={PE1}>{PE1}</p>
        ))}</td>
         <td>{PP1.map((PP1) => (
          <p key={PP1}>{PP1}</p>
        ))}</td>
         <td>{GF1.map((GF1) => (
          <p key={GF1}>{GF1}</p>
        ))}</td>
         <td>{GC2.map((GC2) => (
          <p key={GC2}>{GC2}</p>
        ))}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>ShowTime FC</td>
        <td>{PT3.map((PT3) => (
          <p key={PT3}>{PT3}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG3.map((PG3) => (
          <p key={PG3}>{PG3}</p>
        ))}</td>
         <td>{PE1.map((PE1) => (
          <p key={PE1}>{PE1}</p>
        ))}</td>
         <td>{PP1.map((PP1) => (
          <p key={PP1}>{PP1}</p>
        ))}</td>
         <td>{GF1.map((GF1) => (
          <p key={GF1}>{GF1}</p>
        ))}</td>
         <td>{GC1.map((GC1) => (
          <p key={GC1}>{GC1}</p>
        ))}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Real Jugadores</td>
        <td>{PT4.map((PT4) => (
          <p key={PT4}>{PT4}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG4.map((PG4) => (
          <p key={PG4}>{PG4}</p>
        ))}</td>
         <td>{PE1.map((PE1) => (
          <p key={PE1}>{PE1}</p>
        ))}</td>
         <td>{PP1.map((PP1) => (
          <p key={PP1}>{PP1}</p>
        ))}</td>
         <td>{GF1.map((GF1) => (
          <p key={GF1}>{GF1}</p>
        ))}</td>
         <td>{GC1.map((GC1) => (
          <p key={GC1}>{GC1}</p>
        ))}</td>
      </tr>
    </tbody>
  </table>
  </div>
      </div>
    )
  }
}
