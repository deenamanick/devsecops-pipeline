import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

// ──────────────────────────────────────────────────────────
// Component Rendering Tests
// Validates that the App and its key sections render without crashing
// ──────────────────────────────────────────────────────────

describe('App Component', () => {
  it('should render without crashing', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    expect(() => {
      root.render(React.createElement(App));
    }).not.toThrow();

    root.unmount();
    document.body.removeChild(container);
  });
});
