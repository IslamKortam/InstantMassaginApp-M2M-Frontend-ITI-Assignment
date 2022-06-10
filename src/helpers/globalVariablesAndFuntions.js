/** Configurations **/
const backendSchema = 'http://';
const backendIP = 'localhost';
const backendPort = 5000;

export const backendURL = {
    schema: backendSchema,
    ip: backendIP,
    port: backendPort,
    hostname: `${backendIP}:${backendPort}`,
    fullURL: `${backendSchema}${backendIP}:${backendPort}`
}
