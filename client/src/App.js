import React from "react/";
import ReactDOM from "react-dom";
import './App.css';

function App() {

    const [data, setData] = React.useState(null);

    const Alert = () => {
        alert("Yep!");
    }


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    })

    ReactDOM.render(
        <div class="content-wrap" onClick={AddWidget}>
            <button class="btn">+</button>
        </div>
        , document.getElementById('root'));

}

var id = 0;

function AddWidget() {
    const iDiv = document.createElement('div');
    var idstring = "widget" + id.toString();
    console.log(idstring);
    iDiv.id = idstring;
    iDiv.style.height = "200px";
    iDiv.style.width = "100%";
    iDiv.style.backgroundColor = "black";
    iDiv.style.margin = "10px";
    document.getElementById('widgetlist').appendChild(iDiv);


    const iH1 = document.createElement('h1');
    iH1.textContent = 'This is a widget!'
    iH1.style.color = "white";
    iDiv.appendChild(iH1);

    id++;
}
    
export default App;
