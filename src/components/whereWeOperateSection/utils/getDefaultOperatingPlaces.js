import lapenaPicture from "../../../assets/images/lapenaPicture.png";
import vilaNovaPicture from "../../../assets/images/vilaNovaPicture.png";

export default function getDefaultOperatingPlaces() {
  return [
    {
      id: 1,
      imageUrl: lapenaPicture,
      title: "Jardim Lapena, São Paulo - SP",
    },
    {
      id: 2,
      imageUrl: vilaNovaPicture,
      title: "União de Vila Nova, São Paulo - SP",
    },
  ];
}
