// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export function delUser(id) {
    fetch(`${getServerURL()}/users/${id}`, {
      method: "DELETE"
    })
      .then(() => console.log(`Usuario con id ${id} eliminado.`))
      .catch(error => console.error("Error al eliminar usuario:", error));
  }
delUser(2);