import './App.css';
import Series1 from './components/Series1'
import Series2 from './components/Series2'
import {Container, Row, Col} from 'react-bootstrap'
import SimpleReactLightbox from 'simple-react-lightbox'
import ReactTwitterFollowButton from 'react-twitter-follow-button'
import { Link, Route } from "wouter";

function App() {
  return (

    <div className="App-header">
      
    <SimpleReactLightbox>

      <Container>
              <div className="Title">
                <h1>Welcome - Звітати</h1>
              </div>
        <Row>
          
          

            
              <div className="Title-Sub">  
                <p>
                <p>Hello, my name is Osip Shevchenko. Retired civil engineer and current digital artist.</p> 

        <p>Much of my work is inspired by history. 
        I enjoy trying to capture actual historical events but also the more human part of history.
        Great man stories have been told countless times and while I am still guilty of indulging in them, I try to explore the lives of everyday people as well.
        They have their own interesting stories to tell us.</p>

        <p>I also like to explore the idea of finding the unfamilar in the familiar with my art. 
        One aspect of this is liminal spaces. I find it a fascinating concept and enjoy using it as one of my techniques for creating a sense of unease in a piece.
        Many of my subject tend to be buildings and rooms (what can I say, I'm still a civil engineer at heart) that have been blended with other images to create a sense disorientation and a feel of discomfort.</p>

        <p>I hope you enjoy your visit through my gallery. I plan to do more pieces and will post them here and on my twitter account (which my grandson insisted I get).
        I'm thinking about doing more formal series with a specific theme. I am open to thoughts and suggestions. Thank you for stopping by!</p>

        <p>Вітаю, мене звати Осип Шевченко. У минулому інженер-будівельник та у сучасності цифровий художник.</p>

        <p>Велика частина моїх робіт є натхненна історією. Мені подобається намагатися запам'ятати не тільки реальні історичні події, а й більш людську частину історії. Історії великих людей розповідалися незліченну кількість разів, і поки я досі в них поринаю, я намагаюся досліджувати також життя простих людей. У них є свої цікаві історії.</p>

        <p>Мені також подобається досліджувати у своєму мистецтві ідею про те, щоб знайти незнайоме у знайомому. Один з аспектів — це лімінальні простори. Я вважаю це захопливою концепцією й отримую задоволення від її використання як однієї з моїх технік для створення відчуття незручності у витворах. Багато з моїх предметів, як правило, є будівлями та кімнатами (що я можу сказати, я все ще інженер-будівельник у душі), які були змішані з іншими зображеннями, щоб створити відчуття дезорієнтації та дискомфорту.</p>
        
        <p>Сподіваюся, вам сподобається візит у мою галерею. Я планую зробити більше робіт і буду розміщувати їх тут і на моєму обліковому записі у Твіттері (на чому наполягав мій онук). Я думаю над тим, щоб зробити більш офіційну серію з певною темою. Я відкритий для думок і пропозицій. Спасибі, що зайшли!</p>
                </p>
                <ReactTwitterFollowButton twitterAccount="@OsipShevArt" showLarge={true} showName={true} showCount={true} />
                <button className='email'>
                <a className='emailtitle' href='mailto:osipshevchenko@protonmail.com'>Contact Via Email</a>
                </button>
              </div>
          
          
        </Row>
        <Row className="Center">

          <Link  href="/Series1">
            <Col> 
            <a className="Link">Series 1</a>
            </Col>
          </Link>

          <Link  href="/Series2">
            <Col>
            <a className="Link"> Series 2</a>
            </Col>
          </Link>

          <Link href="/Series3">
            <Col>
            <a className="Link">Series 3</a>
            </Col>
          </Link>                           

        </Row>

        <Row>

          <Route path="/Series1">
            {(params) => <Series1/>}
          </Route>
          
          <Route path="/Series2">
            {(params) => <Series2/>}
          </Route>
        </Row>
      </Container>
    </SimpleReactLightbox>
        
    </div>
    
  );
}

export default App;
