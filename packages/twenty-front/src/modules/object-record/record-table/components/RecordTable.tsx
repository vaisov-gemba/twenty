import styled from '@emotion/styled';
import { isNonEmptyString } from '@sniptt/guards';

import { useRecordGroupEnabled } from '@/object-record/record-group/hooks/useRecordGroupEnabled';
import { RecordGroupTableScope } from '@/object-record/record-group/record-group-table/components/RecordGroupTableScope';
import { RecordTableContextProvider } from '@/object-record/record-table/components/RecordTableContextProvider';
import { RecordTableEmptyState } from '@/object-record/record-table/empty-state/components/RecordTableEmptyState';
import { RecordTableEmptyStateHandler } from '@/object-record/record-table/empty-state/components/RecordTableEmptyStateHandler';
import { RecordTableBody } from '@/object-record/record-table/record-table-body/components/RecordTableBody';
import { RecordTableBodyEffect } from '@/object-record/record-table/record-table-body/components/RecordTableBodyEffect';
import { RecordTableHeader } from '@/object-record/record-table/record-table-header/components/RecordTableHeader';
import { RecordTableScope } from '@/object-record/record-table/scopes/RecordTableScope';

const StyledTable = styled.table`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
`;

type RecordTableProps = {
  viewBarId: string;
  recordTableId: string;
  objectNameSingular: string;
  onColumnsChange: (columns: any) => void;
};

export const RecordTable = ({
  viewBarId,
  recordTableId,
  objectNameSingular,
  onColumnsChange,
}: RecordTableProps) => {
  const { isEnabled: isRecordGroupEnabled } = useRecordGroupEnabled();

  if (!isNonEmptyString(objectNameSingular)) {
    return <></>;
  }

  return (
    <RecordTableScope
      recordTableId={recordTableId}
      onColumnsChange={onColumnsChange}
    >
      <RecordTableContextProvider
        objectNameSingular={objectNameSingular}
        recordTableId={recordTableId}
        viewBarId={viewBarId}
      >
        {!isRecordGroupEnabled ? (
          /**
           * Classic record table
           */
          <>
            <RecordTableBodyEffect />
            <RecordTableEmptyStateHandler
              recordTableId={recordTableId}
              emptyStateComponent={<RecordTableEmptyState />}
            >
              <StyledTable className="entity-table-cell">
                <RecordTableHeader
                  objectMetadataNameSingular={objectNameSingular}
                />
                <RecordTableBody />
              </StyledTable>
            </RecordTableEmptyStateHandler>
          </>
        ) : (
          /**
           * Record group table
           */
          <StyledTable className="entity-table-cell">
            <RecordTableHeader
              objectMetadataNameSingular={objectNameSingular}
            />
            <RecordGroupTableScope objectNameSingular={objectNameSingular}>
              <RecordTableBodyEffect />
              <RecordTableBody />
            </RecordGroupTableScope>
          </StyledTable>
        )}
      </RecordTableContextProvider>
    </RecordTableScope>
  );
};
