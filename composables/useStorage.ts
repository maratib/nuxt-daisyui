export const useStorage = () => {

  const getCurrentThemeName = () => {
    return localStorage.getItem('nuxt-color-mode')
  };

  const setItem = (key: string, value: string) => {
    return localStorage.setItem(key, value)
  };

  const getItem = (key: string) => {
    return localStorage.getItem(key)
  };

  return {
    getCurrentThemeName,
    setItem,
    getItem
  }
}
