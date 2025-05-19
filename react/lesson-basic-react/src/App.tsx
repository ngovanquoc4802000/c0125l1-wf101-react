import './App.css'
import Bai1 from './baitap/bai_1';
import Bai2 from './baitap/bai_2';
import Bai3 from './baitap/bai_3';
import Bai4 from './baitap/bai_4';
import LessonBasicOne from './react-function/lesson_four/lesson_basic_1';
import LessonBasicTen from './react-function/lesson_four/lesson_basic_10';
import LessonBasicEleven from './react-function/lesson_four/lesson_basic_11';
import LessonBasicTwo from './react-function/lesson_four/lesson_basic_2';
import LessonBasicThree from './react-function/lesson_four/lesson_basic_3';
import LessonBasicFour from './react-function/lesson_four/lesson_basic_4';
import LessonBasicFive from './react-function/lesson_four/lesson_basic_5';
import LessonBasicSix from './react-function/lesson_four/lesson_basic_6';
import LessonBasicSevenParent from './react-function/lesson_four/lesson_basic_7/lesson_basic_7';
import LessonBasicEight from './react-function/lesson_four/lesson_basic_8';
import LessonBasicNine from './react-function/lesson_four/lesson_basic_9';
import Example4 from "./react-js/fruit/example4";
function App() {
  const fruits: string[] = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
  return (
    <div className='App'>
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <h1>List of fruits</h1>
        <ul>
          {
            fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))
          }
        </ul>
      </header>
      {/*<Example1 />*/}
      {/*<Example2 />*/}
      {/*<Example3 />*/}
      <Example4 />

        <Bai1/>
        <Bai2/>
        <Bai3/>
        <Bai4/>
        {/* lesson 4 */}
        <LessonBasicOne />
        <LessonBasicTwo name="Ngô Văn Quốc" />
        <LessonBasicThree age="90"/>
        <LessonBasicFour message="Hãy Callvideo với tôi"/>
        <LessonBasicFive props='CodeGym'/>
        <LessonBasicSix />
        <LessonBasicSevenParent/>
        <LessonBasicEight/>
        <LessonBasicNine  type="success" message="Thành công!"/>
        <LessonBasicTen  />
        <LessonBasicEleven/>
    </div>
  )
}

export default App



