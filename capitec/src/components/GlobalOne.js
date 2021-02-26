import "./css/GlobalOne.css";
import menu from "./assets/menu.svg";
import Plans from "./Plans";
import Favourites from "./Favourites";
const GlobalOne = () => {
    return ( 
        <div className="global_one">
            <div className="navbar-fixed">
                <nav className="blue darken-4">
                    <div className="nav-wrapper">
                        <div className="sign_out left">
                            <span className="white-text">Sign Out</span>
                        </div>
                        <div className="brand-logo center">
                            <span className="white-text">Global One</span>
                        </div>
                        <div className="menu_icon_box right">
                            <img src={menu} alt="menu_icon" className="responsive-img"/>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="savings_account">
                <div className="card savings_card">
                    <div className="card-content savings_card_content">
                        <div className="savings_icon_box blue">
                            icon
                        </div>
                        <div className="name_box">
                            <span className="savings_name blue-text">Savings Account</span> 
                            <span className="right savings_name blue-text">{">"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Plans/>
            <div className="titles">
                <span className="grey-text text-darken-2 favourites_title">Favourites</span>
                <a className="blue-text edit_title right">{"Edit >"}</a>
            </div>
            <Favourites/>
            <div className="bottom_navigation z-depth-1 white">
                <div className="home_button">
                    <span ClassName="blue-text">Home</span>
                </div>
                <div className="cards_button">
                    <span ClassName="grey-text text-darken-2">Cards</span>
                </div>
                <div className="transact_button">
                    <span ClassName="grey-text text-darken-2">Transact</span>
                </div>
                <div className="Messages_button">
                    <span ClassName="grey-text text-darken-2">Messages</span>
                </div>
                <div className="Explore_button">
                    <span ClassName="grey-text text-darken-2">Explore</span>
                </div>
            </div>
        </div>
     );
}
export default GlobalOne;