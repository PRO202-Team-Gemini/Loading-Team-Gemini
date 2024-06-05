import axios from "axios";
import { IPlayer } from "../interfaces/IPlayer";

const PlayerService = (() => {
  // playerController er en string som inneholder URL-en til API-et som brukes for å hente ut brukere
  const playerController = "http://localhost:5157/api/Players";
  // imageUrl
  //const imageUrl = "";

  // Promise<IPlayer[]> betyr at metoden returnerer en Promise som inneholder et array av IPlayer-objekter, og om det ikke er noen IPlayer-objekter, returneres et tomt array.
  const getAllPlayers = async (): Promise<IPlayer[]> => {
    try {
      const result = await axios.get(playerController);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const getPlayerById = async (id: number) => {
    try {
      const result = await axios.get(`${playerController}/${id}`);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };

  const postPlayer = async (newPlayer: any) => {
    try {
      const result = await axios.post(playerController, newPlayer);
      console.log(result);

      /* const formData = new FormData();
    formData.append("formFile", image);
    // Send image to web api
    const uploadResult = await axios({
        url: imageUploadController,
        method: 'POST',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'} // headers allows us to send form data
    });
    formData.delete('formFile'); */
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllPlayers,
    getPlayerById,
    postPlayer,
  };
})();

export default PlayerService;
