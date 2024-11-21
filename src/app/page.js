import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";
export default function Home() {


  return (
    <>
    <Header data={data}/>
    <Content data={data}/>
    </>
  );
}
