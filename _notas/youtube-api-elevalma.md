# YouTube API — canal ElevAlma

Notas internas (Jekyll no publica carpetas que empiezan con `_`).
**Este repo es público: aquí no van llaves, client IDs, secrets ni tokens.** Todo eso vive en pass-cli.

Última actualización: 2026-11-19

## Canal

- Canal: **ElevAlma por Saleh Penhos**, `UCm7TaLFmuImm2wfhCHJJehw`
- Es el canal de la cuenta personal `spenhos@gmail.com`. No es Cuenta de Marca.
- `elevalma.oficial@gmail.com` es Manager por Permisos de Studio. Ese rol **no** sirve para la API.

## Credencial que funciona

- pass-cli, bóveda `iqseller`, entrada **`elevalma-channel-youtube `** (ojo: el título lleva un espacio al final).
- Campos: `client_id`, `client_secret`, `refresh_token`.
- Cliente OAuth tipo Desktop, en un proyecto de Google Cloud configurado en **modo Personal**
  (solo lo puede autorizar la cuenta que lo creó: spenhos). Este proyecto tiene habilitada la YouTube Data API v3.
- Permisos: `youtube` y `youtube.upload`.
- Probado el 2026-11-19 con la Protección Avanzada activa: el token se renueva y responde como el canal ElevAlma.

## Por qué costó trabajo (para no repetirlo)

1. `spenhos@gmail.com` tiene **Protección Avanzada**. Con ella activa, Google solo deja autorizar apps verificadas
   y cualquier app propia sin verificar da `Error 400: policy_enforced`, sin importar el proyecto, el cliente ni si está en modo Personal.
2. La llave de Tora en Linea (pass-cli `youtube-halajot`) funciona porque Tora en Linea **es Cuenta de Marca**:
   se autoriza como esa identidad, que no tiene Protección Avanzada. Esa llave solo actúa como Tora en Linea;
   con ElevAlma puede leer, pero editar da `403 forbidden`.
3. Una **API key** solo lee datos públicos. Editar (videos.update, thumbnails.set) responde
   `401 API keys are not supported`. Hace falta OAuth.
4. No hay parámetro para "elegir canal" en la API: el canal sale del token (el que se eligió al autorizar).

## Si el token deja de funcionar (re-autorizar)

1. Desactivar unos minutos la Protección Avanzada en spenhos (ya se hizo el 29-dic-2025, 29-mar-2026, 17-may-2026 y 19-nov-2026).
2. Correr el flujo OAuth local (redirect `http://127.0.0.1:<puerto>/`, `access_type=offline`, `prompt=consent`)
   con el cliente de `elevalma-channel-youtube `, entrar con spenhos y aceptar.
3. Verificar con `channels?mine=true` que el canal sea `UCm7TaLFmuImm2wfhCHJJehw` antes de guardar el `refresh_token` en pass-cli.
4. Reactivar la Protección Avanzada y volver a probar que el token se renueva.

Solución definitiva pendiente: verificar con Google una app propia de ElevAlma (dominio elevalma.com, política de privacidad,
justificación de los dos permisos y video demo). **No** usar el proyecto de iqseller (multi-tenant) para esto.

## Entradas de pass-cli que quedaron sin uso

- `youtube-elevalma` y `elevalma-youtube`: intentos fallidos del 2026-11-19. No se borraron.

## Relanzamiento de videos viejos (ejemplo: Vayetzé, 2026-11-19)

Video `2iZpKsIe_nI` (dudaím, Alshij), publicado originalmente el 27-nov-2025, relanzado la semana de Vayetzé 5787:

- Título: `VAYETZÉ  ¿Cuáles son tus dudaím modernos? — Parashá Semanal | ElevAlma por Saleh Penhos`
  (también en la localización `es-MX`; las traducciones `en-US` y `ar` conservan el título anterior).
- Descripción SEO nueva con el formato del skill parasha-video (links fijos, contexto, ✦, capítulos, serie, hashtags).
- Miniatura nueva estilo IRÉ: `תְּנִי־נָא` / **DAME** (Rajel a Leá, Bereshit 30:14) con jazmines a la derecha.
  Diseño en Canva: "Vayetzé 5787 תְּנִי־נָא DAME" (copia del diseño IRÉ; el original no se tocó).
- Mensaje enviado al canal de WhatsApp "ElevAlma por Saleh Penhos - Torah y Crecimiento" (lo envió Saleh).
- Post nuevo en el blog y entrada en `videos.js` (hero).

Pasos para el siguiente relanzamiento:
1. Leer el video real por la API (título, localizaciones, descripción) antes de proponer nada.
2. Proponer título/descripción/miniatura y esperar el "sí".
3. Guardar respaldo del snippet antes de escribir; actualizar `snippet` + `localizations` (es-MX) con `videos.update`.
4. Subir la miniatura con `thumbnails.set` y verificar leyendo el video otra vez (YouTube tarda unos segundos en reflejarlo).

## Pendientes conocidos

- El post viejo `_posts/2025-11-27-tus-dudaim-modernos.md` dice "Vayigash" y pone a Rajel como la obsesionada con los dudaím;
  no coincide con el video (Vayetzé, el Alshij sobre la decisión de Leá). No se modificó: decisión de Saleh.
