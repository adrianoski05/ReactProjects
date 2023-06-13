import { useState } from "react";

export default function TwitterFollowCard({ avatar, children, userName, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    

    const imgSrc=`https://unavatar.io/${avatar}`;
    const following = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing? 'tw-followCard-button is-following':'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(

        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de midudev" 
                    src={imgSrc}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {following}
                </button>
            </aside>
        </article>
    )
}