

import { useEffect, useState } from "react";
import menuFile from '../../public/menu.json'

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(menu)
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from data')
                setMenu(data);
                setLoading(false);
            });
    }, []);
    console.log(menu , 'from menu')
    return [menu, loading]
}

export default useMenu;