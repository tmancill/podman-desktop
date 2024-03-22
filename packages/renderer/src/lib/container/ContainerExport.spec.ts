/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

/* eslint-disable @typescript-eslint/no-explicit-any */

import '@testing-library/jest-dom/vitest';

import type { Uri } from '@podman-desktop/api';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { router } from 'tinro';
import { beforeAll, beforeEach, expect, test, vi } from 'vitest';

import { exportContainerInfo } from '/@/stores/export-container-store';

import ContainerExport from './ContainerExport.svelte';
import type { ContainerInfoUI } from './ContainerInfoUI';

const container: ContainerInfoUI = {
  engineId: 'engine',
  id: 'id',
  name: 'test',
} as ContainerInfoUI;

const saveDialogMock = vi.fn();
const exportContainerMock = vi.fn();

// fake the window.events object
beforeAll(() => {
  (window as any).saveDialog = saveDialogMock;
  (window as any).exportContainer = exportContainerMock;
});

beforeEach(() => {
  vi.clearAllMocks();
});

async function waitRender(): Promise<void> {
  const result = render(ContainerExport);
  // wait that result.component.$$.ctx[1] is set
  while (result.component.$$.ctx[1] === undefined) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

test('Expect export button to be disabled', async () => {
  exportContainerInfo.set(container);
  await waitRender();
  const btnExportcontainer = screen.getByRole('button', { name: 'Export container' });
  expect(btnExportcontainer).toBeInTheDocument();
  expect(btnExportcontainer).toBeDisabled();
});

test('Expect export button to be enabled when output target is selected', async () => {
  exportContainerInfo.set(container);
  saveDialogMock.mockResolvedValue({ scheme: 'file', path: '/tmp/my/path' } as Uri);
  await waitRender();
  const btnSelectOutputDir = screen.getByRole('button', { name: 'Select output file' });
  expect(btnSelectOutputDir).toBeInTheDocument();
  await userEvent.click(btnSelectOutputDir);

  const btnExportcontainer = screen.getByRole('button', { name: 'Export container' });
  expect(btnExportcontainer).toBeInTheDocument();
  expect(btnExportcontainer).toBeEnabled();
});

test('Expect export function called when export button is clicked', async () => {
  exportContainerInfo.set(container);
  saveDialogMock.mockResolvedValue({ scheme: 'file', path: '/tmp/my/path' } as Uri);
  exportContainerMock.mockResolvedValue('');
  const goToMock = vi.spyOn(router, 'goto');
  await waitRender();
  const btnSelectOutputDir = screen.getByRole('button', { name: 'Select output file' });
  expect(btnSelectOutputDir).toBeInTheDocument();
  await userEvent.click(btnSelectOutputDir);

  const btnExportcontainer = screen.getByRole('button', { name: 'Export container' });
  expect(btnExportcontainer).toBeInTheDocument();
  await userEvent.click(btnExportcontainer);

  expect(exportContainerMock).toBeCalledWith(container.engineId, {
    id: container.id,
    outputTarget: '/tmp/my/path',
  });
  expect(goToMock).toBeCalledWith('/containers/');
});

test('Expect error shown if export function fails', async () => {
  exportContainerInfo.set(container);
  saveDialogMock.mockResolvedValue({ scheme: 'file', path: '/tmp/my/path' } as Uri);
  exportContainerMock.mockRejectedValue('error while exporting');
  const goToMock = vi.spyOn(router, 'goto');
  await waitRender();
  const btnSelectOutputDir = screen.getByRole('button', { name: 'Select output file' });
  expect(btnSelectOutputDir).toBeInTheDocument();
  await userEvent.click(btnSelectOutputDir);

  const btnExportcontainer = screen.getByRole('button', { name: 'Export container' });
  expect(btnExportcontainer).toBeInTheDocument();
  await userEvent.click(btnExportcontainer);

  const errorDiv = screen.getByLabelText('Error Message Content');

  expect(exportContainerMock).toBeCalledWith(container.engineId, {
    id: container.id,
    outputTarget: '/tmp/my/path',
  });
  expect(goToMock).not.toBeCalled();
  expect(errorDiv).toBeInTheDocument();
  expect((errorDiv as HTMLDivElement).innerHTML).toContain('error while exporting');
});
