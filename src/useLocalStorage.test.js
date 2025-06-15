import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage.js';

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('loads initial value from localStorage', () => {
    window.localStorage.setItem('key', JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    expect(result.current[0]).toBe('stored');
  });

  test('persists value to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    act(() => {
      result.current[1]('new');
    });
    expect(window.localStorage.getItem('key')).toBe(JSON.stringify('new'));
    expect(result.current[0]).toBe('new');
  });
});
