export async function isTokenBlacklisted(token: string) {
  const tokenExists = await redisClient.exists(token);
  return tokenExists;
}

export async function blacklistToken(token: string) {
  await redisClient.set(token, 'true');
}

export async function whitelistToken(token: string) {
  await redisClient.del(token);
}