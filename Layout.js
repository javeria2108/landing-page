import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/GoogleAnalytics'
const Layout = ({children, toggleTheme, currentTheme}) => {
    return (
        <div>
            <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme}/>
            <GoogleAnalytics />
            {children}
            <Footer currentTheme={currentTheme}/>
        </div>
    )
}

export default Layout
