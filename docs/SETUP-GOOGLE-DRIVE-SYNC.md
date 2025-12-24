# Configuración: Sincronización Google Drive → GitHub

Esta guía te ayudará a configurar la sincronización automática de tus materiales de curso desde Google Drive hacia este repositorio de GitHub.

## Resumen

- **Frecuencia:** Cada 6 horas automáticamente (configurable)
- **Herramienta:** rclone + GitHub Actions
- **Tiempo de configuración:** ~15 minutos

---

## Paso 1: Crear Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)

2. Crea un nuevo proyecto:
   - Click en el selector de proyectos (arriba a la izquierda)
   - Click **"Nuevo Proyecto"**
   - Nombre: `DuocUC-Drive-Sync` (o el que prefieras)
   - Click **"Crear"**

3. Selecciona tu nuevo proyecto

---

## Paso 2: Habilitar Google Drive API

1. Ve a **APIs y Servicios** → **Biblioteca**

2. Busca **"Google Drive API"**

3. Click en el resultado y luego **"Habilitar"**

---

## Paso 3: Configurar Pantalla de Consentimiento OAuth

1. Ve a **APIs y Servicios** → **Pantalla de consentimiento OAuth**

2. Selecciona **"Externo"** y click **"Crear"**

3. Completa la información básica:
   - Nombre de la app: `Drive Sync for GitHub`
   - Email de soporte: tu email
   - Emails de desarrollador: tu email

4. Click **"Guardar y continuar"** en cada paso

5. En **"Usuarios de prueba"**, agrega tu email de Google

6. Click **"Guardar y continuar"**

---

## Paso 4: Crear Credenciales OAuth

1. Ve a **APIs y Servicios** → **Credenciales**

2. Click **"+ Crear credenciales"** → **"ID de cliente OAuth"**

3. Tipo de aplicación: **"Aplicación de escritorio"**

4. Nombre: `rclone-github-action`

5. Click **"Crear"**

6. **IMPORTANTE:** Guarda estos valores (los necesitarás):
   - `Client ID` (algo como `xxx.apps.googleusercontent.com`)
   - `Client Secret`

---

## Paso 5: Instalar y Configurar rclone Localmente

### Instalar rclone en Windows:

```powershell
winget install Rclone.Rclone
```

O descarga desde: https://rclone.org/downloads/

### Configurar rclone:

1. Abre una terminal y ejecuta:

```bash
rclone config
```

2. Sigue estos pasos:

```
n) New remote
name> gdrive
Storage> drive
client_id> [PEGA TU CLIENT ID]
client_secret> [PEGA TU CLIENT SECRET]
scope> 1 (Full access)
service_account_file> [Enter - dejar vacío]
Edit advanced config> n
Use auto config> y
```

3. Se abrirá el navegador para autorizar. Inicia sesión con tu cuenta de Google.

4. Continúa en la terminal:

```
Configure this as a Shared Drive (Team Drive)> n
y) Yes this is OK
q) Quit config
```

---

## Paso 6: Obtener el Token de rclone

1. El archivo de configuración está en:
   - **Windows:** `C:\Users\TU_USUARIO\.config\rclone\rclone.conf`
   - **Mac/Linux:** `~/.config/rclone/rclone.conf`

2. Abre el archivo y copia **todo el contenido del campo `token`**.

   Será algo como:
   ```
   token = {"access_token":"ya29.xxx...","token_type":"Bearer","refresh_token":"1//xxx...","expiry":"2024-..."}
   ```

   Copia TODO incluyendo las llaves `{...}`

---

## Paso 7: Configurar Secrets en GitHub

1. Ve a tu repositorio en GitHub

2. Click **Settings** → **Secrets and variables** → **Actions**

3. Click **"New repository secret"** y agrega estos 3 secrets:

| Nombre del Secret | Valor |
|-------------------|-------|
| `GOOGLE_CLIENT_ID` | Tu Client ID de Google Cloud |
| `GOOGLE_CLIENT_SECRET` | Tu Client Secret de Google Cloud |
| `GOOGLE_RCLONE_TOKEN` | El token completo del archivo rclone.conf |

---

## Paso 8: Organizar tu Google Drive

Crea una carpeta en tu Google Drive llamada:

```
DuocUC-Materiales/
├── Bimestre-01/
│   ├── Fundamentos-Prog/
│   ├── Modelamiento-BD/
│   └── Antropologia/
├── Bimestre-02/
│   ├── POO-I/
│   └── ...
└── ...
```

> **Nota:** El nombre de la carpeta debe coincidir con `DRIVE_FOLDER` en el workflow.
> Por defecto es `DuocUC-Materiales`. Puedes cambiarlo en el archivo `.github/workflows/sync-google-drive.yml`

---

## Paso 9: Ejecutar la Sincronización

### Ejecución Manual (para probar):

1. Ve a tu repositorio → **Actions**

2. Click en **"Sync Google Drive to Repository"**

3. Click **"Run workflow"**

4. Opcional: especifica una subcarpeta

5. Click **"Run workflow"** verde

### Ejecución Automática:

El workflow se ejecutará automáticamente cada 6 horas según el schedule configurado.

---

## Configuración Avanzada

### Cambiar la frecuencia de sincronización

Edita `.github/workflows/sync-google-drive.yml`:

```yaml
schedule:
  # Cada hora
  - cron: '0 * * * *'

  # Cada 12 horas
  - cron: '0 */12 * * *'

  # Una vez al día a las 6 AM UTC
  - cron: '0 6 * * *'
```

### Cambiar carpetas de origen/destino

```yaml
env:
  DRIVE_FOLDER: 'Mi-Otra-Carpeta'
  REPO_FOLDER: 'materiales-drive'
```

### Excluir tipos de archivos

Agrega más `--exclude` en el comando rclone:

```yaml
rclone copy "gdrive:$FOLDER" "${{ env.REPO_FOLDER }}" \
  --exclude "*.tmp" \
  --exclude "*.mp4"  # Excluir videos grandes
  --exclude "*.zip"  # Excluir archivos comprimidos
```

---

## Solución de Problemas

### Error: "Invalid grant"
- El token expiró. Vuelve a ejecutar `rclone config` y actualiza el secret `GOOGLE_RCLONE_TOKEN`

### Error: "Quota exceeded"
- Espera unas horas. Google tiene límites de API.

### Error: "File not found"
- Verifica que la carpeta `DRIVE_FOLDER` exista en tu Drive con ese nombre exacto

### Los archivos no se sincronizan
- Verifica que los secrets estén correctamente configurados
- Revisa los logs del workflow en GitHub Actions

---

## Estructura Final

Después de la sincronización, tu repo tendrá:

```
Analista-Programador-Computacional-DuocUC/
├── _Google-Drive-Sync/         # ← Archivos sincronizados desde Drive
│   ├── Bimestre-01/
│   ├── Bimestre-02/
│   └── ...
├── Bimestre-01 - Fund. Prog.../  # ← Estructura existente del repo
├── Bimestre-02 - .../
└── ...
```

---

## Links Útiles

- [Google Cloud Console](https://console.cloud.google.com/)
- [Documentación de rclone](https://rclone.org/drive/)
- [Sintaxis de cron](https://crontab.guru/)
