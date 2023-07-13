import { Header } from "@/components/header/header";
import { Card } from "@/components/catalog/card";
import { PageTitle } from "@/components/page-title/page-title";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="px-16">
        <Header title="Hello Sandbox" />
        <PageTitle />
        <Card />
        <Footer />
      </div>
    </>
  );
}
