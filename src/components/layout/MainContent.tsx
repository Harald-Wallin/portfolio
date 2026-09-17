import ProfileSummary from "../profile/ProfileSummary";
import CareerFacts from "../profile/CareerFacts";
import PresentationVideo from "../profile/PresentationVideo";

export default function MainContent() {
  return (
    <main className="main-content">
      <ProfileSummary />
      <CareerFacts />
      <PresentationVideo />
    </main>
  );
}