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
      disabled: false,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Aantal" }
      ]
    },
    {
      title: "HK-Ramen",
      disabled: false,
      fields: [
        { type: "number", label: "Aantal" }
      ]
    },
    {
      title: "BK-Ramen",
      disabled: false,
      fields: [
        { type: "number", label: "Aantal" }
      ]
    },
    {
      title: "Jonge Koningin",
      disabled: false,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Leeftijd" }
      ]
    },
    {
      title: "Oude Koningin",
      disabled: false,
      fields: [
        { type: "text", label: "Ras" },
        { type: "text", label: "Reden" }
      ]
    }
  ]

function InspectionForm() {
  const { inspectionId } = useParams()

  return (
    <div className="App">
      <Header
        title={`Inspectie #${inspectionId}`}
        description="Bewerk inspectie"
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

export default InspectionForm
