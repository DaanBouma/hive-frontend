import { useParams } from "react-router-dom"
import { Card, Header } from "../../components"
import { useEffect, useState } from "react"
import type { Hive, ApiResponse } from "../../types/api"

function HiveDetail() {
  const [hives, setHives] = useState<Hive[]>([])
  const { hiveId } = useParams()

  useEffect(() => {
    fetch(`/api/hive/${hiveId}/inspections`)
      .then(res => res.json())
      .then((json: ApiResponse<Hive[]>) =>
        setHives(Array.isArray(json.data) ? json.data : [])
      )
  }, [hiveId])

  return (
    <div className="App">
      <Header
        title={`Bijenkast ${hiveId}`}
        description="Inspecties" />
      <div className="Body">
        {hives.map((hive, index) => (
          <Card
            key={hive.id}
            name={`Inspectie #${index + 1}`}
            subname="Aangemaakt in"
            date={new Date(hive.created_at).toLocaleString()}
            buttons={[
              {
                type: "primary",
                text: "Bekijk",
                href: `/hives/${hiveId}/inspections/${hive.id}/${index + 1}`
              },
              {
                type: "secondary",
                text: "Bewerken",
                href: `/hives/${hiveId}/inspections/${hive.id}/${index + 1}/edit`
              }
            ]}
          />
        ))}

      </div>
    </div>
  )
}

export default HiveDetail
