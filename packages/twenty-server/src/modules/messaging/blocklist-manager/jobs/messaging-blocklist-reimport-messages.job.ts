import { Logger } from '@nestjs/common';

import { Process } from 'src/engine/integrations/message-queue/decorators/process.decorator';
import { Processor } from 'src/engine/integrations/message-queue/decorators/processor.decorator';
import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';

export type BlocklistReimportMessagesJobData = {
  workspaceId: string;
  workspaceMemberId: string;
  handle: string;
};

@Processor(MessageQueue.messagingQueue)
export class BlocklistReimportMessagesJob {
  private readonly logger = new Logger(BlocklistReimportMessagesJob.name);

  constructor(
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
  ) {}

  @Process()
  async handle(data: BlocklistReimportMessagesJobData): Promise<void> {
    const { workspaceId, workspaceMemberId, handle } = data;

    this.logger.log(
      `Reimporting messages from handle ${handle} in workspace ${workspaceId} for workspace member ${workspaceMemberId}`,
    );

    const connectedAccount =
      await this.connectedAccountRepository.getAllByWorkspaceMemberId(
        workspaceMemberId,
        workspaceId,
      );

    if (!connectedAccount || connectedAccount.length === 0) {
      this.logger.error(
        `No connected account found for workspace member ${workspaceMemberId} in workspace ${workspaceId}`,
      );

      return;
    }

    // TODO: reimplement that
    // await this.gmailMessageListFetchJob.fetchConnectedAccountThreads(
    //   workspaceId,
    //   connectedAccount[0].id,
    //   [handle],
    // );

    this.logger.log(
      `Reimporting messages from ${handle} in workspace ${workspaceId} for workspace member ${workspaceMemberId} done`,
    );
  }
}