import {
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiDataGrid,
  EuiText,
} from '@elastic/eui';
import { useCallback, useContext, useState } from 'react';
import { IndicatorsContext } from '../../context/indicators';

const gridStyle = {
  border: 'horizontal',
  header: 'underline',
  cellPadding: 'm',
  fontSize: 's',
} as const;

const columns = [
  {
    id: '@timestamp',
    displayAsText: '@timestamp',
  },
  {
    id: 'threat.indicator.name',
    displayAsText: 'Indicator',
  },
  {
    id: 'threat.indicator.type',
    displayAsText: 'Type',
  },
  {
    id: 'threat.feed.name',
    displayAsText: 'Feed',
  },
  {
    id: 'threat.indicator.first_seen',
    displayAsText: 'First seen',
  },
  {
    id: 'threat.indicator.last_seen',
    displayAsText: 'Last seen',
  },
];

export const IndicatorsTable = () => {
  // Pagination
  const { indicators, setIndicators } = useContext(IndicatorsContext);
  let indicatorsToRender = indicators.slice();
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const onChangeItemsPerPage = useCallback(
    pageSize =>
      setPagination(pagination => ({
        ...pagination,
        pageSize,
        pageIndex: 0,
      })),
    [setPagination]
  );
  const onChangePage = useCallback(
    pageIndex => setPagination(pagination => ({ ...pagination, pageIndex })),
    [setPagination]
  );

  // Sorting
  const compare = (field, direction) => {
    return (a, b) => {
      if (b.fields[field] === undefined) {
        return -1;
      }

      if (a.fields[field] === b.fields[field]) {
        return 0;
      }

      if (direction === 'asc' && a.fields[field] < b.fields[field]) {
        return -1;
      }

      if (direction === 'desc' && a.fields[field] > b.fields[field]) {
        return -1;
      }

      if (direction === 'asc' && a.fields[field] > b.fields[field]) {
        return 1;
      }

      if (direction === 'desc' && a.fields[field] < b.fields[field]) {
        return 1;
      }
    };
  };
  const [sortingColumns, setSortingColumns] = useState([]);
  const onSort = useCallback(
    sortingColumns => {
      if (sortingColumns.length <= 1) {
        setSortingColumns(sortingColumns);
      } else {
        alert('multi column sort is not supported');
      }
    },
    [setSortingColumns]
  );

  if (sortingColumns.length === 0) {
    indicatorsToRender = indicators.slice();
  }

  if (sortingColumns.length === 1) {
    indicatorsToRender.sort(
      compare(sortingColumns[0].id, sortingColumns[0].direction)
    );
  }

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map(({ id }) => id) // initialize to the full set of columns
  );

  const renderCellValue = ({ rowIndex, columnId }) => {
    return indicatorsToRender[rowIndex].fields[columnId]
      ? indicatorsToRender[rowIndex].fields[columnId]
      : '-';
  };

  const indicatorCount = indicatorsToRender.length;
  const start = pagination.pageIndex * pagination.pageSize;
  const end = start + pagination.pageSize;

  return (
    <EuiDataGrid
      aria-labelledby="Indicators table"
      leadingControlColumns={[
        {
          id: 'Actions',
          width: 72,
          headerCellRender: () => <>Actions</>,
          rowCellRender: () => <></>,
        },
      ]}
      rowCount={indicatorCount}
      renderCellValue={renderCellValue}
      pagination={{
        ...pagination,
        pageSizeOptions: [10, 25, 50],
        onChangeItemsPerPage: onChangeItemsPerPage,
        onChangePage: onChangePage,
      }}
      columns={columns}
      columnVisibility={{
        visibleColumns,
        setVisibleColumns,
      }}
      sorting={{ columns: sortingColumns, onSort }}
      gridStyle={gridStyle}
      toolbarVisibility={{
        showDisplaySelector: false,
        showFullScreenSelector: true,
        additionalControls: {
          left: {
            prepend: (
              <EuiText style={{ display: 'inline' }} size="xs">
                {indicatorCount && end ? (
                  <>
                    Showing {start + 1}-
                    {end > indicatorCount ? indicatorCount : end} of{' '}
                    {indicatorCount} indicators
                  </>
                ) : (
                  <>-</>
                )}
              </EuiText>
            ),
            append: (
              <EuiButtonEmpty
                color="text"
                data-test-subj="show-field-browser"
                iconType="tableOfContents"
                onClick={() => {
                  alert('show field browser');
                }}
                size="xs">
                Fields
              </EuiButtonEmpty>
            ),
          },
          right: (
            <EuiButtonIcon
              iconType="inspect"
              title={'Inspect'}
              onClick={() => {
                alert('Inspect');
              }}
            />
          ),
        },
      }}
    />
  );
};
