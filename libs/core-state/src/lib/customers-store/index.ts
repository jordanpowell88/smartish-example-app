export * from './customer.actions';
export * from './customers.selectors';
export { Customer } from './customer';
export {
  CUSTOMERS_FEATURE,
  CustomersState,
  customersReducer,
} from './customers.reducer';
export { CustomersEffects } from './customers.effects';
export { CustomersService } from './customers.service';
export { CustomersStoreModule } from './customers-store.module';
