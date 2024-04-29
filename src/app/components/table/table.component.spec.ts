import { render, screen } from '@testing-library/angular';
import { TableComponent } from './table.component';
import { Speaker } from '../../speakers/speaker.model';

describe('Table Component', () => {
  it('should display the loading spinner when loading', async () => {
    await render(TableComponent, {
      componentProperties: { data: [], loading: true },
    });

    expect(screen.getAllByRole('progressbar').length).toBe(1);
  });

  it('should display text when there is no data for the table', async () => {
    await render(TableComponent, {
      componentProperties: { data: [], loading: false },
    });

    expect(
      screen.getByText('There are no results for your current filter options.')
    ).toBeTruthy();
  });

  it('should display the data passed as a table', async () => {
    await render(TableComponent, {
      componentProperties: {
        data: [
          {
            uuid: 45,
            gender: 'male',
            name: {
              first: 'Hans-Christian',
              last: 'Welter',
            },
            location: {
              street: {
                number: 3095,
                name: 'Mozartstraße',
              },
              city: 'Buxtehude',
              state: 'Hamburg',
              country: 'Germany',
              postcode: '47874',
            },
            email: 'hans-christian.welter@example.com',
            dob: {
              age: 45,
            },
            phone: '0245-5965643',
          } as Speaker,
        ],
        loading: false,
      },
    });

    screen.getByText('Hans-Christian Welter');
    screen.getByText('Germany');
    expect(screen.getAllByRole('row').length).toBe(2);
  });
});
