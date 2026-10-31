import { HeroSection } from "./hero-section"
import { SampleRequest } from "./sample-request"
import { SegmentGrid } from "./segment-grid"
import { SustainabilityPanel } from "./sustainability-panel"

export function HomePage() {
    return (
        <main className="w-full">
            <HeroSection />
            <SegmentGrid />
            <SustainabilityPanel />
            <SampleRequest />
        </main>
    )
}
