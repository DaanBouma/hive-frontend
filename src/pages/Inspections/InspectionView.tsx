import { useParams } from "react-router-dom"
import { Header, Accordion } from "../../components"
import type { Field } from "../../types/form"

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

  return (
    <div className="App">
      <Header
        title={`Inspectie #${inspectionId}`}
        description="Uitgevoerd op 20/05/2025 20:00"
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
