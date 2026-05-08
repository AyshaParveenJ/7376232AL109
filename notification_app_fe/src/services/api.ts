import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJheXNoYXBhcnZlZW4uakBnbWFpbC5jb20iLCJleHAiOjE3NzgyMzk4MjcsImlhdCI6MTc3ODIzODkyNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjM2MGIzMTVkLTQzNzctNDg1My1iNjkxLTMxYjgyYWRkMDBjOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImF5c2hhIHBhcnZlZW4gaiIsInN1YiI6IjAxYmE3ZDFjLTFiMjEtNGM2OS1hNmZkLWNmNzFjOGY2NWNmYSJ9LCJlbWFpbCI6ImF5c2hhcGFydmVlbi5qQGdtYWlsLmNvbSIsIm5hbWUiOiJheXNoYSBwYXJ2ZWVuIGoiLCJyb2xsTm8iOiI3Mzc2MjMyYWwxMDkiLCJhY2Nlc3NDb2RlIjoidUthSmZtIiwiY2xpZW50SUQiOiIwMWJhN2QxYy0xYjIxLTRjNjktYTZmZC1jZjcxYzhmNjVjZmEiLCJjbGllbnRTZWNyZXQiOiJOc3pOVFRQUnh4SEFqcEhZIn0.foyu2iQaumIp_F8s85BYYgXMvTi2QVsmKjPUDRaiX_Y";

const API = axios.create({
  baseURL:
    "http://4.224.186.213/evaluation-service",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getNotifications =
  async () => {
    const response = await API.get(
      "/notifications"
    );

    return response.data.notifications;
  };