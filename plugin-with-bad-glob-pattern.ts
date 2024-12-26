import { CreateNodesV2 } from '@nx/devkit';

export const createNodesV2: CreateNodesV2 = [
  `apps/**/!(*-e2e)/project.json`,
  async () => {
    return [];
  },
];
