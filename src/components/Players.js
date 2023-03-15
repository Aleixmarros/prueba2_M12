import React, { Component } from 'react'
export default class Players extends Component {
  render() {
    const Players = ["Pedri", "Gavi", "Araujo"];
    return (
        <div>
            <ul>
                {Players.map((Player, i) => (
                    <li key={Player}>
                        {i + 1} - {Player}
                    </li>
                ))}
            </ul>
        </div>
    )
  }
}
