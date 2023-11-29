import './App.css';

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://pbs.twimg.com/profile_images/1298324007457099781/eWoR9CFL_400x400.jpg" alt="El avatar de Adrian_oliva" />
                <div className='tw-followCard-info'>
                    <strong>Adrian_oliva</strong>
                    <span className='tw-followCard-infoUserName'>@adrian230902</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}