# CCIJ - Frontend

> Este repositorio arrancó como una copia de DemocraciaEnRed/causascomunes-presion-frontend [cb40075](https://github.com/DemocraciaEnRed/causascomunes-presion-frontend/tree/cb400753fdceb57253996354352ee9d234d4fe84)


Tal vez salgan errores por la versión de node que usen. Sugiero utilizar `nvm` como manejador de versiones de node. A mí me funciona con lts/carbon `v8.16.1`

## Start!

``` bash
# Verificar que node a usar sea el 8...

node -v

# Ejecutar yarn, esto instala los paquetes
# Si no se tiene yarn, hacer npm install -g yarn

yarn

# servir en http://localhost:4200/

yarn start
```

para inicio rápido con `nvm`:

```bash
$ nvm use v8
$ yarn start
```

## Deployment

Cada vez que se vaya a levantar una nueva tag para mandar a produccion, antes de hacerlo, deben hacer un build antes de pushear!

```bash
yarn build

# Luego del build, hagan el commit de todo

git commit . -m "Ejemplo de commit..."

git push

# Ahora hagan nueva tag

git tag 0.2
git push --tags
```
---

### Notas varias

##### Conexión frontend-backend

Esto se hace editando `package.json` en las variables `api` e `imgBase` correspondientes a las urls donde el frontend va a ir a buscar la data y las imágenes, respectivamente.

##### Error compilando el frontend

Si salen errores al intentar hacer `yarn` o `yarn install` en el frontend  es probable que estén usando otra versión de node (v10 o v12). Verificar que `node -v` devuelva **v8.17.0**.

##### Docker

About the making of the Dockerfile: https://denys.dev/2018-03-02/your-angular-apps-as-docker-containers/

```bash
docker build --tag=causas-comunes-frontend .

docker run -dit --name ccf -p 8080:80 causas-comunes-frontend
```