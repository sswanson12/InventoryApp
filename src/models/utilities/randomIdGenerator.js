export default function randomIdGenerator() {
  return Date.now() + Math.floor(Math.random() * 1000);
}
