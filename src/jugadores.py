import os
import json

# Definimos la lista que contendrá los datos de todos los archivos
lista_datos = []

# Ruta del directorio que contiene los archivos .json
directorio = "Jsons"

# Iteramos sobre cada archivo en el directorio
for jugadores in os.listdir(directorio):
    if jugadores.endswith('.json'):
        # Abrimos el archivo y leemos los datos
         with open(os.path.join(directorio, jugadores), 'r', encoding='utf-8') as archivo:
            datos = json.load(archivo)
            # Agregamos los datos a la lista de datos
            lista_datos.append(datos)

# Guardamos todos los datos en un archivo nuevo
with open('JugadoresF.json', 'w') as archivo_salida:
    json.dump(lista_datos, archivo_salida)
