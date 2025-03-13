<h1>AppQuo - Fintech</h1></br>

![image](https://github.com/user-attachments/assets/63283f8a-4447-41c1-bc35-43f43797b2ce)</br>

🚀 Link [Quo](https://fintechquo.netlify.app/)</br>

Descripción breve:
Quo es una web app educativa diseñada para enseñar y guiar a los usuarios en el mundo de las criptomonedas. Ofrece recursos interactivos, información actualizada y herramientas de aprendizaje para comprender el funcionamiento del mercado cripto de manera accesible. Te permite comprar y vender 9 criptomonedas con un saldo inicial simulado de 1000 USD

🔍 Funciones principales:
✔ Cursos y guías interactivas: Material educativo que explica desde conceptos básicos hasta estrategias avanzadas de inversión en criptomonedas.
 ✔Simulador de inversión: Espacio para practicar con criptomonedas virtuales y aprender a gestionar un portafolio sin riesgos reales.
✔ Análisis del mercado en tiempo real: Acceso a gráficos y precios actualizados para comprender las dinámicas del ecosistema cripto.
✔ Glosario de términos cripto: Definiciones claras y accesibles para entender la jerga del mundo blockchain.

👉 En resumen: Quo es una plataforma educativa que democratiza el conocimiento sobre criptomonedas, combinando recursos de aprendizaje interactivos con herramientas de análisis del mercado para una experiencia formativa completa.

UX/Ui Design


Bankend

COMANDOS cURL AL SERVER

# 📘 Quo API - Documentación

Bienvenido a la documentación de la **API de Quo**, una plataforma educativa centrada en criptomonedas. Aquí encontrarás los principales endpoints para interactuar con la API.

## 📌 Endpoints

### 1. Obtener lista de monedas

**Descripción:** Recupera un listado actualizado de las criptomonedas disponibles.

```bash
GET /coins
```

**Ejemplo de uso:**

```bash
curl -X GET "https://resulting-rattlesnake-matiasnm-db6f89e2.koyeb.app/coins"
```

### 2. Iniciar sesión

**Descripción:** Permite a un usuario autenticarse en la plataforma y recibir un token JWT.

```bash
POST /login
```

**Ejemplo de uso:**

```bash
curl -X POST "https://resulting-rattlesnake-matiasnm-db6f89e2.koyeb.app/login" \
     -H "Content-Type: application/json" \
     -d '{"username": "alice", "password": "password123"}'
```

**Respuesta exitosa:**

```json
{
  "jwTtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJxdW8iLCJzdWIiOiJhbGljZSIsImlkIjoxLCJleHAiOjE3NDA1MTc5NDJ9.UrRCDJRq_PaAIAEOjOJB-ssyHtt1QyKo3MnVJ10pad4"
}
```

### 3. Obtener información de un usuario

**Descripción:** Recupera los detalles de un usuario específico autenticado mediante un token JWT.

```bash
GET /users/:id
```

**Ejemplo de uso:**

```bash
curl -X GET "https://resulting-rattlesnake-matiasnm-db6f89e2.koyeb.app/users/1" \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJxdW8iLCJzdWIiOiJhbGljZSIsImlkIjoxLCJleHAiOjE3NDA1MTc5NDJ9.UrRCDJRq_PaAIAEOjOJB-ssyHtt1QyKo3MnVJ10pad4"
```

**Respuesta exitosa:**

```json
{
  "username": "alice",
  "mail": "alice@example.com"
}
```

BASE DE DATOS (AIVEN.COM)
alice → Contraseña: password123

bob → Contraseña: securePass!

eve → Contraseña: mySecret#

ENDPOINT LOCALES

Conseguir TOKEN
POST localhost:8080/login

body json: { "username": "alice", "password": "password123" }

GET usuario
GET localhost:8080/users/1



UX/Ui Design:
Optimal workshop
Whimsical
Figma
Google forms
Photopea

Frontend:
HTML
CSS
Javascript
React
Vite

Backend:
Java
Swagger

Links de desarrollo:

Figma:
https://www.figma.com/proto/p7LUA1RnHMMGC7FcJo6p3m/Quo-Fintech?page-id=1%3A15&node-id=43-1974&p=f&viewport=-91%2C-175%2C0.03&t=Y3GhwgH1ofKyrqib-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=43%3A1974

Documentacion - Swagger:
https://resulting-rattlesnake-matiasnm-db6f89e2.koyeb.app/swagger-ui/index.html

Despliegue
https://fintechquo.netlify.app/


Instancia = Cohorte

Identificador del equipo = 
C24-32-t-webapp

Miembros del Equipo:
Diego Marín
Rol = UX/Ui Designer - Frontend Developer

Matias Nehuen Malpartida
Rol = Backend

Jeheremi Ruiz
Rol = Backend

Link al repositorio = 
https://github.com/No-Country-simulation/C24-32-t-webapp

Sector del MVP = 
Fintech
