function Icon({ className = '', type = '', toggleSidebar }) {
    const iconClass = `bx bx-${type} ${className}`.trim(); // Combina className con la clase de ícono

    return (
        <i
            className={iconClass}
            onClick={toggleSidebar ? toggleSidebar : () => {}} // Verifica si toggleSidebar existe antes de ejecutarlo
        ></i>
    );
}

export default Icon;
