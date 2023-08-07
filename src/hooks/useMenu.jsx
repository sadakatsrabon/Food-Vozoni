import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/menu.json") // Replace with the correct URL to the JSON file
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from data')
                setMenu(data);
                setLoading(false);
            })
            .catch(error => {
                // Handle fetch error
                console.error(error);
                setLoading(false);
            });
    }, []);

    console.log(menu, 'from menu');

    return [menu, loading];
}

export default useMenu;
