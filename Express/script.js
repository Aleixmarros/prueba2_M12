//"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:/carpeta_temporal

//GET USERS
const buttonfutDB = document.getElementById('btn-API');

buttonfutDB.addEventListener('click', () => {
  fetch('https://futdb.app/api/players', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': '25568f63-c5f3-49c0-ae34-fddda26b6ff6'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Actualiza la tabla de usuarios con el nuevo registro
    })
    .catch(error => console.error(error));

});

//GET USERS
const btnCargar = document.getElementById('btn-cargar');
const tablaUsuarios = document.getElementById('tabla-usuarios');

btnCargar.addEventListener('click', () => {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
      // Limpiar la tabla
      tablaUsuarios.innerHTML = '';

      // Agregar datos a la tabla
      data.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdaId = document.createElement('td');
        celdaId.textContent = usuario.id;
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.name;
        const celdaEmail = document.createElement('td');
        celdaEmail.textContent = usuario.email;

        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEmail);
        tablaUsuarios.appendChild(fila);
      });
    })
    .catch(error => console.error(error));
});

//POST USERS
const form = document.querySelector('#add-user-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-input').value;
  const email = document.querySelector('#email-input').value;

  fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Actualiza la tabla de usuarios con el nuevo registro
    })
    .catch(error => console.error(error));


  /*$.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: { name, email },
      success: function (data) {
          console.log(data);
          // Actualiza la tabla de usuarios con el nuevo registro
      },
      error: function (xhr, status, error) {
          console.error(error);
      }
  });*/
});

//UPDATE USERS
const updateUser = (id, name, email) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  };

  fetch(`http://localhost:3000/users/${id}`, options)
    .then(response => {
      if (response.ok) {
        console.log(`Usuario actualizado con el ID: ${id}`);
      } else {
        console.error('Error al actualizar el usuario');
      }
    })
    .catch(error => console.error(error));
}

// Ejemplo de cómo llamar a la función updateUser al hacer clic en un botón
const updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', () => {
  const id = document.getElementById('user-id').value;
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  updateUser(id, name, email);
});

//DELETE USERS
const deleteUser = (id) => {
  const options = {
    method: 'DELETE'
    //headers: { 'Content-Type': 'application/json' }
  };

  fetch(`http://localhost:3000/users/${id}`, options)
    .then(response => {
      if (response.ok) {
        console.log(`Usuario eliminado con el ID: ${id}`);
      } else {
        console.error('Error al eliminar el usuario');
      }
    })
    .catch(error => console.error(error));
}

// Ejemplo de cómo llamar a la función deleteUser al hacer clic en un botón
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', () => {
  const id = document.getElementById('delete-user-id').value;
  deleteUser(id);
});

/*
CREATE TABLE `futman`.`teams` (
  `TeamID` INT NOT NULL AUTO_INCREMENT , 
  `Name` VARCHAR(30) NOT NULL , 
  `Manager` VARCHAR(30) NOT NULL , 
  PRIMARY KEY (`TeamID`)
  ) ENGINE = InnoDB;

  CREATE TABLE `futman`.`classification` (
    `Jornada` INT NOT NULL AUTO_INCREMENT , 
    `TeamID` INT NOT NULL , 
    `Points` INT NOT NULL , 
    `Victories` INT NOT NULL , 
    `Draws` INT NOT NULL , 
    `Losses` INT NOT NULL , 
    `GoalsFavour` INT NOT NULL , 
    `GoalsAgainst` INT NOT NULL , 
    PRIMARY KEY (`Jornada`, `TeamID`)
    ) ENGINE = InnoDB;
*/

//GET TEAMS
const btnTeams = document.getElementById('btn-teams');
const tablaTeams = document.getElementById('tabla-teams');

btnTeams.addEventListener('click', () => {
  fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(data => {
      // Limpiar la tabla
      tablaTeams.innerHTML = '';

      // Agregar datos a la tabla
      data.forEach(team => {
        const fila = document.createElement('tr');
        const celdaTeamID = document.createElement('td');
        celdaTeamID.textContent = team.TeamID;
        const celdaName = document.createElement('td');
        celdaName.textContent = team.Name;
        const celdaManager = document.createElement('td');
        celdaManager.textContent = team.Manager;

        fila.appendChild(celdaTeamID);
        fila.appendChild(celdaName);
        fila.appendChild(celdaManager);
        tablaTeams.appendChild(fila);
      });
    })
    .catch(error => console.error(error));
});

//POST USERS
const form2 = document.querySelector('#add-player-form');

form2.addEventListener('submit', (event) => {
  event.preventDefault();

  const teamID = document.querySelector('#teamID-input').value;
  const goals = document.querySelector('#goals-input').value;
  const assists = document.querySelector('#assists-input').value;
  const minutes = document.querySelector('#minutes-input').value;
  const yellowCards = document.querySelector('#yellowCards-input').value;
  const redCards = document.querySelector('#redCards-input').value;

  fetch('http://localhost:3000/players', {
    method: 'POST',
    body: JSON.stringify({ teamID, goals, assists, minutes, yellowCards, redCards }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));
});

//PUT USERS
const form3 = document.querySelector('#update-player-form');

form3.addEventListener('submit', (event) => {
  event.preventDefault();

  const teamID = document.querySelector('#teamID-update-input').value;
  const goals = document.querySelector('#goals-update-input').value;
  const assists = document.querySelector('#assists-update-input').value;
  const minutes = document.querySelector('#minutes-update-input').value;
  const yellowCards = document.querySelector('#yellowCards-update-input').value;
  const redCards = document.querySelector('#redCards-update-input').value;
  const playerID = document.querySelector('#playerID-update-input').value;

  fetch('http://localhost:3000/players/' + playerID, {
    method: 'PUT',
    body: JSON.stringify({ teamID, goals, assists, minutes, yellowCards, redCards }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));
});

//DELETE PLAYERS
const deletePlayer = (id) => {
  const options = {
    method: 'DELETE'
    //headers: { 'Content-Type': 'application/json' }
  };

  fetch(`http://localhost:3000/players/` + id, options)
    .then(response => {
      if (response.ok) {
        console.log(`Usuario eliminado con el ID: ${id}`);
      } else {
        console.error('Error al eliminar el usuario');
      }
    })
    .catch(error => console.error(error));
}
const deleteButtonPlayers = document.getElementById('delete-button-player');
deleteButtonPlayers.addEventListener('click', () => {
  const id = document.getElementById('delete-player-id').value;
  deletePlayer(id);
});

  //Servicios
/*
1-Get teams
2-Get players
3-Get jornada
4-Update jornada
5-Get points
6-Get goals
7-Get victories
8-Get draws
9-Get losses
10-Update (points, victories, draws, losses, goalsFavour, goalsAgainst)
*/


