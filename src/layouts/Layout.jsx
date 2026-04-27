
import Header from "../components/Header";
import SideBar from "../components/SideBar";
function Layout({children}){
    return(
        <div className="app">
            <SideBar/>
            <div className="main">
                <Header/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Layout;