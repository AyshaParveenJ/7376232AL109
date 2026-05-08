import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function NotificationCard({
  notification,
}: any) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography>
          Type: {notification.Type}
        </Typography>

        <Typography>
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}