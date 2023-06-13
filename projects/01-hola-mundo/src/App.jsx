import "./App.css"
import TwitterFollowCard from "./TwitterFollowCard"


export default function App(){
    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing={true} userName='Adrianoski' avatar='elonmusk'>
                Adrian Garcia  
            </TwitterFollowCard>
            <TwitterFollowCard  userName='Belita' avatar='shakira'>
                Belen Maurell
            </TwitterFollowCard>
            <TwitterFollowCard  userName='CarlitoM' avatar='kaka'>
                Carlo Magno
            </TwitterFollowCard>
            <TwitterFollowCard  userName='EMartinez' avatar='messi'>
                Emiliano Martinez
            </TwitterFollowCard>
            
        </section>
        )
    
}