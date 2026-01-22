import { useState } from "react";
import '../style/register.css'
import { useNavigate } from "react-router-dom";

function RegisterForm({ setUser }) {
    const [formDataRegister, setFormDataRegister] = useState({ pseudo: "", password: "", email: "" });
    const [formDataConnexion, setFormDataConnexion] = useState({ pseudo: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://warhammer40k.alwaysdata.net/warhammer/api/register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataRegister),
        });
        const result = await response.json();
        if (result.success) {
            // Stocke l'utilisateur + token dans le state global/localStorage
            setUser(result.user);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/');
        } else {
            alert(`Erreur : ${result.error}`);
    }
    };

    const handleSubmitConnexion = async (e) => {
        e.preventDefault();
        const response = await fetch('https://warhammer40k.alwaysdata.net/warhammer/api/connexion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataConnexion),
        });
        const result = await response.json();
        if (result.success) {
            setUser(result.user);
            localStorage.setItem('user', JSON.stringify(result.user)); // Stocke l'utilisateur + token
            navigate('/');
         } else {
            alert('Erreur de saisie du pseudo ou du mot de passe');
        }
    };

    const handleChange = (e) => {
        setFormDataRegister({ ...formDataRegister, [e.target.name]: e.target.value });
    }

    const handleChangeConnexion = (e) => {
        setFormDataConnexion({ ...formDataConnexion, [e.target.name]: e.target.value });
    }

    return (
        <div className="registerForm">
            <div className="containerRegister">
                <div className="enregistrement">
                    <h3>S'enregistrer</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="ligne"><p>Pseudo :</p> <input type="text" name="pseudo" value={formDataRegister.pseudo} onChange={handleChange} /></div>
                        <div className="ligne" id="inputMotDePasse"><p>Mot de passe :</p> <input type="password" name="password" value={formDataRegister.password} onChange={handleChange} /></div>
                        <div className="ligne"><p>Email :</p> <input type="text" name="email" value={formDataRegister.email} onChange={handleChange} /></div>
                        <div className="ligne"><input type="submit" value={"s'enregistrer"} /></div>
                    </form>
                </div>
                <div className="connexion">
                    <h3>Se connecter</h3>
                    <form onSubmit={handleSubmitConnexion}>
                        <div className="ligne"><p>Pseudo :</p> <input type="text" name="pseudo" value={formDataConnexion.pseudo} onChange={handleChangeConnexion} /></div>
                        <div className="ligne"><p>Mot de passe :</p> <input type="password" name="password" value={formDataConnexion.password} onChange={handleChangeConnexion} /></div>
                        <div className="ligne"><input type="submit" value={"Se connecter"} /></div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default RegisterForm;
