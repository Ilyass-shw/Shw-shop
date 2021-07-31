import { DataItem } from '../../../helpers/types';

export const filterWithCategory = (
  data: DataItem[],
  category: string,
): DataItem[] => {
  return data.filter((item: DataItem) => {
    return item.category === category;
  });
};
