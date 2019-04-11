// const appReducer = require('../client/reducers/appReducer.js')
import appReducer from '../client/reducers/appReducer'
describe('App reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      codeInput: '',
      dataResults: {
        'Database Requests': null,
        'Data Points': null,
        'Nesting Depth': null,
        'Effective Runtime': null,
      },
      dataVis: {
        resolverNum: null,
        resolverNames: [],
      },
      networkLatency: null,
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(appReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(appReducer(state, action)).toBe(state);
    });
  });

})