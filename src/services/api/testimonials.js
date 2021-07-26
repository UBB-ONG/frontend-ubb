import api from "./api";

async function list() {
  return await api.get("/testimonial");
}

export { list };
