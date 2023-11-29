import './TwitterFollowCard.css'

export function TwitterFollowCard ({username, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://pbs.twimg.com/profile_images/1298324007457099781/eWoR9CFL_400x400.jpg" alt="El avatar de Adrian_oliva" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{username}</span>
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