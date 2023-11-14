import { useMemo } from 'react';
import { Group, Space, Title } from '@mantine/core';
import { MantineReactTable, type MRT_TableOptions } from 'mantine-react-table';
import { Card } from '@components/common';
import { Pagination } from './Pagination';

interface TableProps {
  actions?: React.ReactElement;
  title?: string;
  total?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<TData extends Record<string, any> = object>({
  actions,
  title,
  total = 0,
  ...props
}: TableProps & MRT_TableOptions<TData>) {
  const totalPage = useMemo(() => {
    return total / 10 + (total % 10 === 0 ? 0 : 1);
  }, [total]);

  return (
    <Card>
      {actions}
      <MantineReactTable
        initialState={{ density: 'xs' }}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableDensityToggle={false}
        enableFilters={false}
        enableFullScreenToggle={false}
        positionActionsColumn="last"
        enableHiding={false}
        mantineTableProps={{
          highlightOnHover: true,
        }}
        renderTopToolbarCustomActions={() => (
          <Group mb="md" position="apart">
            {title && <Title order={4}>{title}</Title>}
          </Group>
        )}
        mantinePaperProps={{
          radius: 'md',
          shadow: 'none',
          sx: { overflow: 'auto' },
          withBorder: false,
        }}
        mantineTableBodyCellProps={{
          fw: 500,
          sx: { color: '#172B4D' },
        }}
        {...props}
      />
      <Pagination total={totalPage} />
    </Card>
  );
}
