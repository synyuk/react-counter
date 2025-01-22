import "./assets/css/main.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

//const test = "test";//React-элементы — мельчайшие кирпичики React-приложений — это простые объекты

// function HelloAll() {
//     return (
//         <div>
//             <Hello phrase="asdsdsa" name="Andrey" />;
//             <Hello phrase="asdsdsa" name="Andrey" />;
//             <Hello phrase="asdsdsa" name="Andrey" />;
//         </div>
//     )
// }

class AppNew extends React.Component {
    render() {
        return (
            <div className="wrapper">Hello App</div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Hello phrase="asdsdsa" name="Andrey" />;
//функция Hello и есть маленький компонент реакт
function Hello(props) {
    return (
        // <h1>Hello {test} {2+2} {props.phrase}! My name {props.name}</h1>
        <h1>Easy React Counter!2</h1>
    )
}


root.render(
  <React.StrictMode>
      {element}
      <Header />
      <Main />
      <Footer />
  </React.StrictMode>
);
console.log(AppNew);


function changeScript(input) {
    const scriptWordRegex = /\bscript\b/gi;
    return input.replace(scriptWordRegex, 'sсript');
}

function changeAllScript() {
    const inputs = document.querySelectorAll('input[type="text"], textarea');

    inputs.forEach(input => {
        input.form.addEventListener('submit', (event) => {
            input.value = changeScript(input.value);
        });
    });
}

changeAllScript();

