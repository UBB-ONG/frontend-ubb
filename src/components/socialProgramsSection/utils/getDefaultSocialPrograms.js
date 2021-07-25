import lapenaProgramImage from "../../../assets/images/lapenaProgram.png";
import vilaNovaProgramImage from "../../../assets/images/vilaNovaProgram.png";
import itaquaquecetubaProgramImage from "../../../assets/images/itaquaquecetubaProgram.png";

function getDefaultSocialPrograms() {
  return [
    {
      id: "1",
      title: "Comunidade Lapena",
      descripton:
        "Ajudamos pessoas da comunidade Lapena em rodas de conversas sobre direitos sociais e habitação.",
      imageUrl: lapenaProgramImage,
    },
    {
      id: "2",
      title: "União de Vila Nova",
      descripton:
        "Estamos sempre ajudando a comunidade União de vila nova, com suprimentos, cestas basicas e cursos gratuitos.",
      imageUrl: vilaNovaProgramImage,
    },
    {
      id: "3",
      title: "Itaquaquecetuba",
      descripton:
        "Realização de cadastramento para o recebimento de cestas básicas e palestras de conscientização de doações.",
      imageUrl: itaquaquecetubaProgramImage,
    },
  ];
}

export default getDefaultSocialPrograms;
