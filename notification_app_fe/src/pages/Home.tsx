import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useEffect, useState } from "react";

import { getNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";
export default function Home() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getNotifications();

      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Campus Notifications
        </Typography>

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ mb: 3, minWidth: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Placement">
            Placement
          </MenuItem>
          <MenuItem value="Result">
            Result
          </MenuItem>
          <MenuItem value="Event">
            Event
          </MenuItem>
        </Select>

        {filteredNotifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        ))}
      </Box>
    </Container>
  );
}