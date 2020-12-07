export interface Inventory extends Array<Status> {
  available: Status;
  pending: Status;
  sold: Status;
}

export interface Status {
  status: string;
  count: number;
}
