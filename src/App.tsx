import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HiveList, HiveDetail} from "./pages/Hives"
import {
  InspectionView,
  InspectionForm
} from "./pages/Inspections"
import "./style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HiveList />}/>
        <Route path="/hives" element={<HiveList />} />
        <Route path="/hives/:hiveId" element={<HiveDetail />} />
        <Route path="/hives/:hiveId/inspections/new" element={<InspectionForm />} />
        <Route path="/hives/:hiveId/inspections/:inspectionId/:inspectionNumber" element={<InspectionView />}/>
        <Route path="/hives/:hiveId/inspections/:inspectionId/:inspectionNumber/edit" element={<InspectionForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
