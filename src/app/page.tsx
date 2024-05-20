
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Sections from "@/components/Sections";
import Integrations from "@/components/Integrations";
import WhatsNew from "@/components/WhatsNew";
import ResultsAndRevenue from "@/components/ResultsAndRevenue";
import CustomersReview from "@/components/CustomersReview";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="bg-white container mx-auto" >
      <Header/>
      <Benefits/>
      <Sections/>
      <Integrations/>
      <WhatsNew/>
      <ResultsAndRevenue/>
      <CustomersReview/>
      <Form/>
    </main>
  );
}
