import PlayerCard from './PlayerCard'

type CardSetProps = {
    side: string;
    players: any[]
}

function CardSet(props: CardSetProps) {
    console.log(props)
    return(
        <>
        <div className='player-cards' id={'cards-'+props.side}>
            {
                props.players.map((player: any, index: number) => {
                    return <PlayerCard {...{hero_name: player.character,name:player.name, num:index+1,side:props.side, net:player.netWorth, kda:player.kills+'/'+player.deaths, items:player.items}} key={'player-' + (index+1).toString() + '-' + props.side}></PlayerCard>
                })
            }
        </div>

        </>
    )
}

export default CardSet