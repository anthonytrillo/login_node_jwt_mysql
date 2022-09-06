# login_node_jwt_mysql

Una aplicación hecha con Node que cuenta con las siguientes características:

    - Registro de usuarios en una base de datos con MySQL
    - Inicio de sesión con nombre de usuario y contraseña
    - Autenticación basada en token para el inicio de sesión usando JWT
    - Validación de datos en API RESTful
    - Configuración y manejo de la conexión a MySQL
    - Estructura de archivos y carpetas de proyectos de aplicaciones basadas en Node

## Stack de tecnología de la App:

La aplicación utiliza las siguientes herramientas y tecnologías,

| Herramientas & Tecnologías      | Descripción  |
| :-------------: |:-------------|
| [Node](https://nodejs.org/es/) | Entorno de ejecución de JavaScript orientado a eventos asíncronos. |
| [MySQL](https://www.mysql.com/) | Base de datos relacional open-source. |
| [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) | JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. |
| [Bootstrap](https://getbootstrap.com/) | Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web. |

## Carpetas del proyecto y estructura de archivos:

    login_node_jwt_mysql/                  # Carpeta del proyecto
        controllers/                        # Contiene los controladores del proyecto.
            authenticationController.js
            loginController.js
            logoutController.js
            registerController.js
        database/                         # Contiene la conexión a la base de datos.
            db.js
        public/                            # Contiene los archivos públicos del proyecto.
            css/
                bootstrap.min.css
                dashboard.css
                styles.css
            img/
                logo.png
            js/
                bootstrap.bundle.min.js
                dashboard.js
                formValidate.js
        routes/                             # Contiene las rutas del proyecto.
            router.js
        views/                              # Contiene las vistas del proyecto.
            index.ejs
            login.ejs
            register.ejs
        .env
        .gitignore
        app.js                              # Archivo principal del proyecto.

## Correr la app de forma local:

  #### 1. Instalar las dependencias del proyecto.
    npm install

  #### 2. Cree y establezca las siguientes variables de entorno en el archivo .env.
    # Establecer variables de base de datos.
    DB_HOST = 'DB_HOST'
    DB_USER = 'DB_USER'
    DB_PASSWORD = 'DB_PASSWORD'
    DB_DATABASE = 'DB_DATABASE'

    # Set mail server variables.
    SECRET_KEY = 'SECRET_KEY'
    EXPIRATION_TOKEN = 'EXPIRATION_TOKEN'
    EXPIRATION_COOKIE = 'EXPIRATION_COOKIE'

  #### 3. Correr proyecto.
    npm run start