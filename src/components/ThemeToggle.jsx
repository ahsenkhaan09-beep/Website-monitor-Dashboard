 import '../ThemeToggle.css'
 
 export  default function ThemeToggle(){
    return(
        <div className="ThemeToggle">
            <h3>Dark Mode</h3>
            <lable className = "Switch">
            <input type="Check Box" defaultChecked/>
            <span className="Slider"></span>
            </lable>
        </div>
    );
 }