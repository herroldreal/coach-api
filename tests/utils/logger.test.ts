import Logger from '@App/utils/logger/log';

describe('Logger', () => {
  it('should log', () => {
    const spy = jest.spyOn(console, 'log');
    Logger.log('test');
    expect(spy).toHaveBeenCalledWith('[Log] test');
  });

  it('should warn', () => {
    const spy = jest.spyOn(console, 'warn');
    Logger.warn('test');
    expect(spy).toHaveBeenCalledWith('[Warn] test');
  });

  it('should error', () => {
    const spy = jest.spyOn(console, 'error');
    Logger.error('test');
    expect(spy).toHaveBeenCalledWith('[Error] test');
  });
});
