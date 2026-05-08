import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  type: string;
  time: string;
}

const NotificationCard = ({
  title,
  type,
  time,
}: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {title}
        </Typography>

        <Typography>
          Type: {type}
        </Typography>

        <Typography>
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;