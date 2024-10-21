export const config = {
  // eslint-disable-next-line node/prefer-global/process
  baseUrl: import.meta.env.VITE_APP_BASE_URL ?? process?.env?.CF_PAGES_URL ?? window?.location?.origin ?? 'http://localhost:3000',
};
