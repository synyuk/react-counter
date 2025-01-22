import './Header.css';

const Header = () => {
    const user = {
        name: "John",
        lastname: "Doe",
    }
    return (
        <Counter name={user.name+` `+user.lastname} lastname="Synyuk"/>
    )
}

function Counter(props) {
    return (
        <>
            {/*<h1>Привет, {props.name} {props.lastname}</h1>*/}
            {/*<h2>Как дела?</h2>*/}
        </>
    )
}

export default Header;