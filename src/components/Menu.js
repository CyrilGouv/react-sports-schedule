import './Menu.css'


const Menu = ({ handleSports, schedulers }) => {
  return (
    <div className="Menu">
        {
            schedulers.map((schedule, idx) => {
                return (
                    <span key={ idx } onClick={ () => handleSports(schedule) } className="menu__schedule">{ schedule }</span>
                )
            })
        }
    </div>
  )
}

export default Menu