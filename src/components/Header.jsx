import '../Header.css';

export default function Header() {
    return(
        <header className="Header">
            <div className="Logo">SITE GUARD </div>
         
        <div className="Search Box">
            <input type="Text"  placeholder="Enter Website"/>
        </div>

        <div className="Profie Picture">
           <img src ="d3e3469a10cff94d33d8f9f5496b7883.jpg" alt="Picture"/>
        </div>
        </header>
    );

}