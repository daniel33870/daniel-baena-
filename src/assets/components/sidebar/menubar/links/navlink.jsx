import Icon from "../../../../elements/icon";

function NavLink({ Text, IconName, type= 'icon' }) { 
    return (
        <li className="nav-link">
            <a href="#">
                <Icon className={type} type={IconName}/> {/* Usa IconName para pasar el tipo de ícono */}
                <span className="text nav-text">{Text}</span> {/* Elimina el signo $ innecesario */}
            </a>
        </li>
    );
}

export default NavLink;
