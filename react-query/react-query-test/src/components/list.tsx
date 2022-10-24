import {
  useQuery,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { queryTags } from '../utils/constants';
import { appendPage } from '../utils/handelData';

const List = () => {
  const queryClient = useQueryClient();

  const { data, isError, error } = useInfiniteQuery([queryTags.peapole], () => {
    appendPage(1);
  });

  console.log('data', data);
  console.log('isError', isError);
  console.log('error', error);

  return <div>List</div>;
};

export default List;
