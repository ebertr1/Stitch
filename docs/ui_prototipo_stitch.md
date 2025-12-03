# Prototipo UI – Plataforma de Retos de Programación

Este documento describe el **flujo funcional** cubierto por las **8 pantallas principales** del prototipo generado con Stitch. Estas pantallas representan el recorrido típico de un usuario desde el registro hasta la resolución y seguimiento de retos.

---

## 🔄 Flujo General de las 8 Pantallas

El flujo inicia cuando el usuario llega a la **Landing Page**, se registra o inicia sesión, accede a su **Dashboard**, recibe o selecciona un reto, lo resuelve en la pantalla de **Reto Activo**, consulta su progreso en el **Perfil**, revisa sus **Notificaciones** y finalmente analiza sus resultados en el **Historial de Retos**.

El flujo es:

1. **Landing Page**
2. **Login / Registro**
3. **Dashboard del Usuario**
4. **Reto Activo**
5. **Perfil del Usuario**
6. **Panel de Notificaciones**
7. **Historial de Retos**
8. **Detalles del Reto Completado**

---

# 📄 Pantallas

## 1. Landing Page

**Propósito:** Introducir la plataforma y motivar el registro.

**Componentes:**

* Sección hero con eslogan
* Botones: *Registrarse*, *Iniciar sesión*
* Tarjetas de beneficios (retos diarios, ranking, gamificación)
* Ilustraciones tecnológicas

**Captura:** `/docs/img/landing.png`

---

## 2. Login / Registro

**Propósito:** Permitir acceso seguro del usuario.

**Componentes:**

* Formulario email/contraseña
* Botón Google
* Opción *Olvidé mi contraseña*
* Panel motivacional lateral

**Captura:** `/docs/img/login.png`

---

## 3. Dashboard del Usuario

**Propósito:** Mostrar estado general del usuario y accesos a funciones clave.

**Componentes:**

* Tarjetas: puntos, nivel, racha, retos completados
* Menú lateral
* Mini-gráficas de rendimiento

**Captura:** `/docs/img/dashboard.png`

---

## 4. Reto Activo

**Propósito:** Permitir que el usuario resuelva un reto en tiempo real.

**Componentes:**

* Contador grande
* Enunciado del reto
* Editor de código
* Botón *Enviar*
* Barra de tiempo & dificultad

**Captura:** `/docs/img/reto_activo.png`

---

## 5. Perfil del Usuario

**Propósito:** Mostrar progreso personal y logros.

**Componentes:**

* Avatar
* Estadísticas
* Insignias
* Gráfica de puntos por día
* Lista de retos completados

**Captura:** `/docs/img/perfil.png`

---

## 6. Pantalla de Notificaciones

**Propósito:** Informar eventos importantes y actividad del usuario.

**Componentes:**

* Lista de alertas
* Iconos
* Timestamps
* Botón *Marcar como leído*

**Captura:** `/docs/img/notificaciones.png`

---

## 7. Historial de Retos

**Propósito:** Presentar todos los retos completados previamente.

**Componentes:**

* Tabla o tarjetas de retos
* Filtros (dificultad, estado, título)
* Ordenamiento por criterios

**Captura:** `/docs/img/historial.png`

---

## 8. Detalles del Reto Completado

**Propósito:** Mostrar resultados detallados de un reto ya completado.

**Componentes:**

* Título y descripción
* Código enviado
* Tests pasados/fallados
* Tiempo usado
* Puntos obtenidos y dificultad

**Captura:** `/docs/img/detalle_reto.png`

---

Fin del documento.
