import { RouterBroker } from '@api/abstract/abstract.router';
import { Router } from 'express';

import { webhookController } from './webhook.controller';

export class WebhookRouter extends RouterBroker {
  constructor() {
    super();
    this.router.post('/evolution', async (req, res) => {
      return webhookController.receiveWebhook(req, res);
    });
  }

  public readonly router: Router = Router();
}
