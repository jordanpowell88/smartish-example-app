import { Order } from './order';
import { OrdersState, ORDERS_FEATURE } from './orders.reducer';
import { selectAllOrders } from './orders.selectors';
describe('Orders Selectors', () => {
  describe('selectAllOrders', () => {
    it('selects all orders', () => {
      // arrange
      const orders: Order[] = [{}, {}];
      const state = { orders } as OrdersState;
      const expected = orders;

      // act
      const actual = selectAllOrders.projector(state);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
