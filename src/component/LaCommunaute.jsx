import { useEffect, useState } from "react";
import '/src/style/LaCommunaute.css';

function LaCommunaute() {
    const [tousLesUsers, setTousLesUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://warhammer40k.alwaysdata.net/warhammer/api/armyManager/community.php');
        const result = await response.json();
        console.log("Données brutes de l'API", result);
        if (result.success) {
            console.log(result)
            setTousLesUsers(result.users || []); 
            console.error(`Erreur : ${result.error}`);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const armiesByUser = tousLesUsers.reduce((acc, user) => {
        if (!acc[user.army_name]) {
            acc[user.army_name] = 0;
        }
        const units = JSON.parse(user.units);
        const totalPoints = units.reduce((sum, unit) => sum + unit.points, 0);
        acc[user.army_name] += totalPoints;
        return acc;
    }, {});


return (
  <div className="communaute">
    <table>
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Nom d'Armée</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {tousLesUsers
          .filter(user => user.army_name && user.units) // Filtre les utilisateurs sans armée
          .map((user, index) => {
            const units = JSON.parse(user.units);
            const totalPoints = units.reduce((sum, unit) => sum + unit.points, 0);
            return (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.army_name}</td>
                <td>{totalPoints}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>
);

}

export default LaCommunaute;
