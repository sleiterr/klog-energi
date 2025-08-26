export enum Status {
  Active = "I drift",
  Pending = "Under udvikling",
  NotActive = "Planlagt",
}

export const labelByStatus: Record<Status, string> = {
  [Status.Active]: "I drift",
  [Status.Pending]: "Under udvikling",
  [Status.NotActive]: "Planlagt",
};
