import Link from 'next/link'
import A from '../components/A';

const App = () => {
    return (
        <div >
            <div className="navbar">
                <A href="/" text="Home"/>
                <A href="/users" text="Дочки"/>
            </div>
            <h1>Main page</h1>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }

                `}</style>
        </div>
    );
};

export default App;
