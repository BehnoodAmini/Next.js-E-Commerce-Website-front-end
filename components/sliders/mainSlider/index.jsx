import SliderDetails from "./sliderDetails";

const getData = async () => {
  const data= await fetch("http://localhost:27017/api/get-active-sliders", {cache: "no-store"})
  return data.json();
}

const MainSlider = async () => {
  const data = await getData();

  return (
    <SliderDetails data={data}/>
  );
}

export default MainSlider;