import {React, useEffect} from 'react'
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap'
import Gimage from './Gimage'
export default function Series2(){

    useEffect(() => {
      window.scrollTo(1000,800);
    }, []);
    return(
                       <Container>
                          <Row xl='2' className="Row-1">
                            <Gimage
                            path={"images/Series2/All Speak of Her in Court.png"} 
                            desc={""} 
                            title={"All Speak of Her in Court"} />

                            <Gimage 
                            path={"images/Series2/Are We Missing Something.png"} 
                            desc={"How many times have we looked through this room? Scoured its contents. I know no detail was missed and nothing is unaccounted for. Still, I keep asking myself: are we missing something?"}
                            desc2={"Скільки раз ми оглядали цю кімнату? Переглядали все в ній. Я знаю, що жодна деталь не була упущена і нічого не залишилося неврахованим. І все ж я продовжую питати себе: ми щось упускаємо?"}
                            title={"Are We Missing Something - Ми щось упускаємо"} />

                            <Gimage 
                            path={"images/Series2/Authority of The Lake.png"} 
                            desc={`The imposing structure divides the lake in two. Not because it was necessary but because its owner wants to see the lake from both sides of the house.`}
                            desc2={`Вражаюча будівля розділяє озеро на дві частини. Не тому, що це було необхідно, а тому, що його власник хоче бачити озеро з обох сторін будинку.`} 
                            title={"Authority of The Lake - Влада Озера"} />

                            <Gimage 
                            path={"images/Series2/Château de Désintérêt.png"} 
                            
                            title={"Château de Désintérêt - Замок незацікавленості"} />

                            <Gimage 
                            path={"images/Series2/Continuous Greenhouse.png"} 
                            
                            title={"Continuous Greenhouse - Безперервна оранжерея"} />

                            <Gimage 
                            path={"images/Series2/Decoupage Forest.png"} 
                            
                            title={"Decoupage Forest - Декупажний ліс"} />

                            <Gimage 
                            path={"images/Series2/Dividing Line Between Neighbors.png"} 
                            desc={`Robert Frost says that "Good fences make good neighbors". A saying with much truth to it. However sometimes that barrier that separates the neighbors is a more subtle one.`}
                            desc2={`Роберт Фрост сказав, що «гарні паркани роблять нас гарними сусідами». У цьому висловлюванні багато правди. Однак іноді бар'єр, що розділяє сусідів, буває більш тонким.`} 
                            title={"Dividing Line Between Neighbors - Розділова лінія між сусідами"} />

                            <Gimage 
                            path={"images/Series2/Faltering Chapel.png"}
                            desc={"It still stands but for how long? Even if it stands for the rest of time, it is not what it once was. The church is vacant and decrepit. Only moss and mold grow here. Only animals take shelter in its hall. A hollow shell of what it once was."} 
                            desc2={"Вона все ще стоїть, але чи надовго це? Навіть якщо вона стоїть до кінця часів, це вже не те, чим вона була раніше. Церква пустує і занепадає. Тут ростуть тільки мох і пліснява. В її залі ховаються тільки тварини. Порожня оболонка того, чим вона колись була."}
                            title={"Faltering Chapel - Церква, що хитається"} />

                            <Gimage 
                            path={"images/Series2/Founding of Venice.png"} 
                            desc={`Before the scenes of romance, we know Venice for today there were men digging canals and burying alder wood timbers into the marshy lagoons. A slow and arduous task but a necessary one. Their labors would be the foundation for a grand republic that would with stand The Huns, The Lombards, and The Franks. An empire of tiny islands.’`}
                            desc2={`До романтичних сцен, якими ми знаємо Венецію сьогодні, тут копали канали та закопували вільхові колоди в болотисті лагуни. Це була повільна і важка, але необхідна робота. Їхні праці стануть основою великої республіки, яка встоїть перед гунами, лангобардамі і франками. Імперія крихітних островів.`} 
                            title={"Founding of Venice - Підстава Венеції"} />

                            <Gimage 
                            path={"images/Series2/Intermission.png"}
                            desc={"The intermission is nearly over but you do not wish to go back in just yet.  At the moment you would rather explore the vacant lobby. Seeing the history that is contained in the chipped paints and wall cracks. The doors to the theater close and the performance begins. It comes through as a haunting echo. Background music for your tour."}
                            desc2={"Антракт майже закінчився, але ви поки не хочете повертатися назад. В даний момент ви віддаєте перевагу досліджувати порожнє фойє. Побачити історію, яка укладена у фарбах і тріщинах на стінах. Двері в театр закриваються, і починається вистава. До вас доноситься примарне відлуння. Фонова музика для вашої екскурсії."} 
                            title={"Intermission - Антракт"} />

                            <Gimage 
                            path={"images/Series2/Merciless Hallway.png"}
                            desc={"You feel it closing in on you even though the walls do not move. The door leading outside is so close but every step forward does not bring you any nearer. There is no malice, its is just the nature of this structure."}
                            desc2={"Ви відчуваєте, як він наближається до вас, хоча стіни не рухаються. Двері, що ведуть назовні, так близько, але кожен крок вперед не наближає вас до неї. У цьому немає ніякого злого умислу, просто така природа цієї структури."} 
                            title={"Merciless Hallway - Нещадний коридор"} />

                            <Gimage 
                            path={"images/Series2/Mirthful Skyway.png"} 
                            title={"Mirthful Skyway - Небесний шлях веселощів"} />

                            <Gimage 
                            path={"images/Series2/Nan’yoin-dono.png"} 
                            desc={`The lady and her entourage take a stroll through the castle gardens. It is a beautiful late summer afternoon. The air around her is tranquil and the flora full of life.  This is not the case for much of Nippon, it is the Sengoku period of Japan when civil war is the norm. Even now, many miles away her, husband Hōjō Sōun is sieging the castle of Arai.  The air there is filled with shouts and marching footsteps. Life is snuffed out one flame at a time.  He will return, the undisputed master of Sagami. Together they will found a new era for The Hōjō clan.`}
                            desc2={`Пані та її свита прогулюються по садам замку. Прекрасний пізній літній полудень. Повітря навколо безтурботне, а флора сповнена життя. Це не так для більшої частини Ніппон, це період Сенгоку в Японії, коли громадянська війна є чимось нормальним. Навіть зараз, за багато миль від неї, її чоловік Ходзьо Соун тримає в облозі замок Араі. Повітря наповнене криками і маршируючими кроками. Життя гасне по одному вогнику за раз. Він повернеться, незаперечний господар Сагамі. Разом вони відкриють нову еру для клану Ходзьо.`} 
                            title={"Nan’yoin-dono - Наньйоін-доно"} />

                            <Gimage 
                            path={"images/Series2/Obelisk of Our Times.png"} 
                            
                            title={"Obelisk of Our Times - Обеліск нашого часу"} />

                            <Gimage 
                            path={"images/Series2/Oceanliner.png"} 
                            
                            title={"Oceanliner - Океанський лайнер"} />

                            <Gimage 
                            path={"images/Series2/Overtaking What Once Was.png"} 
                            desc2={"Це повільний і тонкий процес, але в кінцевому підсумку він відбувається. Зелений колір проникає всередину, захоплюючи то, що колись було нашим."}
                            desc={"It is a slow and subtle process but an eventual one. The green creeps in, claiming what once was ours."}
                            title={"Overtaking What Once Was - Подолання того, що було"} />

                            <Gimage 
                            path={"images/Series2/Quiet Suffocation.png"} 
                            title={"Quiet Suffocation - Тиха задуха"} />

                            <Gimage 
                            path={"images/Series2/Scarlet Fools.png"} 
                            desc={`They are blessed by all manner of gods, spirits, prophecies, and forces of natures. They cannot be touched by the mundane or the divine.  So the Scarlet Fools traverse the cave, ready to seek adventure and absolution.`}
                            desc2={`Їх благословляють всілякі боги, духи, пророцтва і сили природи. Їх не може торкнутися ні мирське, ні божественне. Тому Червоні Дурні бродять по печері, готові шукати пригод і відпущення гріхів.
                            `} 
                            title={"Scarlet Fools - Червоні Дурні"} />

                            <Gimage 
                            path={"images/Series2/Seeking The Virtues.png"} 
                            desc2={"вони сваряться і б'ються один з одним, очікуючи чудес від божественного."}
                            desc={"They clamor and fight over one another, seeking miracles from the divine"}
                            title={"Seeking The Virtues - У пошуках чеснот"} />

                            <Gimage 
                            path={"images/Series2/Sick Bed.png"} 
                            title={"Sick Bed - Ліжко хворого"} />

                            <Gimage 
                            path={"images/Series2/Silverback.png"} 
                            title={"Silverback - Сріблястість"} /> 
                            
                            <Gimage 
                            path={"images/Series2/Stillness In Real Life.png"} 
                            title={"Stillness In Real Life - Спокій в реальному житті"} /> 

                            <Gimage 
                            path={"images/Series2/The Clutter of The Estate.png"} 
                            title={"The Clutter of The Estate - Безлад у маєтку"} />

                            <Gimage 
                            path={"images/Series2/Thoth.png"} 
                            desc2={"Бог божественної таємниці. Народився без матері. Створений на початку часів. Він уособлює порядок і справедливість. У багатьох міфах він приймає вигляд ібіса, а в деяких – бабуїна, як тут."}
                            desc={"A god of divine mystery. Born to no mother. Self created at the beginning of time. He represents order and justice. In many myths he takes the form of an ibis but in some he is a baboon, as he is here."}
                            title={"Thoth - Той"} />

                            <Gimage 
                            path={"images/Series2/To See It Once Again.png"} 
                            title={"To See It Once Again - Щоб побачити це знову"} />    
                          </Row> 
                       </Container>
    
    );
}