import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CodeEditorPanel from '@/components/GraphQl/CodeEditorPanel/CodeEditorPanel.tsx';
import { setupStore } from '@/store/store.ts';

describe('Code Editor Panel', () => {
  test('Code Editor Panel Render', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <CodeEditorPanel schema={undefined} isLoading={false} />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Write something...')).toBeInTheDocument();
  });
});
