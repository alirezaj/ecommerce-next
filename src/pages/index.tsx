import Header from "@/components/header";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <main className="p-2">
        {/* Home  */}
        <Banner />
      </main>
    </div>
  );
}
