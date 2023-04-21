import logo from '../logo.svg';
import MyClockImage from '../02/MyClockImage';

const Hello = () => {
    let name = '이현진';
    let github = 'https://github.com/fabbitox';

    return (
        <main className='container'>
            <article data-theme='dark'>
                <div><img src={logo} alt='logo' className='App-logo' /></div>
                <MyClockImage />
                <footer><hgroup>
                    <h1>{name}</h1>
                    <h2><a href={github}>{github}</a></h2>
                </hgroup></footer>
            </article>
        </main>
    );
}

export default Hello;