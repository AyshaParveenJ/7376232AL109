import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export const getNotifications =
  async () => {
    const response = await axios.get(
      `${BASE_URL}/notifications`
    );

    return response.data.notifications;
  };