import ember_icon from '/ember-icon.jpg'


type PlayerProps = {
    name:string,
    num: number,
    side: string,
    net: string,
    kda: string,
    items: string[],
    hero_name: string
} 

function PlayerCard(props:PlayerProps) {
    return (
        <>
        <div className={'player-card player-' + props.num.toString()} id={'player-' + props.num.toString() + '-' + props.side} >
          <div className='hero-info'>
            <div className='player-name'>{props.name}</div>
            <div className='hero-image'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/heroes/' + props.hero_name +'_lg.png'} alt="Hero Image" />
            </div>
          </div>
          <div className='extra-info'>
            <div className='kda'>
                KD:
              {props.kda}
            </div>
            <div className='net-worth'>
                Net Worth:
              {props.net}
            </div>
            <div className='items'>
              <div className='item item-top item-1'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[0] + '_lg.png'} alt="" />
              </div>
              <div className='item item-top item-2'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[1] + '_lg.png'} alt="" />
              </div>
              <div className='item item-top item-3'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[2] + '_lg.png'} alt="" />
              </div>
              <div className='item item-bot item-4'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[3] + '_lg.png'} alt="" />
              </div>
              <div className='item item-bot item-5'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[4] + '_lg.png'} alt="" />
              </div>
              <div className='item item-bot item-6'>
                <img src={'https://cdn.dota2.com/apps/dota2/images/items/' + props.items[5] + '_lg.png'} alt="" />
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default PlayerCard