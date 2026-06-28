/**
 * Serializa un valor a JSON seguro para incrustarlo dentro de un elemento
 * `<script>` del HTML (JSON-LD, mapas de datos para scripts del cliente, etc.).
 *
 * `JSON.stringify` por si solo NO escapa los caracteres que el analizador de
 * HTML interpreta dentro de un `<script>`. El caso critico es la secuencia
 * `</script>` (o, en general, `</...`): cierra el bloque antes de tiempo y deja
 * inyectar marcado arbitrario en la pagina (XSS). Ademas, los separadores de
 * linea U+2028 y U+2029 son validos en JSON pero rompen el script cuando el
 * navegador vuelve a interpretar el contenido como JavaScript.
 *
 * Hoy todos los datos que se serializan aqui son estaticos y los controla el
 * autor (no hay entrada de usuario), por lo que el riesgo es teorico. Aun asi
 * el escape se aplica como defensa en profundidad: si en el futuro alguno de
 * estos textos (titulos de proyecto, descripciones, rutas...) pasara a provenir
 * de una fuente externa, la salida seguiria siendo segura sin cambios.
 *
 * El escape mantiene el JSON equivalente: el navegador decodifica las secuencias
 * `\uXXXX` de vuelta a su caracter original al parsear, por lo que el dato
 * resultante es identico.
 *
 * @param value Valor serializable (objeto JSON-LD, mapa de rutas, etc.).
 * @returns Cadena JSON con `<`, `>`, `&` y los separadores de linea escapados.
 */
export function serializeForScript(value: unknown): string {
  // El patron se construye desde una cadena para que el codigo fuente sea solo
  // ASCII: "\\u2028" y "\\u2029" representan los separadores de linea invisibles
  // sin tenerlos que escribir de forma literal.
  const dangerous = new RegExp('[<>&\\u2028\\u2029]', 'g');

  return JSON.stringify(value).replace(dangerous, (char) => {
    // Reemplaza cada caracter por su escape Unicode \uXXXX (p. ej. "<" -> <),
    // valido tanto en JSON como en el JavaScript que lo reinterpreta.
    const hex = char.charCodeAt(0).toString(16).padStart(4, '0');
    return '\\u' + hex;
  });
}
