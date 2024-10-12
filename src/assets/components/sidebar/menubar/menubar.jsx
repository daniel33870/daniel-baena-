import Search from "../../../elements/search";
import NavLink from "./links/navlink";
import Mode from "./mode";

function Menubar() {
    return (
        <>
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                    <NavLink IconName="user-circle" Text="Portfolio" />
                    <NavLink IconName=" bx-calendar" Text="Calendar" /> {/* Pasamos IconName y Text */}
                    <NavLink IconName="task" Text="ToDo" /> {/* Pasamos IconName y Text */}
                    <NavLink IconName="chat" Text="Chat" /> {/* Pasamos IconName y Text */}
                    <NavLink IconName="time" Text="Weather" /> {/* Pasamos IconName y Text */}

                </ul>
            </div>
            <div className="bottom-content">
            <Mode />
            </div>

        </div>
        </>
    );
}

export default Menubar;
