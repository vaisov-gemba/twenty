import { Injectable } from '@nestjs/common';

import { ObjectRecord } from 'src/engine/api/graphql/workspace-query-builder/interfaces/object-record.interface';
import { ObjectMetadataInterface } from 'src/engine/metadata-modules/field-metadata/interfaces/object-metadata.interface';

import { DatabaseEventAction } from 'src/engine/api/graphql/graphql-query-runner/enums/database-event-action';
import { AuthContext } from 'src/engine/core-modules/auth/types/auth-context.type';
import { objectRecordChangedValues } from 'src/engine/core-modules/event-emitter/utils/object-record-changed-values';
import { WorkspaceEventEmitter } from 'src/engine/workspace-event-emitter/workspace-event-emitter';

@Injectable()
export class ApiEventEmitterService {
  constructor(private readonly workspaceEventEmitter: WorkspaceEventEmitter) {}

  public emitCreateEvents<T extends ObjectRecord>(
    records: T[],
    authContext: AuthContext,
    objectMetadataItem: ObjectMetadataInterface,
  ): void {
    this.workspaceEventEmitter.emit(
      `${objectMetadataItem.nameSingular}.${DatabaseEventAction.CREATED}`,
      records.map((record) => ({
        userId: authContext.user?.id,
        recordId: record.id,
        objectMetadata: objectMetadataItem,
        properties: {
          before: null,
          after: record,
        },
      })),
      authContext.workspace.id,
    );
  }

  public emitUpdateEvents<T extends ObjectRecord>(
    existingRecords: T[],
    records: T[],
    updatedFields: string[],
    authContext: AuthContext,
    objectMetadataItem: ObjectMetadataInterface,
  ): void {
    const mappedExistingRecords = existingRecords.reduce(
      (acc, { id, ...record }) => ({
        ...acc,
        [id]: record,
      }),
      {},
    );

    this.workspaceEventEmitter.emit(
      `${objectMetadataItem.nameSingular}.${DatabaseEventAction.UPDATED}`,
      records.map((record) => {
        const before = mappedExistingRecords[record.id];
        const after = record;
        const diff = objectRecordChangedValues(
          before,
          after,
          updatedFields,
          objectMetadataItem,
        );

        return {
          userId: authContext.user?.id,
          recordId: record.id,
          objectMetadata: objectMetadataItem,
          properties: {
            before,
            after,
            updatedFields,
            diff,
          },
        };
      }),
      authContext.workspace.id,
    );
  }

  public emitDeletedEvents<T extends ObjectRecord>(
    records: T[],
    authContext: AuthContext,
    objectMetadataItem: ObjectMetadataInterface,
  ): void {
    this.workspaceEventEmitter.emit(
      `${objectMetadataItem.nameSingular}.${DatabaseEventAction.DELETED}`,
      records.map((record) => {
        return {
          userId: authContext.user?.id,
          recordId: record.id,
          objectMetadata: objectMetadataItem,
          properties: {
            before: record,
            after: null,
          },
        };
      }),
      authContext.workspace.id,
    );
  }

  public emitRestoreEvents<T extends ObjectRecord>(
    records: T[],
    authContext: AuthContext,
    objectMetadataItem: ObjectMetadataInterface,
  ): void {
    this.workspaceEventEmitter.emit(
      `${objectMetadataItem.nameSingular}.${DatabaseEventAction.RESTORED}`,
      records.map((record) => {
        return {
          userId: authContext.user?.id,
          recordId: record.id,
          objectMetadata: objectMetadataItem,
          properties: {
            before: null,
            after: record,
          },
        };
      }),
      authContext.workspace.id,
    );
  }

  public emitDestroyEvents<T extends ObjectRecord>(
    records: T[],
    authContext: AuthContext,
    objectMetadataItem: ObjectMetadataInterface,
  ): void {
    this.workspaceEventEmitter.emit(
      `${objectMetadataItem.nameSingular}.${DatabaseEventAction.DESTROYED}`,
      records.map((record) => {
        return {
          userId: authContext.user?.id,
          recordId: record.id,
          objectMetadata: objectMetadataItem,
          properties: {
            before: record,
            after: null,
          },
        };
      }),
      authContext.workspace.id,
    );
  }
}
