import { io } from "socket.io-client";
import { backendURL } from "./globalVariablesAndFuntions";
const socket = io(backendURL.fullURL);


export default socket;