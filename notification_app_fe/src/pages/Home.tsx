import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import { useEffect, useState } from "react";

import { getNotifications } from "../services/api";

import type { Notification } from "../types/notification";

import NotificationCard from "../components/NotificationCard";

import { sortNotifications } from "../utils/priority";

const Home = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getNotifications();

    const sorted = sortNotifications(data);

    setNotifications(sorted);
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (n) => n.Type === filter
        );

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ my: 3 }}
      >
        Campus Notifications
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <MenuItem value="All">
            All
          </MenuItem>

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
      </Box>

      {filteredNotifications.map((n) => (
        <NotificationCard
          key={n.ID}
          title={n.Message}
          type={n.Type}
          time={n.Timestamp}
        />
      ))}
    </Container>
  );
};

export default Home;