import { Logger } from '@config/logger.config';
import { Request, Response } from 'express';

const logger = new Logger('WebhookController');

export class WebhookController {
  public async receiveWebhook(req: Request, res: Response): Promise<void> {
    try {
      const payload = req.body;

      logger.log(`Webhook event received: ${JSON.stringify(payload)}`);

      res.status(200).json({
        status: 200,
        message: 'Webhook received successfully',
        data: payload,
      });
    } catch (error) {
      logger.error(`Error processing webhook event: ${error}`);

      res.status(500).json({
        status: 500,
        message: 'Internal server error while processing webhook',
      });
    }
  }
}

export const webhookController = new WebhookController();
