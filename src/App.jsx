import './App.css'
import { FormArea } from './components/FormArea'
import { PersonalInfo } from './components/PersonalInfo'
import { StepsArea } from './components/StepsArea'

function App() {
  return (
    <body>
      <div className="containerApp">
        <StepsArea />
        <PersonalInfo />
      </div>
    </body>
  )
}

export default App
