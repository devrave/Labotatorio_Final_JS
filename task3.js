// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";
export function addUser(first_name, last_name, email) {
    fetch(`${getServerURL()}/users`)
      .then(response => response.json())
      .then(users => {
        const superiorId = users.reduce((max, user) => user.id > max ? user.id : max, 0);
        const newUser = {
          id: superiorId + 1,
          first_name,
          last_name,
          email
        };
  
        return fetch(`${getServerURL()}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(newUser)
        });
      })
      .then(response => response.json())
      .then(data => console.log("Usuario agregado:", data))
      .catch(error => console.error("Error al agregar usuario:", error));
  }

  addUser("Andres","Cano", "a.canorave@gmail.com");