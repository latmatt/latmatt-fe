import { Group, Pagination as Pg, type PaginationProps } from '@mantine/core';
import { useParamsHelper } from '@hooks/useParamsHelper';

export function Pagination(props: PaginationProps) {
  const { getParam, setParams } = useParamsHelper();
  const value = parseInt(getParam('pageIndex') || '1', 10);

  const handleChange = (page: number) => {
    setParams({
      pageSize: '10',
      pageIndex: page.toString(),
    });
  };

  return (
    <Group p="md" position="right">
      <Pg {...props} onChange={handleChange} value={value} />
    </Group>
  );
}
