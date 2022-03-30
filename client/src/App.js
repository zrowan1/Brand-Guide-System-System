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

function AddWidget() {
    ReactDOM.render(
        <div class="content-wrap">
            <button class="btn">-</button>
        </div>
        , document.getElementById('test'));
}
    
export default App;
