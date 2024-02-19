import { DailyDetailModel } from "./DailyDetailModel";

export interface DailyModel {
  list: DailyDetailModel[];
}

export const EmptyDailyModel = {
  list: []
};
