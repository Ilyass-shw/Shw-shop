import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

export type StoreType = ReturnType<typeof configureStore>;
export type RenderReturn = ReturnType<typeof render>;
export type SliceParameters = Parameters<typeof createSlice>;
export type UiType = React.ReactElement;

export interface WrapperParams {
  MyStore: StoreType;
  WithRouter?: boolean;
}

export interface useFormProps {
  email: string;
  phone: number;
  buyerAcceptMarketing: string;
}
