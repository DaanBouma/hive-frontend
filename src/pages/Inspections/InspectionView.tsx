import { useParams } from "react-router-dom"
import { Header, Accordion } from "../../components"
import { useEffect, useState } from "react"
import type { ApiResponse } from "../../types/api"
import type { Field } from "../../types/form"

type Inspection = {
  behaviour: string | null
  queen_seen: boolean | null
  honeycomb_count: number | null
  windows_occupied: number | null
  BRIAS: number | null
  BRIAS_healthy: number | null
  invested_swarm_cells: number | null
  stock_food: number | null
  pollen: number | null
  mite_fall: number | null
}

type SectionConfig = {
  title: string
  fields: {
    key: keyof Inspection
    label: string
    type: Field["type"]
    format?: (value: any) => string
  }[]
}

const SECTIONS: SectionConfig[] = [
  {
    title: "Gedrag",
    fields: [
      { key: "behaviour", label: "Gedrag", type: "text" }
    ]
  },
  {
    title: "Koningin",
    fields: [
      {
        key: "queen_seen",
        label: "Koningin gezien",
        type: "text",
        format: v => (v === null ? "" : v ? "Ja" : "Nee")
      }
    ]
  },
  {
    title: "Broed",
    fields: [
      { key: "BRIAS", label: "BRIAS", type: "number" },
      { key: "BRIAS_healthy", label: "Gezonde BRIAS", type: "number" }
    ]
  },
  {
    title: "Kast bezetting",
    fields: [
      { key: "honeycomb_count", label: "Aantal raten", type: "number" },
      { key: "windows_occupied", label: "Bezetting ramen", type: "number" }
    ]
  },
  {
    title: "Zwermcellen",
    fields: [
      { key: "invested_swarm_cells", label: "Belegde zwermcellen", type: "number" }
    ]
  },
  {
    title: "Voedsel",
    fields: [
      { key: "stock_food", label: "Voedselvoorraad", type: "number" },
      { key: "pollen", label: "Stuifmeel", type: "number" }
    ]
  },
  {
    title: "Gezondheid",
    fields: [
      { key: "mite_fall", label: "Mijtval", type: "number" }
    ]
  }
]

function InspectionView() {
  const { inspectionNumber } = useParams<{ inspectionNumber: string }>()
  const [inspection, setInspection] = useState<Inspection | null>(null)

  useEffect(() => {
    fetch(`/api/inspection/${inspectionNumber}`)
      .then(res => res.json())
      .then((json: ApiResponse<Inspection>) =>
        setInspection(json.data ?? null)
      )
  }, [inspectionNumber])

  if (!inspection) return null

  return (
    <div className="App">
      <Header
        title={`Inspectie #${inspectionNumber}`}
        description="Uitgevoerd op 20/05/2025 20:00"
      />

      <div className="Body">
        {SECTIONS.map(section => {
          const fields: Field[] = section.fields.map(f => ({
            type: f.type,
            label: f.label,
            placeholder: f.format
              ? f.format(inspection[f.key])
              : inspection[f.key]?.toString() ?? "null"
          }))

          return (
            <Accordion
              key={section.title}
              title={section.title}
              disabled={true}
              fields={fields}
            />
          )
        })}
      </div>
    </div>
  )
}

export default InspectionView
