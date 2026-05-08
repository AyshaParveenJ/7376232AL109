import type { Notification } from "../types/notification";

export const getPriority = (type: string) => {
  switch (type) {
    case "Placement":
      return 3;

    case "Result":
      return 2;

    case "Event":
      return 1;

    default:
      return 0;
  }
};

export const sortNotifications = (
  notifications: Notification[]
) => {
  return notifications.sort((a, b) => {
    const priorityDiff =
      getPriority(b.Type) -
      getPriority(a.Type);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return (
      new Date(b.Timestamp).getTime() -
      new Date(a.Timestamp).getTime()
    );
  });
};