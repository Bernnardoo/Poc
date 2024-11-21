import Room from "./Room";
import Film from "./Film";
export default function Content({ data }) {
  return (
    <main className="film">
      <Room data={data} />
      <Film data={data} />
    </main>
  );
}
