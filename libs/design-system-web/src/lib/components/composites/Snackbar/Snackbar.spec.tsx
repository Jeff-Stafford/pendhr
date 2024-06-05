import { render } from '@testing-library/react';

import Snackbar from './Snackbar';

describe('SnackBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Snackbar />);
    expect(baseElement).toBeTruthy();
  });
});
