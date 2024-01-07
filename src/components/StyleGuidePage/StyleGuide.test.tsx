import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';
import StyleGuide from '@/components/StyleGuidePage/StyleGuide.tsx';
describe('Style Guide', () => {
  test('Check Style Guide render', async () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <StyleGuide />
        </Provider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Base Button')).toBeInTheDocument();
    expect(await screen.findByText('Red Neon Button')).toBeInTheDocument();
    expect(await screen.findByText('Blue Neon Button')).toBeInTheDocument();
  });
});
