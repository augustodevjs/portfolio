export const extractNameFile = (name: string): string => {
  const positionPoint = name.lastIndexOf('.');
  const nameFile = name.slice(0, positionPoint);

  return nameFile;
}