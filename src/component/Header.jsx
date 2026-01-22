import '/src/style/header.css';
import { Link } from 'react-router-dom';

function Header({user, setUser }) {

    return (
        <header className='header'>
            <div className='navbar'>
                <Link to="/" className='logo-section'>
                    <img src="/image/logo/logoW40k.png" alt="logo de Warhammer 40k" />
                </Link>
                <div className='register'>
                    <h3><Link to="/community">la Communauté</Link></h3>
                    {user ? (
                        <>
                            <h3 className='pseudoAfficher'><Link to="/user">{user.username}</Link></h3>
                            <h3 onClick={() => setUser(null)}>Se déconnecter</h3>
                        </>
                    ) : (
                        <h3><Link to="/register">S'enregistrer / Se connecter</Link></h3>
                    )}
                </div>
            </div>


           
        </header>
    )
}

export default Header;