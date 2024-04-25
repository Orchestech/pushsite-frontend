import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <>
            <header className='header mb-5'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav__item'><Link to={'/'}>Главная страница</Link></li>
                        </ul>
                    <div className='nav__item'><Link to={'/autorization'}>Авторизация</Link></div>
                    </div>
                </div>
            </nav>
            </header>
        </>
    );
}

export default HeaderComponent; 