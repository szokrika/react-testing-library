import React from 'react';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';
import { Input } from 'neutron-react-components';

import Form from './Form';

describe('<Form/> tests', () => {
  it('should find by label', () => {
    const {
      getByLabelText,
      queryByLabelText,
      getAllByLabelText,
      queryAllByLabelText,
      findByLabelText,
      findAllByLabelText
    } = render(<Form />);

    const allInputs = getAllByLabelText(/enter/i);
    const allInputsQuery = queryAllByLabelText(/enter/i);
    const name = getByLabelText(/enter your name/i);
    const email = getByLabelText(/enter your email/i);
    const invalid = queryByLabelText(/none/i);

    expect(allInputs.length).toBe(2);
    expect(allInputsQuery.length).toBe(2);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(invalid).not.toBeInTheDocument();
  });

  it('should find by placeholder', () => {
    const {
      getByPlaceholderText,
      queryByPlaceholderText,
      getAllByPlaceholderText,
      queryAllByPlaceholderText,
      findByPlaceholderText,
      findAllByPlaceholderText
    } = render(<Form />);

    const allInputs = getAllByPlaceholderText(/enter/i);
    expect(allInputs.length).toBe(2);

    const allInputsQuery = queryAllByPlaceholderText(/enter/i);
    expect(allInputsQuery.length).toBe(2);

    const name = getByPlaceholderText(/enter your name/i);
    expect(name).toBeInTheDocument();

    const email = getByPlaceholderText(/enter your email/i);
    expect(email).toBeInTheDocument();

    const invalid = queryByPlaceholderText(/none/i);
    expect(invalid).not.toBeInTheDocument();
  });

  it('should find by text', () => {
    const {
      getByText,
      queryByText,
      getAllByText,
      queryAllByText,
      findByText,
      findAllByText
    } = render(<Form />);

    const allInputs = getAllByText(/enter/i);
    expect(allInputs.length).toBe(2);

    const allInputsQuery = queryAllByText(/enter/i);
    expect(allInputsQuery.length).toBe(2);

    const name = getByText(/enter your name/i);
    expect(name).toBeInTheDocument();

    const email = getByText(/enter your email/i);
    expect(email).toBeInTheDocument();

    const invalid = queryByText(/none/i);
    expect(invalid).not.toBeInTheDocument();
  });

  it('should find by alt text', () => {
    const {
      getByAltText,
      queryByAltText,
      getAllByAltText,
      queryAllByAltText,
      findByAltText,
      findAllByAltText
    } = render(<Form />);

    const image = getByAltText(/image/i);
    expect(image).toBeInTheDocument();

    const qImage = queryByAltText(/image/i);
    expect(qImage).toBeInTheDocument();

    const invalidImage = queryByAltText(/none/i);
    expect(invalidImage).not.toBeInTheDocument();

    const arrImage = queryAllByAltText(/image/i);
    expect(arrImage.length).toBe(1);
  });

  it('should find by title attribute', () => {
    const {
      getByTitle,
      queryByTitle,
      getAllByTitle,
      queryAllByTitle,
      findByTitle,
      findAllByTitle
    } = render(<Form />);

    const form = getByTitle(/form title/i);
    expect(form).toBeInTheDocument();

    const qForm = queryByTitle(/form title/i);
    expect(qForm).toBeInTheDocument();

    const arrForm = queryAllByTitle(/form title/i);
    expect(arrForm.length).toBe(1);
  });

  it('should find by display value', () => {
    const {
      getByDisplayValue,
      queryByDisplayValue,
      getAllByDisplayValue,
      queryAllByDisplayValue,
      findByDisplayValue,
      findAllByDisplayValue
    } = render(<Input value="Csongor" />);

    const name = getByDisplayValue(/Csongor/i);
    expect(name).toBeInTheDocument();

    const qName = queryByDisplayValue(/Csongor/i);
    expect(qName).toBeInTheDocument();

    const arrName = queryAllByDisplayValue(/Csongor/i);
    expect(arrName.length).toBe(1);

    const invalid = queryByDisplayValue(/Szeles Csongor/i);
    expect(invalid).not.toBeInTheDocument();
  });

  it('should find by role attribute', () => {
    const {
      getByRole,
      queryByRole,
      getAllByRole,
      queryAllByRole,
      findByRole,
      findAllByRole
    } = render(<Form />);

    const role = getByRole(/button/i);
    expect(role).toBeInTheDocument();

    const qRole = queryByRole(/button/i);
    expect(qRole).toBeInTheDocument();

    const arrRole = queryAllByRole(/button/i);
    expect(arrRole.length).toBe(1);

    const invalid = queryByRole(/presentation/i);
    expect(invalid).not.toBeInTheDocument();
  });
});
