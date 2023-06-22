import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover'
import useMenu from '../../../hooks/useMenu';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import soupImg from '../../../assets/menu/menu-bg.jpg'
import MenuCategory from '../MenuCategory/MenuCategory'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet>
                <title>Food Vozoni | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;