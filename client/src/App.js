import React from "react/";
import ReactDOM from "react-dom";
import './App.css';

function App() {

    const [data, setData] = React.useState(null);

    const AddWidget = () => {
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
        ,document.getElementById('root'));
}


export default App;
