import { useState, useEffect } from 'react'
import map from '/map.webp'
import './App.css'
import CardSet from './CardSet'

function App() {
  let list_radiant: any = [{"timeOccurred":"2022-10-29T12:07:57.084Z","id":"76561198047544485","name":"Puppey","team":"radiant","character":"crystal_maiden","netWorth":2249,"items":["infused_raindrop","tpscroll","magic_wand","ward_dispenser","tranquil_boots","pogo_stick"],"lifeStatus":true,"kills":1,"deaths":1},
  {"timeOccurred":"2022-10-29T12:08:03.932Z","id":"76561198071296043","name":"W_Zayac","team":"radiant","character":"earth_spirit","netWorth":2074,"items":["orb_of_venom","infused_raindrop","tranquil_boots","clarity","magic_stick","ward_dispenser","broom_handle"],"lifeStatus":true,"kills":3,"deaths":3},
  {"timeOccurred":"2022-10-29T12:09:13.147Z","id":"76561198082035378","name":"Nisha","team":"radiant","character":"zuus","netWorth":6501,"items":["tpscroll","null_talisman","magic_wand","arcane_boots","bottle","kaya","unstable_wand"],"lifeStatus":true,"kills":1,"deaths":1},
  {"timeOccurred":"2022-10-29T12:09:29.304Z","id":"76561198087883707","name":"Crystallis","team":"radiant","character":"gyrocopter","netWorth":6420,"items":["tpscroll","wraith_band","magic_wand","power_treads","possessed_mask","lesser_crit","ogre_axe"],"lifeStatus":true,"kills":0,"deaths":0},
  {"timeOccurred":"2022-10-29T12:11:52.803Z","id":"76561198046990903","name":"Resolut1on","team":"radiant","character":"dawnbreaker","netWorth":6100,"items":["quelling_blade","soul_ring","infused_raindrop","phase_boots","magic_wand","tpscroll","occult_bracelet","oblivion_staff"],"lifeStatus":true,"kills":1,"deaths":1}]

  let list_dire: any = [{"timeOccurred":"2022-10-29T12:06:45.763Z","id":"76561197970632344","name":"Sneyking","team":"dire","character":"mirana","netWorth":1758,"items":["tpscroll","infused_raindrop","ward_observer","boots","magic_wand","smoke_of_deceit","tome_of_knowledge","ward_dispenser"],"lifeStatus":true,"kills":0,"deaths":1},
  {"timeOccurred":"2022-10-29T12:06:53.827Z","id":"76561198060324070","name":"skiter","team":"dire","character":"chaos_knight","netWorth":4368,"items":["quelling_blade","magic_stick","infused_raindrop","power_treads","gloves","blades_of_attack"],"lifeStatus":true,"kills":0,"deaths":0},
  {"timeOccurred":"2022-10-29T12:06:46.916Z","id":"76561198055052004","name":"Nine","team":"dire","character":"tusk","netWorth":4540,"items":["tpscroll","bottle","magic_stick","phase_boots","falcon_blade","blight_stone"],"lifeStatus":true,"kills":1,"deaths":2},
  {"timeOccurred":"2022-10-29T12:06:45.763Z","id":"76561198046964005","name":"33","team":"dire","character":"enigma","netWorth":4546,"items":["tpscroll","branches","infused_raindrop","wraith_pact"],"lifeStatus":true,"kills":0,"deaths":1},
  {"timeOccurred":"2022-10-29T12:07:47.862Z","id":"76561198064001473","name":"Saksa","team":"dire","character":"tiny","netWorth":3392,"items":["wind_lace","tpscroll","magic_stick","infused_raindrop","pogo_stick","phase_boots","ward_observer"],"lifeStatus":true,"kills":2,"deaths":2}]




  

  return (
    <>
    <div className='container'>
      <div className='map-container'>
            <img src={map} className='map' alt="Dota 2 Map" />
            <div className='destroyed-tower' id='t1-top-radiant'></div>
            <div className='destroyed-tower' id='t2-top-radiant'></div>
            <div className='destroyed-tower' id='t3-top-radiant'></div>
            <div className='destroyed-tower' id='barracks-top-melee-radiant'></div>
            <div className='destroyed-tower' id='barracks-top-range-radiant'></div>

            <div className='destroyed-tower' id='t1-mid-radiant'></div>
            <div className='destroyed-tower' id='t2-mid-radiant'></div>
            <div className='destroyed-tower' id='t3-mid-radiant'></div>
            <div className='destroyed-tower' id='barracks-mid-melee-radiant'></div>
            <div className='destroyed-tower' id='barracks-mid-range-radiant'></div>
            
            <div className='destroyed-tower' id='t1-bot-radiant'></div>
            <div className='destroyed-tower' id='t2-bot-radiant'></div>
            <div className='destroyed-tower' id='t3-bot-radiant'></div>
            <div className='destroyed-tower' id='barracks-bot-melee-radiant'></div>
            <div className='destroyed-tower' id='barracks-bot-range-radiant'></div>

            <div className='destroyed-tower' id='t4-1-radiant'></div>
            <div className='destroyed-tower' id='t4-2-radiant'></div>

            <div className='destroyed-tower' id='t1-top-dire'></div>
            <div className='destroyed-tower' id='t2-top-dire'></div>
            <div className='destroyed-tower' id='t3-top-dire'></div>
            <div className='destroyed-tower' id='barracks-top-melee-dire'></div>
            <div className='destroyed-tower' id='barracks-top-range-dire'></div>

            <div className='destroyed-tower' id='t1-mid-dire'></div>
            <div className='destroyed-tower' id='t2-mid-dire'></div>
            <div className='destroyed-tower' id='t3-mid-dire'></div>
            <div className='destroyed-tower' id='barracks-mid-melee-dire'></div>
            <div className='destroyed-tower' id='barracks-mid-range-dire'></div>
            
            <div className='destroyed-tower' id='t1-bot-dire'></div>
            <div className='destroyed-tower' id='t2-bot-dire'></div>
            <div className='destroyed-tower' id='t3-bot-dire'></div>
            <div className='destroyed-tower' id='barracks-bot-melee-dire'></div>
            <div className='destroyed-tower' id='barracks-bot-range-dire'></div>

            <div className='destroyed-tower' id='t4-1-dire'></div>
            <div className='destroyed-tower' id='t4-2-dire'></div>
      </div>
      <CardSet {...{side:'radiant', players: list_radiant}}></CardSet>
      <CardSet {...{side:'dire', players: list_dire}}></CardSet>
    </div>
    </>
  )
}

export default App
