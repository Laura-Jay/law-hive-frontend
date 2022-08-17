export interface FetchPostInterface {
  id: number;
  title: string;
  description: string;
  feestructure: string;
  feepercentage: number;
  settlementamount: number;
  feeamount: number;
  amountpaid: number;
  state: "Started" | "Paid";
  creationdate: Date;
}

export interface PostInterface {
  id: number;
  title: string;
  description: string;
  feeStructure: string;
  feePercentage: number;
  settlementAmount: number;
  feeAmount: number;
  amountPaid: number;
  state: "Started" | "Paid";
  creationDate: Date;
}

export interface CreatePostInterface {
  title: string;
  description: string;
  feeStructure: string;
  feePercentage?: string | number;
  feeAmount?: string | number;
  state: "Started" | "Paid";
}
