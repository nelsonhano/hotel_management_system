import ClientComponent from "./ClientComponent";
import { header1, section1 } from "./ServerComponent";

export default function HeroSection() {
  return (
    <ClientComponent section1={section1} header1={header1}/>
  )
}
