
import MenuCard from './MenuCard';
import './StyleSheet/MenuGrid.css';
import menuListData from './menuList.json';  

export default function Menu() {
  const { items } = menuListData;

  return (
    <div id="menuSection" className="menuContainer">
      <div className='menuContent'>
        <div className='menuHeader'>
          <h1>Menu</h1>
        </div>
        <div className='menuListDiv'>
          {items.map((item, index) => (
            <MenuCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}