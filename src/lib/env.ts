export function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key];
  if (!value && !fallback) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value || fallback!;
}
