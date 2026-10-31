import type { Metadata } from "next"
import { InfrastructurePage } from "./_components/infrastructure-page"

export const metadata: Metadata = {
    title: "Manufacturing & Operations",
    description:
        "Ask about current facility, equipment, capacity, quality, and production details for your project.",
}

export default function Page() {
    return <InfrastructurePage />
}
