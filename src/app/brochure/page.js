import "../globals.css";
import Header from "../header";
import Body from "../body";
export default function Home() {
  return (
    <div className="text-green-700 md:grid md:grid-cols-5">
      <div className="text-cyan-950 text-xl md:col-span-1 sticky top-0 bg-white">
          <h1 className="p-5 reddit-mono-lol">Nile Medical</h1>
          <Header pageName={"brochure"}/>
        </div>

      <div className="md:col-span-4 bg-cyan-950 min-h-screen md:rounded-tl-3xl p-5">
        <Body pageName={"brochure"}/>
      </div>
    </div>
  );
}
