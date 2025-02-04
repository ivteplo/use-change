import { useContext, Context } from 'react';
import UseChangeContext from './Context';
import { SliceRecord, StoreSlice } from './types';

export default function useStoreSlice<STORE, SLICE = STORE>(
  storeSlice: StoreSlice<STORE, SLICE>,
): SLICE {
  const store = useContext(UseChangeContext as Context<STORE>);
  let slice: SliceRecord<SLICE>;

  if (typeof storeSlice === 'object') {
    slice = storeSlice;
  } else if (typeof storeSlice === 'function') {
    slice = storeSlice(store);
  } else {
    throw new Error('Unknown store slice');
  }

  return slice;
}
