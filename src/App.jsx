import './App.css'
import { AddOns } from './components/FormArea/AddOns'
import { PersonalInfo } from './components/FormArea/PersonalInfo'
import { SelectPlans } from './components/FormArea/SelectPlans'
import { Sumary } from './components/FormArea/Sumary'
import { StepsArea } from './components/StepsArea'

function App() {
  const formComponents = [
    <PersonalInfo />,
    <SelectPlans />,
    <AddOns />,
    <Sumary />,
  ]
  return (
    <body>
      <div className="containerApp">
        <StepsArea />
        <div className="formContent">
          {formComponents[0]}
          <button type="submit">Next Step</button>
        </div>
      </div>
    </body>
  )
}

export default App
