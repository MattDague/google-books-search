import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/searchbooks", { params: { q: query } });
  }
};
