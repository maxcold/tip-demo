import {
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiDataGrid,
  EuiText,
} from '@elastic/eui';
import { useCallback, useState } from 'react';

import { indicators as rawIndicators } from '../../lib/ti_data';

const gridStyle = {
  border: 'horizontal',
  header: 'underline',
  cellPadding: 'm',
  fontSize: 's',
} as const;

const generateMockBaseIndicator = () => ({
  fields: {
    '@timestamp': ['2022-01-01T01:01:01.000Z'],
    'threat.indicator.first_seen': ['2022-01-01T01:01:01.000Z'],
    'threat.feed.name': ['[Filebeat] AbuseCH Malware'],
  },
  _id: Math.random(),
});

export const generateMockIndicator = () => {
  const indicator = generateMockBaseIndicator();

  indicator.fields['threat.indicator.type'] = ['type'];
  indicator.fields['threat.indicator.ip'] = ['0.0.0.0'];
  indicator.fields['threat.indicator.name'] = ['0.0.0.0'];

  return indicator;
};

const flattenObj = (ob) => {

  // The object which contains the
  // final result
  const result = {};

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        // Store temp in result
        result[`${i}.${j}`] = temp[j];
      }
    }

    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};

//const indicators = Array(100).fill(generateMockIndicator());
const indicators = rawIndicators.map(rawIndicator => {
  return {
    _id: Math.random(),
    fields: { ...flattenObj(rawIndicator) },
  };
});

console.log(indicators)

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
  const [sortingColumns, setSortingColumns] = useState([]);
  const onSort = useCallback(
    sortingColumns => {
      setSortingColumns(sortingColumns);
    },
    [setSortingColumns]
  );

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map(({ id }) => id) // initialize to the full set of columns
  );

  const renderCellValue = useCallback(({ rowIndex, columnId }) => {
    return indicators[rowIndex].fields[columnId]
      ? indicators[rowIndex].fields[columnId]
      : '-';
  }, []);

  const indicatorCount = indicators.length;
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
