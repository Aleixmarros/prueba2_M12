import json

# Cargamos el archivo JSON
with open('JugadoresF.json', 'r', encoding="utf8") as archivo:
    datos = json.load(archivo)

# Creamos una lista para almacenar los jugadores de la liga 53
jugadores_liga = []

# Iteramos sobre todas las ids
for id in range(300):
    # Accedemos a los datos de cada id
    datos_id = datos[id]
    # Iteramos sobre los jugadores en los datos de la id actual
    for jugador in datos_id['items']:
        if 'league' in jugador and jugador.get('league') == 53:
            # Agregamos el jugador a la lista de jugadores de la liga 53
            jugadores_liga.append(jugador)

# Guardamos los jugadores de la liga 53 en un nuevo archivo JSON
with open('JugadoresLS_53.json', 'w') as archivo_salida:
    json.dump(jugadores_liga, archivo_salida)



