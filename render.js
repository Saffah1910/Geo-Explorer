import axios from "axios"

export default function displayData() {
  async function getPlayer(req, res) {
    const response = await axios.get("http://localhost:3030/api/names");

    var responseData = response.data

    res.render("leaderBoard", responseData)
  }
  
  async function getQuestions(req, res) {
    const response = await axios.get("http://localhost:3030/api/questions/:country");

    var questionData = response.data

    res.render("quiz", questionData)
  }

  async function getMoreInfo(req, res) {
    const response = await axios.get("http://localhost:3030/api/moreInfo");

    var moreInfoData = response.data

    res.render("moreInfo", moreInfoData);
  }

  return {
    getPlayer,
    getQuestions,
    getMoreInfo,
  };
}
