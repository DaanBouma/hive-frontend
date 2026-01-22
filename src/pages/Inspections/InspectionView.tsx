import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Header, Accordion } from "../../components"
import type { Field } from "../../types/form"
import type { ApiResponse } from "../../types/api"

type Inspection = {
  id: number
  hive_id: number
  created_at: string
  updated_at: string
}

const SECTIONS: {
  title: string
  disabled: boolean
  fields: Field[]
}[] = [
    {
      title: "Inwintering",
      disabled: true,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Type" }
      ]
    },
    {
      title: "HK-Ramen",
      disabled: true,
      fields: [
        { type: "number", label: "Aantal" }
      ]
    },
    {
      title: "BK-Ramen",
      disabled: true,
      fields: [
        { type: "number", label: "Aantal" }
      ]
    },
    {
      title: "Jonge Koningin",
      disabled: true,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Leeftijd" }
      ]
    },
    {
      title: "Oude Koningin",
      disabled: true,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Reden" }
      ]
    }
  ]

function InspectionView() {
  const { inspectionId } = useParams()
  const [inspection, setInspection] = useState<Inspection | null>(null)

  useEffect(() => {
    if (inspectionId) {
      fetch(`/api/inspections/${inspectionId}`)
        .then(res => res.json())
        .then((json: ApiResponse<Inspection>) => setInspection(json.data))
    }
  }, [inspectionId])

  return (
    <div className="App">
      <Header
        title={`Inspectie #${inspectionId}`}
        description={inspection ? `Uitgevoerd op ${new Date(inspection.created_at).toLocaleString()}` : "Uitgevoerd op"}
      />

      <div className="Body">
        {SECTIONS.map(({ title, disabled, fields }) => (
          <Accordion
            key={title}
            title={title}
            disabled={disabled}
            fields={fields}
          />
        ))}
      </div>
    </div>
  )
}

export default InspectionView
