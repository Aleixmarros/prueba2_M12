import React, { Component } from 'react'
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
  const PE1 = [2];
  const PP1 = [2];
  const GF1 = [49];
  const GC1 = [9], GC2 = [24];
    return (
      <div>
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
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><img src={barça}></img>Barcelona</td>
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
        <td><img src={madrid}></img>Real Madrid</td>
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
        <td><img src={atlético}></img>Atlético</td>
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
        <td><img src={sociedad}></img>Real Sociedad</td>
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
      <tr>
        <td>5</td>
        <td><img src={betis}></img>Betis </td>
        <td>{PT5.map((PT5) => (
          <p key={PT5}>{PT5}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG5.map((PG5) => (
          <p key={PG5}>{PG5}</p>
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
        <td>6</td>
        <td><img src={villareal}></img>Villareal </td>
        <td>{PT6.map((PT6) => (
          <p key={PT6}>{PT6}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG6.map((PG6) => (
          <p key={PG6}>{PG6}</p>
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
        <td>7</td>
        <td><img src={athletic}></img>Athletic </td>
        <td>{PT7.map((PT7) => (
          <p key={PT7}>{PT7}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG7.map((PG7) => (
          <p key={PG7}>{PG7}</p>
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
        <td>8</td>
        <td><img src={rayo}></img>Rayo</td>
        <td>{PT8.map((PT8) => (
          <p key={PT8}>{PT8}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG8.map((PG8) => (
          <p key={PG8}>{PG8}</p>
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
        <td>9</td>
        <td><img src={osasuna}></img>Osasuna </td>
        <td>{PT9.map((PT9) => (
          <p key={PT9}>{PT9}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG8.map((PG8) => (
          <p key={PG8}>{PG8}</p>
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
        <td>10</td>
        <td><img src={celta}></img>Celta </td>
        <td>{PT10.map((PT10) => (
          <p key={PT10}>{PT10}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG8.map((PG8) => (
          <p key={PG8}>{PG8}</p>
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
        <td>11</td>
        <td><img src={mallorca}></img>Mallorca </td>
        <td>{PT1.map((PT1) => (
          <p key={PT11}>{PT11}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG8.map((PG8) => (
          <p key={PG8}>{PG8}</p>
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
        <td>12</td>
        <td><img src={girona}></img>Girona </td>
        <td>{PT12.map((PT12) => (
          <p key={PT12}>{PT12}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG12.map((PG12) => (
          <p key={PG12}>{PG12}</p>
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
        <td>13</td>
        <td><img src={getafe}></img>Getafe </td>
        <td>{PT13.map((PT13) => (
          <p key={PT13}>{PT13}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG13.map((PG13) => (
          <p key={PG13}>{PG13}</p>
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
        <td>14</td>
        <td><img src={sevilla}></img>Sevilla </td>
        <td>{PT14.map((PT14) => (
          <p key={PT14}>{PT14}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG13.map((PG13) => (
          <p key={PG13}>{PG13}</p>
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
        <td>15</td>
        <td><img src={cádiz}></img>Cádiz</td>
        <td>{PT15.map((PT15) => (
          <p key={PT15}>{PT15}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG15.map((PG15) => (
          <p key={PG15}>{PG15}</p>
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
        <td>16</td>
        <td><img src={valladolid}></img>Real Valladolid </td>
        <td>{PT16.map((PT16) => (
          <p key={PT16}>{PT16}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG12.map((PG12) => (
          <p key={PG12}>{PG12}</p>
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
        <td>17</td>
        <td><img src={español}></img>Espanyol </td>
        <td>{PT17.map((PT17) => (
          <p key={PT17}>{PT17}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG15.map((PG15) => (
          <p key={PG15}>{PG15}</p>
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
        <td>18</td>
        <td><img src={valencia}></img>Valencia </td>
        <td>{PT18.map((PT18) => (
          <p key={PT18}>{PT18}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG13.map((PG13) => (
          <p key={PG13}>{PG13}</p>
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
        <td>19</td>
        <td><img src={almeria}></img>Almería </td>
        <td>{PT19.map((PT19) => (
          <p key={PT19}>{PT19}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG13.map((PG13) => (
          <p key={PG13}>{PG13}</p>
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
        <td>20</td>
        <td><img src={elche}></img>Elche </td>
        <td>{PT20.map((PT20) => (
          <p key={PT20}>{PT20}</p>
        ))}</td>
        <td>{PJ1.map((PJ1) => (
          <p key={PJ1}>{PJ1}</p>
        ))}</td>
        <td>{PG20.map((PG20) => (
          <p key={PG20}>{PG20}</p>
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
