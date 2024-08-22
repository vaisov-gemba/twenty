import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { WorkspaceDataSourceService } from 'src/engine/workspace-datasource/workspace-datasource.service';
import { WorkspaceEventBatch } from 'src/engine/workspace-event-emitter/workspace-event.type';
import { CalendarEventParticipantWorkspaceEntity } from 'src/modules/calendar/common/standard-objects/calendar-event-participant.workspace-entity';
import { TimelineActivityRepository } from 'src/modules/timeline/repositiories/timeline-activity.repository';
import { TimelineActivityWorkspaceEntity } from 'src/modules/timeline/standard-objects/timeline-activity.workspace-entity';

@Injectable()
export class CalendarEventParticipantListener {
  constructor(
    @InjectObjectMetadataRepository(TimelineActivityWorkspaceEntity)
    private readonly timelineActivityRepository: TimelineActivityRepository,
    private readonly workspaceDataSourceService: WorkspaceDataSourceService,
    @InjectRepository(ObjectMetadataEntity, 'metadata')
    private readonly objectMetadataRepository: Repository<ObjectMetadataEntity>,
  ) {}

  @OnEvent('calendarEventParticipant.matched')
  public async handleCalendarEventParticipantMatchedEvent(
    payload: WorkspaceEventBatch<{
      workspaceMemberId: string;
      participants: CalendarEventParticipantWorkspaceEntity[];
    }>,
  ): Promise<void> {
    const workspaceId = payload.workspaceId;

    // TODO: Refactor to insertTimelineActivitiesForObject once
    for (const eventPayload of payload.events) {
      const calendarEventParticipants = eventPayload.participants;
      const workspaceMemberId = eventPayload.workspaceMemberId;

      // TODO: move to a job?

      const dataSourceSchema =
        this.workspaceDataSourceService.getSchemaName(workspaceId);

      const calendarEventObjectMetadata =
        await this.objectMetadataRepository.findOneOrFail({
          where: {
            nameSingular: 'calendarEvent',
            workspaceId,
          },
        });

      const calendarEventParticipantsWithPersonId =
        calendarEventParticipants.filter((participant) => participant.personId);

      if (calendarEventParticipantsWithPersonId.length === 0) {
        continue;
      }

      await this.timelineActivityRepository.insertTimelineActivitiesForObject(
        'person',
        calendarEventParticipantsWithPersonId.map((participant) => ({
          dataSourceSchema,
          name: 'calendarEvent.linked',
          properties: null,
          objectName: 'calendarEvent',
          recordId: participant.personId,
          workspaceMemberId,
          workspaceId,
          linkedObjectMetadataId: calendarEventObjectMetadata.id,
          linkedRecordId: participant.calendarEventId,
          linkedRecordCachedName: '',
        })),
        workspaceId,
      );
    }
  }
}
