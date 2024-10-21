export const config = {
    baseUrl: import.meta.env.VITE_APP_BASE_URL ?? process?.env?.CF_PAGES_URL ?? window?.location?.origin ?? "http://localhost:3000",
}