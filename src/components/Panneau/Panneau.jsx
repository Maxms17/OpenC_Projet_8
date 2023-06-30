import React from 'react';
import './Panneau.css'


function Panneau() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    
    return (
        <div className="my-dropdown">
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button>Menu 1</button>
                    </li>
                    <li className="menu-item">
                        <button>Menu 2</button>
                    </li>
                </ul>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>}
        </div>
    );
}

export default Panneau