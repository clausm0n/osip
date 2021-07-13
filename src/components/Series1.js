import {React, useEffect} from 'react'
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap'
import Gimage from './Gimage'
export default function Series1(){

    

    useEffect(() => {
      window.scrollTo(1000,800);
    }, []);

    return(
                       <Container>
                          <Row xl='2' className="Row-1">
                            <Gimage
                            path={"images/Series1/A Disimilar Space - Різноманітний простір.jpeg"} 
                            desc={""} 
                            title={"A Disimilar Space - Різноманітний простір"} />

                            <Gimage 
                            path={"images/Series1/A Wise Turn.jpeg"} 
                            desc={"How strange. You don't not remember how you got here but the building you see before you...it is oddly familiar."}
                            desc2={`Як дивно. Ви не пам'ятаєте, як сюди потрапили, але будівля, яку ви бачите перед собою ... вона дивно знайома.`} 
                            title={"A Wise Turn - Мудрий поворот"} />

                            <Gimage 
                            path={"images/Series1/After Hours.jpeg"} 
                            desc={`You have been here before. Perhaps it is where you work. Maybe it is where you or your children go to school. Or you've never gone inside but you've passed this building many times.
                            But here you are, after everyone has left for the day. The darkness that surrounds this building and the lack of people makes it feel like you are seeing it for the first time.`}
                            desc2={`Ви були тут раніше. Можливо, це те місце, де ви працюєте. Можливо, це місце, куди ви або ваші діти ходите до школи. Або ви ніколи не заходили всередину, але проходили повз цієї будівлі багато разів. Але ось ви тут, після того, як всі пішли. Темрява, яка оточує цю будівлю, і відсутність людей змушують вас відчувати, що ви бачите її вперше.`} 
                            title={"After Hours - Час після зачинення"} />

                            <Gimage 
                            path={"images/Series1/Between The Garden _ The Home - Між Садом та Домом.jpeg"} 
                            
                            title={"Between The Garden & The Home - Між Садом та Домом"} />

                            <Gimage 
                            path={"images/Series1/Casting Out For The Day - Кастинг на день.jpeg"} 
                            
                            title={"Casting Out For The Day - Кастинг на день"} />

                            <Gimage 
                            path={"images/Series1/Countless Many Are The Villages.jpeg"} 
                            desc={`We hear them. The sound of steel hitting steel. Men screaming in fury and pain. The deafening thunder of hundreds of horses charging.
                            They are too far away to see but we know what is happening. The forces of Æthelred are routed by the forces of Sweyn Forkbeard.
                            We must flee or die by their blades. But where will we go? Countless many are the villages that have shared the same fate as ours. `}
                            desc2={`Ми їх чуємо. Звук удару сталі. Чоловіки кричать у люті й болю. Оглушливий грім сотень коней. Вони занадто далеко, щоб бачити, але ми знаємо, що відбувається. Сили Етелреда тікають від сил Свейн Форкборода. Ми повинні бігти або померти від їх клинків. Але куди ми підемо? Незліченна кількість людей поділяє ту ж долю, що й ми.
                            `} 
                            title={"Countless Many Are The Villages - Незліченна кількість селищ"} />

                            <Gimage 
                            path={"images/Series1/Fallow _ Endless.jpeg"} 
                            desc={`Sometimes I feel conflicted about giving descriptions to these pieces. 
                            I would prefer they speak for themselves but sometimes a little explanation can be helpful.
                            Here the sea and sky are almost indistinguishable by their color, only seperated by a beach of dark coarse sand and rocky outcrops.
                            The sea, the beach, and the sky all stretch on endlessly. 
                            They are all products of entropy and will forever remain unchanged.`}
                            desc2={`Іноді мені важко давати опис цим витворам. Я б вважав за краще, щоб вони говорили самі за себе, але іноді невелике пояснення може бути корисним. Тут море і небо майже невиразні за кольором, їх розділяє лише пляж з темного крупного піску й скелястих оголених порід. Море, пляж і небо — все це тягнеться нескінченно. Всі вони є продуктами ентропії та назавжди залишаться незмінними.`} 
                            title={"Fallow & Endless - Пар та Нескінченність"} />

                            <Gimage 
                            path={"images/Series1/Growing Old With The Sea - Старіння з морем.jpeg"} 
                            
                            title={"Growing Old With The Sea - Старіння з морем"} />

                            <Gimage 
                            path={"images/Series1/Hutsulshchyna In Early Spring.jpeg"} 
                            desc={`A beautiful time of year to visit the park and to look out over the Carpathian Mountains. For nature lovers it is a must visit.`}
                            desc2={`Чудова пора року для відвідування парку й огляду Карпат. Для любителів природи це обов'язкове місце для відвідування.`} 
                            title={"Hutsulshchyna In Early Spring - Гуцульщина ранньою весною"} />

                            <Gimage 
                            path={"images/Series1/It Still Plays - Це все ще відтворюється.jpeg"} 
                            title={"It Still Plays - Це все ще відтворюється"} />

                            <Gimage 
                            path={"images/Series1/Ruins of The Far Off - Руїни Далекого.jpeg"} 
                            title={"Ruins of The Far Off - Руїни Далекого"} />

                            <Gimage 
                            path={"images/Series1/Sadrith Mora.jpeg"} 
                            desc={`I do not play many video games but my grandson introduced me to Morrowind several years ago and I spent much more time playing it than I should have.
                            The world is so beautiful and terrible in its construction. It is unlike any other "fantasy" game I have played probably why I dedicated so many hours to it.
                            While there is much I enjoy about the game, I fascinated by House Telvanni and their captial of Sadrith Mora.
                            The organic mushroom towers have this sort of forboding feel to them that adds to the already foreign nature of the Telvanni.
                            This piece was inspired by their construction.`}
                            desc2={`Я не граю у багато відеоігор, але мій онук познайомив мене з Morrowind кілька років тому, і я провів набагато більше часу, граючи у цю гру, ніж повинен був. Світ такий прекрасний та жахливий в його будівництві. Вона не схожа на жодну іншу "фентезі" гру, в яку я грав, напевно, тому я присвятив їй стільки годин. Попри те, що гра мені дуже подобається, я був зачарований Будинком Тельванні та їх столицею Садріт Мора. Огранічні грибові вежі викликають таке погане передчуття, яке підсилює і без того чужу природу Тельванні. Цей витвір був натхненний їх конструкцією.
                            `} 
                            title={"Sadrith Mora - Садріт Мора"} />

                            <Gimage 
                            path={"images/Series1/Second Battle of Tapae.jpeg"} 
                            desc={`"It was a hard fought battle. The Dacians know every pebble of the mountain forts that we fight upon.
                            We were outnumbered and short on supplies due to the treacherous terrain. 
                            Through despite our setbacks we came out triumphant due to the efforts of our princeps Imperator Caesar Nerva Traianus Augustus"`}
                            desc2={`"Це був важкий бій. Даки знають кожну гальку гірських фортець, на яких ми боремося. Нас було менше й не вистачало припасів через підступну місцевість. Попри наші невдачі, ми вийшли переможцями завдяки зусиллям нашого князя імператора Цезаря Нерва Траяна Августа".`} 
                            title={"Second Battle of Tapae - Друга битва при Тапа"} />

                            <Gimage 
                            path={"images/Series1/Sorrowful in Finery.jpeg"} 
                            desc={`In silken vestiments and with wine and meat before them do these servents of god do their penitence.`}
                            desc2={`У шовковому одязі і з вином та м'ясом перед собою ці служителі Божі покаялися.`} 
                            title={"Sorrowful in Finery - Скорботні у нарядах"} />

                            <Gimage 
                            path={"images/Series1/The Falling Room.jpeg"} 
                            desc={`We have all been here in our dreams. Perhaps not this exact room but one like it. A room with everyday purpose but distorted by our subconcious mind.`}
                            desc2={`Ми всі були тут уві сні. Може бути, не в цій кімнаті, а в тій, що нам подобається. Повсякденна кімната, але перекручена нашою підсвідомістю.`} 
                            title={"The Falling Room - Кімната, що падає"} />

                            <Gimage 
                            path={"images/Series1/The Light of The Bolshoi.jpeg"} 
                            desc={`I dearly miss the performances at the Bolshoi from my time in Moscow.`}
                            desc2={`Я дуже сумую за виставами у Большому з тих пір, як був у Москві.
                            `} 
                            title={"The Light of The Bolshoi - Світло Большого"} />

                            <Gimage 
                            path={"images/Series1/The Marble Remnants of The Empire - Мармурові залишки імперії.jpeg"} 
                            title={"The Marble Remnants of The Empire - Мармурові залишки імперії"} />

                            <Gimage 
                            path={"images/Series1/Those Who Saved The World.jpeg"} 
                            desc={`Fire and invisible death crept closer and yet all there remained unaware.
                            Unaware of the devestation that was to be rought upon them and so many others.
                            Their only salvation were those brave few. Those who saved the world.`}
                            desc2={`Вогонь і невидима смерть підкралися ближче, і всі вони залишилися необізнаними. Необізнаність про руйнування, які повинні були бути завдані ним і багатьом іншим. Їхнім єдиним порятунком були ті, хто був хоробрим. Ті, хто врятував світ.
                            `} 
                            title={"Those Who Saved The World - Ті, хто врятував світ"} />

                            <Gimage 
                            path={"images/Series1/What They Watch - Що вони спостерігають.jpeg"} 
                            title={"What They Watch - Що вони спостерігають"} />

                            <Gimage 
                            path={"images/Series1/Without Ceremony - Без церемонії.jpeg"} 
                            title={"Without Ceremony - Без церемонії"} />

                            <Gimage 
                            path={"images/Series1/Without Us Saying Anything - Без того, щоб ми говорили що-небудь.jpeg"} 
                            title={"Without Us Saying Anything - Без того, щоб ми говорили що-небудь"} />   
                          </Row> 
                       </Container>
    
    );
}