import { Card, Header } from "../../components"

function HiveList() {
  return (
    <div className="App">
      <Header title="Bijen horen erbij" description="Kies jouw bijenkast" />
      <div className="Body">
        <Card
          name="Bijenkast 1"
          subname="Laatste inspectie"
          date="20/05/2025 20:00"
          buttons={[
            { type: "primary", text: "Bekijk kast", href: "/hives/1" },
            { type: "secondary", text: "Nieuwe inspectie", href: "/hives/1/inspections/new" }
          ]}
        />
        <Card
          name="Bijenkast 2"
          subname="Laatste inspectie"
          date="20/05/2025 20:00"
          buttons={[
            { type: "primary", text: "Bekijk kast", href: "/hives/2" },
            { type: "secondary", text: "Nieuwe inspectie", href: "/hives/1/inspections/new" }
          ]}
        />
        <Card
          name="Bijenkast 3"
          subname="Laatste inspectie"
          date="20/05/2025 20:00"
          buttons={[
            { type: "primary", text: "Bekijk kast", href: "/hives/3" },
            { type: "secondary", text: "Nieuwe inspectie", href: "/hives/1/inspections/new" }
          ]}
        />
      </div>
    </div>
  )
}

export default HiveList
